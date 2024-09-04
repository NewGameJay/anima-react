import { ChevronRight } from ".";

export default {
  title: "Components/ChevronRight",
  component: ChevronRight,
  argTypes: {
    size: {
      options: ["sixteen", "twenty-four", "forty-eight", "twenty", "thirty-two", "forty"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "sixteen",
    className: {},
    img: "/img/size-48-1.png",
  },
};
