import Header from "@/components/shared/Header";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";

// Testing initial header state
it("should render the header with initial styles", () => {
  render(<Header />);
  const header = screen.getByTestId("header");
  expect(header.className).toContain("fixed top-0");
});
