import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "react-jss";
import guidelines from "@zlab-de/zel-react/guidelines.json";

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={guidelines}>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
