import { TickCircle } from ".";

export default {
  title: "Components/TickCircle",
  component: TickCircle,
  argTypes: {
    style: {
      options: ["twotone", "broken", "outline", "bold", "linear", "bulk"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "twotone",
    className: {},
    styleOutline: "/img/style-outline-1.png",
  },
};
