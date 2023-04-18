import { fireEvent, render, screen } from "@testing-library/react";
import { About } from "./About";

describe("<About/>", () => {
  it("hope it has a download button", () => {
    render(<About />);

    const buttonDownload = screen.getByText(/Download CV/i);

    expect(buttonDownload).toBeInTheDocument();
  });

  it("I hope that when you click download the curriculum", () => {
    render(<About />);

    const buttonDownload = screen.getByRole("link", { name: /Download CV/i });

    fireEvent.click(buttonDownload);

    expect(buttonDownload).toHaveAttribute("href", "/CurriculoMatheus.pdf");
  });
});
