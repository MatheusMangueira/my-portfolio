import { render, screen } from "@testing-library/react";
import { ContactPage } from "./ContactPage";

describe("<ContactPage/>", () => {
   it("should render the component", () => {
      render(<ContactPage />);
   
      const title = screen.getByLabelText(/contact page/i);
   
      expect(title).toBeInTheDocument();
   });
})