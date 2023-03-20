import { ICONS } from "../icons/Icon";
import { PATH } from "../services/Path";


const HeaderTopIcons = [
  {
    id: 1,
    icon: ICONS.FaWhatsapp,
  },
  {
    id: 2,
    icon: ICONS.AiOutlineInstagram,
  },
  {
    id:3,
    caption: "Log in ",
    route: PATH.ConnectedAuthPath.login,
  },
  {
    id:4,
    caption: "Sign up",
    route: PATH.ConnectedAuthPath.register,
  }


]

const HeaderBottomElements = [
  {
    id:1,
    caption: "About",
  },
  {
    id:2,
    caption: "Contacts",
  },
  {
    id:4,
    caption: "Profile",
  },
  {
    id:5,
    caption: "Products",
  }

]

export const LIST = {
  HeaderTopIcons,
  HeaderBottomElements
};