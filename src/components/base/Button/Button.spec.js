import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

const defaultLabel = "Button Test";
const defaultWrapper = mount(Button, { props: { label: defaultLabel } });

describe("Button", () => {
  it("Should match the default snapshot", () => {
    expect(defaultWrapper.element).toMatchSnapshot();
  });

  it("Should display the passed in label prop", () => {
    expect(defaultWrapper.find("button").text()).toEqual(defaultLabel);
  });
});
