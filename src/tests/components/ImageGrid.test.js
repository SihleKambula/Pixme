import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ImageGrid from "../../components/ImageGrid";

//mock data
const images = [
  { id: 1, imageURL: "imageURL" },
  { id: 2, imageURL: "imageURL" },
];
const MockImageGrid = ({ data }) => (
  <BrowserRouter>
    <ImageGrid data={data} />
  </BrowserRouter>
);
describe("ImageGrid", () => {
  it("Should render 2 images", async () => {
    render(<MockImageGrid data={images} />);
    const imageElements = await screen.findAllByTestId(/img/i);
    expect(imageElements.length).toBe(2);
  });
});
