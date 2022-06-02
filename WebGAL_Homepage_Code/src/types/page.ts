import {IContent} from "./element"


export type theme = 'default' | 'poetic' | 'fashion' | 'modern' | 'cyberpunk'

export interface IPage {
  title: string
  theme: theme
  contents: Array<IContent>
}
