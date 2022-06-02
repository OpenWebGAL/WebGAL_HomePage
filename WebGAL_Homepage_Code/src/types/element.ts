type IElementType = 'text' | 'button'

interface IElement {
  type: IElementType
  content:string
  bold?: boolean
  color?: string
  href?: string
}

export interface IContent {
  mainPicSrc?: string
  contents: Array<IElement>
}
