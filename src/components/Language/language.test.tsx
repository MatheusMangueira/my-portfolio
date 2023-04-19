import { render, screen } from "@testing-library/react";
import { Language } from "./Language";

describe("<Language/>", () => {
  render(<Language />);

  it("should render the component", () => {
    const title = screen.getByLabelText(/language/i);

    expect(title).toBeInTheDocument();
  });
});
