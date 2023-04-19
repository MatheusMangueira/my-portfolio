import { render, screen } from "@testing-library/react";
import { AboutPage } from "./AboutPage";

describe("<AboutPage/>", () => {
  it("should render the component", () => {
    render(<AboutPage />);

    const title = screen.getByLabelText(/about page/i);

    expect(title).toBeInTheDocument();
  });
});
