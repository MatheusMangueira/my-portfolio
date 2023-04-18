import { fireEvent, render, screen } from "@testing-library/react";
import { Initial } from ".";

describe("<Initial/>", () => {
  it("Shoud title button", () => {
    render(<Initial />);

    const title = screen.getByText(/I'm a developer/i);
    expect(title).toBeInTheDocument();
  });

  it("shoud redirect to about page", () => {
    render(<Initial />);

    const buttonLink = screen.getByRole("link", { name: /I'm a developer/i });

    fireEvent.click(buttonLink);

    expect(buttonLink).toHaveAttribute("href", "#About");
  });
});
