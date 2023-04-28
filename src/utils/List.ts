import { ICONS } from "../icons/Icon";
import { PATH } from './../services/Path';


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
    route: PATH.ConnectedAuthPath.profile,
  },
  {
    id:5,
    caption: "Products",
    route: PATH.ConnectedAuthPath.products
  }

];


const SliderList = [
  {
    id: 1,
    img: "https://peaklife.in/wp-content/uploads/2018/06/Luxury-Shopping-Mall.jpg"
  },
  {
    id: 2,
    img: "https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner__blog_post_banner/public/2023-02/Harrods-luxury-building-in-.jpg"
  },
];

const adminList = [
  {
    id:1,
    title: "Profile",
    route: PATH.AdminPath.profile,
    icon: ICONS.ImProfile
  },
  {
    id:12,
    title: "Products",
    route: PATH.AdminPath.products,
    icon: ICONS.MdProductionQuantityLimits
  },{
    id:2,
    title: "Categories",
    route: PATH.AdminPath.category,
    icon: ICONS.TbCategory
  },{
    id:3,
    title: "Contacts",
    route: PATH.AdminPath.contacts,
    icon: ICONS.RiContactsLine
  },
  {
    id:4,
    title: "Slider",
    route: PATH.AdminPath.slider,
    icon: ICONS.BsSliders
  },
]







export const LIST = {
  HeaderTopIcons,
  HeaderBottomElements,
  SliderList,
  adminList
};