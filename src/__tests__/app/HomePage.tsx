import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

it("should render the default message when there are no posts", () => {
  render(<Home />);

  expect(screen.getByText(/No hay publicaciones/i)).toBeInTheDocument();
});
