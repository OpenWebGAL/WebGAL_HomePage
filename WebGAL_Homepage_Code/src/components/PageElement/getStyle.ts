import {theme} from "../../types/page";
import defaultStyle from "./default.module.scss";

export function getStyle(style:theme){
  switch (style) {
    case "default":
      return defaultStyle;
    default:
      return defaultStyle;
  }
}
