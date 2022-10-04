import { render, screen } from "@testing-library/react";
import Bar from "../components/Bar";

describe("<Bar/>", () => {
  test("rendering title with expected text", () => {
    render(<Bar />);
    expect(screen.getByRole("heading")).toHaveTextContent("Logo.");
  });
});
