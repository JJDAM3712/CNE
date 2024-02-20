import { CustomFlowbiteTheme } from 'flowbite-react';



const logoSide: CustomFlowbiteTheme['logo'] = {
  base: "mb-4 flex items-center pl-0",
  collapsed: {
    on: "hidden",
    off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
  },
  img: "mr-2 h-11"
};
const SideBg: CustomFlowbiteTheme = {
  Sidebar: {
    color: {
      primary: 'bg-red-500 hover:bg-red-600',
    },
  },
};

export { logoSide, SideBg };
