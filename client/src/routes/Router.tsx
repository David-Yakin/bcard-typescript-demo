import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import Sandbox from "../sandbox/Sandbox";
import SignupPage from "../users/pages/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import LifeCycleHooks from "../sandbox/life-cycle-hooks/LifeCycleHooks";
import InitialCycle from "../sandbox/life-cycle-hooks/InitialCycle";
import UseStateCycle from "../sandbox/life-cycle-hooks/UseStateCycle";
import UseEffectAsComponentDidMount from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount";
import UseEffectAsComponentDidUpdate from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidUpdate";
import UseEffectAsComponentWillUnmount from "../sandbox/life-cycle-hooks/UseEffectAsComponentWillUnmount";
import UseEffectNoDependencies from "../sandbox/life-cycle-hooks/UseEffectNoDependencies";
import CustomHooks from "../sandbox/custom-hooks/CustomHooks";
import CustomCounterHook from "../sandbox/custom-hooks/CustomCounterHook";
import CustomName from "../sandbox/custom-hooks/CustomName";
import Memoization from "./../sandbox/memoization/Memoization";
import UseCallback from "../sandbox/memoization/use-callback/UseCallback";
import UseMemo from "../sandbox/memoization/use-memo/UseMemo";
import ContextMenu from "../sandbox/context/ContextMenu";
import A from "../sandbox/context/components/A";
import SnackExample from "../sandbox/context/SnackExample";
import FormTest from "../sandbox/forms/FormTest";
import LoginPage from "../users/pages/LoginPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import CreateCardPage from "../cards/pages/CreateCardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import FavCardsPage from "../cards/pages/FavCardsPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route
        path={`${ROUTES.CARD_DETAILS}/:cardId`}
        element={<CardDetailsPage />}
      />
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:cardId`} element={<EditCardPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SANDBOX} element={<Sandbox />}>
        <Route path="lifecycle" element={<LifeCycleHooks />}>
          <Route path="initial" element={<InitialCycle />} />
          <Route path="use-state-cycle" element={<UseStateCycle />} />
          <Route
            path="componentDidMount"
            element={<UseEffectAsComponentDidMount />}
          />
          <Route
            path="componentDidUpdate"
            element={<UseEffectAsComponentDidUpdate />}
          />
          <Route
            path="componentWillUnmount"
            element={<UseEffectAsComponentWillUnmount />}
          />
          <Route path="no-dependencies" element={<UseEffectNoDependencies />} />
        </Route>
        <Route path="custom" element={<CustomHooks />}>
          <Route path="counter" element={<CustomCounterHook />} />
          <Route path="user" element={<CustomName />} />
        </Route>
        <Route path="memoization" element={<Memoization />}>
          <Route path="use-callback" element={<UseCallback />} />
          <Route path="use-memo" element={<UseMemo />} />
        </Route>
        <Route path="context" element={<ContextMenu />}>
          <Route path="name" element={<A />} />
          <Route path="snack" element={<SnackExample />} />
        </Route>
        <Route path="forms" element={<FormTest />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
