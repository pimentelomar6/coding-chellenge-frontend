import Home from "@/app/page";
import Header from "@/components/Header";
import { render, screen } from "@testing-library/react";

it("should render the header with profile image and username", () => {
  render(
    <Header>
      <Home />
    </Header>
  );

  const profileImage = screen.getByAltText(/Profile Image/i);
  const username = screen.getByText(/Anna Smith/i);

  expect(profileImage).toBeInTheDocument();
  expect(username).toBeInTheDocument();
});
