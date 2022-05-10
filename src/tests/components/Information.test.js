import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Information from "../../components/Information";

it("Should render same text passed into title and value props", async () => {
  render(<Information title='catagory' value='wolves' />);
  const informationElement = screen.getByText(/catagory/i);
  expect(informationElement).toBeInTheDocument();
});
