import About from "@/components/About";
import { render, screen } from "@testing-library/react";

it("should render the about message", () => {
  render(<About />);

  expect(
    screen.getByText(/Soy una persona proactiva, adaptable/i)
  ).toBeInTheDocument();
});
