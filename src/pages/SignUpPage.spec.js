import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react";

test("has header", () => {
  render(<SignUpPage />);
  const header = screen.getByText("Sign Up");
  expect(header).toBeInTheDocument();
});
