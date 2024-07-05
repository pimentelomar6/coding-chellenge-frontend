import ContactForm from "@/components/ContactForm";
import { render, screen } from "@testing-library/react";

describe("ContactForm component", () => {
  it("should render the form elements and display validation errors", () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/Nombre/i);
    const emailInput = screen.getByLabelText(/Correo/i);
    const messageInput = screen.getByLabelText(/Mensaje/i);
    const submitButton = screen.getByRole("button", { name: /Enviar/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
