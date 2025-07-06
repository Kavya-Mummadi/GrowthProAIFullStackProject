// Created a context to share business data and updater function across components
import React from "react";

const dashboardContext = React.createContext({
  businessData: null,
  setBusinessData: () => {},
});

export default dashboardContext;
