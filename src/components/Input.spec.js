import { render, screen } from "@testing-library/react";
import Input from "./Input";

it("has is-invalid class for input when help is set", () => {
  render(<Input help="Error message" />);
  const input = screen.getByRole("textbox");
  expect(input.classList).toContain("is-invalid");
});
it("has invalid-feedback class for the span when help is set", () => {
  render(<Input help="Error message" />);
  const span = screen.getByTestId("custom-element");
  expect(span.classList).toContain("invalid-feedback");
});
it("does not have is-invalid class for input when help is not set", () => {
  render(<Input help="Error message" />);
  const input = screen.getByRole("textbox");
  expect(input.classList).not.toBe("is-invalid");
});
