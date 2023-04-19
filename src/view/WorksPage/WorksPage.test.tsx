import { render, screen } from "@testing-library/react";
import { WorksPage } from "./WorksPage";

describe("<WorksPage/>", () => {
  render(<WorksPage />);

  it("should render the component", () => {
    const title = screen.getByLabelText(/works page/i);

    expect(title).toBeInTheDocument();
  });
});
