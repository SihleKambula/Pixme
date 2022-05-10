import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Information from "../../components/Information";

describe("Information props", () => {
  it("Should render same text passed into title and value props", async () => {
    render(<Information title='catagory' value='wolves' />);
    const titleElement = screen.getByText(/catagory/i);
    const valueElement = screen.getByText(/wolves/i);
    expect(titleElement).toBeVisible();
    expect(valueElement).toBeVisible();
  });

  // Find By
  it("Should render same text passed into title and value props", async () => {
    render(<Information title='catagory' value='wolves' />);
    const titleElement = await screen.findByText(/catagory/i);
    const valueElement = await screen.findByText(/wolves/i);
    expect(titleElement).toBeVisible();
    expect(valueElement).toBeVisible();
  });
});
