import { render, screen } from "@testing-library/react";
import { PageInitial } from ".";

describe("pageInitial", () => {
  test("title description", () => {
    render(<PageInitial />);

    const titleDescription = screen.getByText("My name is");
    expect(titleDescription).toBeInTheDocument();
  });

  test("title name", () => {
    render(<PageInitial />);

    const titleName = screen.getByText("Matheus Mangueira");
    expect(titleName).toBeInTheDocument();
  });

  test("title button", () => {
    render(<PageInitial />);

    const title = screen.getByText("I´m a developer");
    expect(title).toBeInTheDocument();
  });
});
