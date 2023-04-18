import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonNavigate } from "./ButtonNavigate";

describe("<ButtonNavigate/>", () => {
  it("Shoud buttonNavigate", () => {
    render(<ButtonNavigate />);

    const buttonNavigate = screen.getByRole("link");

    expect(buttonNavigate).toBeInTheDocument();
  });

  it("shoud clicked buttonNavigate", () => {
    render(<ButtonNavigate />);

    const buttonNavigate = screen.getByRole("link");

    fireEvent.click(buttonNavigate);

    expect(buttonNavigate).toHaveAttribute("href", "#Home");
  });
});
