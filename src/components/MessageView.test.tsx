import { render } from "@testing-library/react";
import { Message } from "../domain/Message";
import { MessageView } from "./MessageView";

const message: Message = {
  author: "Birgit",
  message: "Hallo Richard!",
  date: 1,
  id: "adsnodiosjadijasojoi",
};

describe("<MessageView />", () => {
  test("ob es rendert", () => {
    render(<MessageView message={message} />);
  });

  test("dass das Ding ne Message rendert", () => {
    const { queryByText } = render(<MessageView message={message} />);
    expect(queryByText("Hallo Richard!")).not.toBeNull();
  });

  test("dass die id nicht gerendert wird", () => {
    const { queryByText } = render(<MessageView message={message} />);
    expect(queryByText("adsnodiosjadijasojoi")).toBeNull();
  });

  test("it renders according to snapshot", () => {
    const { container } = render(<MessageView message={message} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <article>
          Hallo Richard!
          <footer>
            BIRGIT
          </footer>
        </article>
      </div>
    `);
  });
});
