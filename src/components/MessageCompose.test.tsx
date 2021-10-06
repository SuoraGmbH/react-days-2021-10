import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MessageCompose } from "./MessageCompose";
describe("<MessageCompose />", () => {
  test("it renders without crashing", () => {
    render(<MessageCompose onMessageSend={() => {}} />);
  });

  test("it renders the typed content next to the input", () => {
    const { getByRole, queryByText } = render(
      <MessageCompose onMessageSend={() => {}} />
    );

    const inputField = getByRole("textbox");

    userEvent.type(inputField, "Hallo Anni!");

    screen.logTestingPlaygroundURL();

    expect(queryByText(/Hallo Anni!/)).not.toBeNull();
  });

  test("it triggers a custom event when the user sends a new message", () => {
    const handleMessageSendMock = jest.fn();
    const { getByRole } = render(
      <MessageCompose onMessageSend={handleMessageSendMock} />
    );

    const inputField = getByRole("textbox");

    userEvent.type(inputField, "Hallo Anni!{enter}");

    expect(handleMessageSendMock).toHaveBeenCalled();
  });
});
