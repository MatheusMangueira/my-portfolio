import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { NavMobileItem } from "./NavMobileItem";

const HREF_MOCK = "/Home";
const CHILDREN_MOCK = "Home";

describe("<NavBar />", () => {
  it("should render the navbar", () => {
    render(<Navbar />);

    const navbar = screen.getByLabelText("Navbar");

    expect(navbar).toBeInTheDocument();
  });

  it("should render NavBarMobime", () => {
    render(<NavMobileItem href={HREF_MOCK} children={CHILDREN_MOCK} />);

    const link = screen.getByRole("link", { name: CHILDREN_MOCK });

    expect(link).toHaveAttribute("href", HREF_MOCK);
  });
});
