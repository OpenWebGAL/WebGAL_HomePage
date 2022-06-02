import {theme} from "../../types/page";

export function getImageAnimationName(style: theme) {
  switch (style) {
    case "default":
      return 'elementDefault'
    default:
      return 'elementDefault';
  }
}
