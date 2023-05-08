import { useState, useCallback, useMemo, ChangeEvent } from "react";
import Joi, { PartialSchemaMap } from "joi";

type HandleSubmit = (dataObject: Record<string, unknown>) => void;

const useForm = <TForm extends Record<string, unknown>>(
  initialForm: TForm,
  schema: PartialSchemaMap<any>,
  handleSubmit: HandleSubmit
) => {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState<{} | TForm>({});

  const handleReset = useCallback(() => {
    setData(initialForm);
    setErrors({});
  }, [initialForm]);

  type TargetType = { name: string; value: string };

  const validateProperty = useCallback(
    ({ name, value }: TargetType) => {
      const obj = { [name]: value };
      const generateSchema = Joi.object({ [name]: schema[name] });
      const { error } = generateSchema.validate(obj);
      return error ? error.details[0].message : null;
    },
    [schema]
  );

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = target;
      const errorMessage = validateProperty(target);
      if (errorMessage) setErrors(prev => ({ ...prev, [name]: errorMessage }));
      else
        setErrors(prev => {
          let obj: Record<string, unknown> = { ...prev };
          delete obj[name];
          return obj;
        });

      setData(prev => ({ ...prev, [name]: value }));
    },
    [validateProperty]
  );

  const validateForm = useCallback(() => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    if (error) return error;
    return null;
  }, [schema, data]);

  const onSubmit = useCallback(() => {
    handleSubmit(data);
  }, [handleSubmit, data]);

  const value = useMemo(() => {
    return { data, errors };
  }, [data, errors]);

  return {
    value,
    onSubmit,
    handleChange,
    handleReset,
    validateForm,
    setData,
  };
};

export default useForm;