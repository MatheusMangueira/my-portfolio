import { render, screen } from "@testing-library/react";
import { Works } from "./Works";

describe("<Works/>>", () => {
  it("should render the component", () => {
    render(<Works />);

    const title = screen.getByLabelText("works");

    expect(title).toBeInTheDocument();
  });
});
