import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProfileBuildForm from "./ProfileBuildForm";

describe("ProfileBuildForm Component", () => {
  test("renders form correctly", () => {
    render(<ProfileBuildForm />);
    expect(screen.getByText("Create Your Profile")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone (Optional)")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("shows validation error messages", async () => {
    render(<ProfileBuildForm />);
    fireEvent.click(screen.getByText("Submit"));
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(await screen.findByText("Password is required")).toBeInTheDocument();
  });

  test("accepts valid input and submits form", async () => {
    render(<ProfileBuildForm />);
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    await userEvent.type(nameInput, "John Doe");
    await userEvent.type(emailInput, "john.doe@example.com");
    await userEvent.type(passwordInput, "StrongPassword123");

    fireEvent.click(screen.getByText("Submit"));

    expect(await screen.findByText("Profile Successfully Created!")).toBeInTheDocument();
  });

  test("resets form on 'Create Another Profile'", async () => {
    render(<ProfileBuildForm />);
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    await userEvent.type(nameInput, "John Doe");
    await userEvent.type(emailInput, "john.doe@example.com");
    await userEvent.type(passwordInput, "StrongPassword123");

    fireEvent.click(screen.getByText("Submit"));

    const resetButton = await screen.findByText("Create Another Profile");
    fireEvent.click(resetButton);

    expect(screen.getByLabelText("Name")).toHaveValue("");
    expect(screen.getByLabelText("Email")).toHaveValue("");
    expect(screen.getByLabelText("Password")).toHaveValue("");
  });
});
