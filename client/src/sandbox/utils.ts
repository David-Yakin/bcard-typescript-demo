export const getTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const millisecond = date.getMilliseconds();
  return `${time}.${millisecond}`;
};

export const colorLog = (text: string, color: string) => {
  console.log(`%c${text}: ${getTime()}`, `color: ${color}; font-weight: bold`);
  return null;
};
