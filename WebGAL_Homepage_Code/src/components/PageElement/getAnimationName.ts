import {theme} from "../../types/page";

export function getAnimationName(style: theme) {
  switch (style) {
    case "default":
      return 'elementDefault'
    default:
      return 'elementDefault';
  }
}
