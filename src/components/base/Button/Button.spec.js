import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button", () => {
  it("Should display the passed in label prop", () => {
    const label = "Button Test";
    const wrapper = mount(Button, { props: { label } });

    expect(wrapper.find("button").text()).toEqual(label);
  });
});
