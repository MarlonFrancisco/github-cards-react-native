import React from "react";
import { routes } from "./routes";
import { StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";

export default () => {
  const Layout = createAppContainer(routes);
  return (
    <>
      <StatusBar backgroundColor="#2089dc" barStyle="light-content" />
      <Layout />
    </>
  )
};