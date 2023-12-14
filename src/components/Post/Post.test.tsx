import { render, screen } from "@testing-library/react";
import Post from ".";

describe("Lets test if the component is working", () => {
  test("Should render correct", () => {
    render(
      <Post imageUrl="https://via.placeholder.com/300x300">Testing Post</Post>
    );
    expect(screen.getByText("Testing Post")).toBeInTheDocument();
  });
});
