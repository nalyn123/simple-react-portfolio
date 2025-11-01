import { template } from "@babel/core";
import {
  Home,
  SimpleFloatingHover,
  SimpleFloatingButton,
  SimpleScrollAnimation,
} from "@pages/index";

export const routes = [
  {
    path: "/",
    component: Home,
    template: "layout",
  },
  {
    path: "/simple-floating-hover",
    component: SimpleFloatingHover,
  },
  {
    path: "/simple-floating-button",
    component: SimpleFloatingButton,
  },
  {
    path: "/simple-scroll-animation",
    component: SimpleScrollAnimation,
  },
];
