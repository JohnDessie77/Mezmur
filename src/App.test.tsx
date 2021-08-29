import { render } from "@testing-library/react";
import React from "react";
import AppRoutes from "./app-routes";

test("renders learn react link", () => {
  const { getByText } = render(<AppRoutes />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
