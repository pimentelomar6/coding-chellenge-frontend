import Interests from "@/components/Interests";
import { render, screen } from "@testing-library/react";

describe("Interests component", () => {
  it("should render the TV Series and Sports sections with images", () => {
    render(<Interests />);

    const tvSeriesHeading = screen.getByText(/TV y Series/i);
    const sportsHeading = screen.getByText(/Música/i);
    const images = screen.getAllByRole("img", { name: /TV Series|Sports/i });

    expect(tvSeriesHeading).toBeInTheDocument();
    expect(sportsHeading).toBeInTheDocument();
    expect(images.length).toBe(6);
  });
});
