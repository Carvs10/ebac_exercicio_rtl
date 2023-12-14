import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Lets add two comments", () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId("comment"), {
      target: {
        value: "Add comment in a post",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comment"));

    fireEvent.change(screen.getByTestId("comment"), {
      target: {
        value: "Add another comment in a post",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comment"));

    expect(screen.getAllByTestId("post-comment")).toHaveLength(2);
  });
});
