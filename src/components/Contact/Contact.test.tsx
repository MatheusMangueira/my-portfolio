import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "./Contact";

describe("<Contact/>", () => {
  it("should render the contact page", async () => {
    render(<Contact />);

    const contactPage = screen.getByText("Contact");

    expect(contactPage).toBeInTheDocument();

    const inputName = screen.getByPlaceholderText(/name/i);
    userEvent.type(inputName, "name");

    const inputEmail = screen.getByPlaceholderText(/email/i);
    userEvent.type(inputEmail, "email");

    const inputMessage = screen.getByPlaceholderText(/message/i);
    userEvent.type(inputMessage, "message");

    const buttonSend = screen.getByText("Send");

    userEvent.click(buttonSend);
  });

  it("should render error message", async () => {
    render(<Contact />);

    const buttonSend = screen.getByText("Send");
    userEvent.click(buttonSend);

    await waitFor(() => {
      const errorNames = screen.getByText("name is required");
      expect(errorNames).toBeInTheDocument();
    });
  });
});
