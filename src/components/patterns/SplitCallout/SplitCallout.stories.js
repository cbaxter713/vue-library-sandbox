import SplitCallout from "./SplitCallout.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Patterns/Split Callout",
  component: SplitCallout,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  // argTypes: {
  //   size: {
  //     control: { type: "select" },
  //     options: ["sm", "md", "lg"],
  //   },
  //   theme: {
  //     control: { type: "select" },
  //     options: ["primary", "secondary", "action"],
  //   },
  // },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SplitCallout },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<SplitCallout v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: "Default title",
  copy: "Lorem Ipsum and some other gibberish here",
  image: "https://via.placeholder.com/150",
};

export const ImageRight = Template.bind({});
ImageRight.args = {
  title: "Default title",
  copy: "Lorem Ipsum and some other gibberish here",
  image: "https://via.placeholder.com/150",
  rightAligned: true,
};
