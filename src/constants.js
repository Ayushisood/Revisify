import { AiOutlineApartment, AiOutlineHome } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

const addLinks = [
  { label: "Arrays", icon: <AiOutlineHome />, to: "/topics/arrays" },
  { label: "Linked-Lists", icon: <AiOutlineHome />, to: "/topics/linked-lists" },
];

export const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Topics",
    icon: <AiOutlineApartment />,
    to: "/topics",
    subLinks: addLinks,
  },
  {
    label: "Logout",
    icon: <MdLogout />,
  },
];
