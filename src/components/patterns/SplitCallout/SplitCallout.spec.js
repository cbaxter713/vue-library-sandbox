import { mount } from "@vue/test-utils";
import SplitCallout from "./SplitCallout.vue";

const wrapper = mount(SplitCallout, {
  props: {
    title: "Default title",
    copy: "Lorem Ipsum and some other gibberish here",
    image: "https://via.placeholder.com/150",
  },
});

describe("SplitCallout", () => {
  it("Should match the default snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
