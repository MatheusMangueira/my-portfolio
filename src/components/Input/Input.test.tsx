import { render, screen } from "@testing-library/react";
import { Input } from "./Input";
import userEvent from "@testing-library/user-event";

const onChange = jest.fn();
const VALUE_MOCK = "value";
const NAME_MOCK = "name";
const PLACEHOLDER_MOCK = "placeholder";
const TYPE_MOCK = "text";

describe("<Input />", () => {
  it("should render the input", () => {
    render(
      <Input
        name={NAME_MOCK}
        value={VALUE_MOCK}
        onChange={onChange}
        placeholder={PLACEHOLDER_MOCK}
        type={TYPE_MOCK}
      />
    );

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  it("should render the input with the correct value", () => {
    render(
      <Input
        name={NAME_MOCK}
        value={VALUE_MOCK}
        onChange={onChange}
        placeholder={PLACEHOLDER_MOCK}
        type={TYPE_MOCK}
      />
    );

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("value");
    expect(input).toHaveAttribute("name", "name");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("placeholder", "placeholder");
  });

  it("should call onChange when the input value changes", () => {
    render(
      <Input
        name={NAME_MOCK}
        value={VALUE_MOCK}
        onChange={onChange}
        placeholder={PLACEHOLDER_MOCK}
        type={TYPE_MOCK}
      />
    );

    const input = screen.getByRole("textbox");
    const test = "matheus";

    userEvent.type(input, test); // useEvent simula a ação do usuário

    expect(onChange).toBeCalledTimes(test.length);
  });
});
