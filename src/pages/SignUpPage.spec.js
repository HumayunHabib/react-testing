import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react";
describe("Sign UP Page", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<SignUpPage />);
      const header = screen.getByText("Sign Up");
      expect(header).toBeInTheDocument();
    });

    it("has username input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Username");
      expect(input).toBeInTheDocument();
    });
    it("has email input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("E-mail");
      expect(input).toBeInTheDocument();
    });
  });
});
