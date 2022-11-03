import { render, screen } from "@testing-library/react";
import AccountActivationPage from "./AccountActivationPage";
import { setupServer } from "msw/node";
let counter = 0;
describe("Accounts Activation Page", () => {
  const setup = (token) => {
    const match = { params: { token } };
    render(<AccountActivationPage match={match} />);
  };
  it("displays activation success message when token is valid", async () => {
    setup("123");
    const message = await screen.findByText("Account is activated");
    expect(message).toBeInTheDocument();
  });
  it("sends activation activation request to backend", async () => {
    setup("123");
    await screen.findByText("Account is activated");
  });
});
