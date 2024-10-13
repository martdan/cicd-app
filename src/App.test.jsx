import React from "react";  // Add this line
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { expect, test } from "vitest";

test("App form submission", async () => {
    render(<App />);  // Now React is defined

    // Get the email input and submit button by their test IDs
    const emailInput = screen.getByTestId("emailInput");
    const submitButton = screen.getByTestId("submitButton");

    // Simulate typing a valid email address
    await userEvent.type(emailInput, 'sigmaschool@gmail.com');

    // Check if the submit button becomes enabled after typing the valid email
    expect(submitButton).toBeEnabled();
});
