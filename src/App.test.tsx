import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
   render(<App />);

   it("should render the component", () => {
      const title = screen.getByLabelText(/main page/i);

      expect(title).toBeInTheDocument();
   })
})