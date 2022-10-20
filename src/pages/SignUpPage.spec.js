import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { rest } from "msw";

describe("Sign UP Page", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<SignUpPage />);
      const header = screen.getAllByText("Sign Up");
      expect(header[0]).toBeInTheDocument();
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
    it("has  password", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Password");
      expect(input).toBeInTheDocument();
    });
    it("has password type for password input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Password");
      expect(input.type).toBe("password");
    });
    it("has password repeat", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Password Repeat");
      expect(input).toBeInTheDocument();
    });
    it("has password type for password repeat input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Password Repeat");
      expect(input.type).toBe("password");
    });
    it("has Sign Up button", () => {
      render(<SignUpPage />);
      const button = screen.getByRole("button", { name: "Sign Up" });
      expect(button).toBeInTheDocument();
    });
    it("disables the button initially", () => {
      render(<SignUpPage />);
      const button = screen.getByRole("button", { name: "Sign Up" });
      expect(button).toBeDisabled();
    });
  });
  describe("interactions", () => {
    let requestBody;

    const server = setupServer(
      rest.post("/api/1.0/users", (req, res, ctx) => {
        requestBody = req.body;
        return res(ctx.status(200));
      })
    );
    beforeEach(() => {});
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    let button;
    const setup = () => {
      render(<SignUpPage />);
      const usernameInput = screen.getByLabelText("Username");
      const emailInput = screen.getByLabelText("E-mail");
      const passwordInput = screen.getByLabelText("Password");
      const passwordRepeatInput = screen.getByLabelText("Password Repeat");
      userEvent.type(usernameInput, "user1");
      userEvent.type(emailInput, "user1@mail.com");
      userEvent.type(passwordInput, "P4ssword");
      userEvent.type(passwordRepeatInput, "P4ssword");
      button = screen.queryByRole("button", { name: "Sign Up" });
    };

    it("enables the button when password and password repeat has same value", () => {
      setup();
      expect(button).toBeEnabled();
    });
    it("sends username, email, and password to backend after clicking the button", async () => {
      setup();

      userEvent.click(button);

      await new Promise((resolve) => setTimeout(resolve, 500));

      expect(requestBody).toEqual({
        username: "user1",
        email: "user1@mail.com",
        password: "P4ssword",
      });
    });
    it("displays the spinner after clicking the submit", async () => {
      setup();
      expect(screen.queryByRole("status")).not.toBeInTheDocument();
      userEvent.click(button);
      const spinner = screen.getByRole("status");
      expect(spinner).toBeInTheDocument();
    });
    it("displayys validation message for username", async () => {
      server.use(
        rest.post("/api/1.0/users", (req, res, ctx) => {
          return res(
            ctx.status(400),
            ctx.json({
              validationErrors: { username: "Username cannot be null" },
            })
          );
        })
      );
      setup();
      userEvent.click(button);
      const validationError = await screen.findByText(
        "Username cannot be null"
      );
      expect(validationError).toBeInTheDocument();
    });
  });
});
