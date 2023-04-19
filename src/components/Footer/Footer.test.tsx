import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("<Footer/>", () => {
  it("should render the component", () => {
    render(<Footer />);

    const title = screen.getByText(/My Social Media/i);

    expect(title).toBeInTheDocument();
  });
});
