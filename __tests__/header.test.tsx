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

it("should update header styles when scrolling down", () => {
  render(<Header />);
  const header = screen.getByTestId("header");
  const headerChild = screen.getByTestId("headerChild");
  fireEvent.scroll(window, { target: { scrollY: 50 } });

  expect(header).toHaveStyle({ top: "-20%" });
  expect(headerChild).toHaveStyle({ backgroundColor: "#F7F1EC" });
  expect(headerChild).toHaveStyle({ color: "#2C231D" });
});

it("should update header styles when scrolling up", () => {
  render(<Header />);
  const header = screen.getByTestId("header");
  const headerChild = screen.getByTestId("headerChild");
  fireEvent.scroll(window, { target: { scrollY: -50 } });

  expect(header).toHaveStyle({ top: "0" });
  expect(headerChild).toHaveStyle({ backgroundColor: "#F7F1EC" });
  expect(headerChild).toHaveStyle({ color: "#2C231D" });
});

it("should reset header styles when scrollY is 0", () => {
  render(<Header />);
  const headerChild = screen.getByTestId("headerChild");
  fireEvent.scroll(window, { target: { scrollY: 0 } });

  expect(headerChild.className).toContain("headerChildScroll");
});
