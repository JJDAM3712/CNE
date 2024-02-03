import{ CustomFlowbiteTheme } from 'flowbite-react';

 
const logoSide: CustomFlowbiteTheme['logo'] = {
	base: "mb-3 flex items-center pl-2.5",
    collapsed: {
      on: "hidden",
      off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    },
		img: "mr-2 h-11 w-16"
};

export default logoSide;
