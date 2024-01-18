import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "jest-styled-components";

import { Input } from "./index";

describe("<Input />", () => {
  it("renders component correctly", () => {
    const { container } = render(<Input value="default value" />);

    const input = screen.getByDisplayValue("default value");
    expect(input).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("renders placeholder correctly", () => {
    render(<Input placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText("default placeholder");
    expect(input).toBeInTheDocument();
  });

  it("changes the data", () => {
    render(<Input placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText(
      "default placeholder",
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "study react" } });
    expect(input.value).toBe("study react");
  });

  //   as HTMLInputElement를 추가하여 TypeScript에게 이 정보를 알려주는 것입니다.

  // 이렇게 하면, 이후에 이 input 변수를 사용할 때 TypeScript는 이 변수가 HTMLInputElement 타입이라는 것을 알고, 이에 따라 해당 타입의 프로퍼티와 메서드를 사용할 수 있습니다. 예를 들어, input.value나 input.checked와 같은 속성에 접근할 수 있게 됩니다.
});
