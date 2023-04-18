import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("should render the home page", () => {
    render(<HomePage />);

    const homePage = screen.getByLabelText("Home Page");

    expect(homePage).toBeInTheDocument();
  });
});
