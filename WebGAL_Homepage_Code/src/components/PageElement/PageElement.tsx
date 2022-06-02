import {IContent} from "../../types/element";
import {ReactElement} from "react";
import './animation.scss'
import {theme} from "../../types/page";
import {getAnimationName} from "./getAnimationName";
import {getImageAnimationName} from "./getImageAnimationName";
import {getStyle} from "./getStyle";

interface IProps {
  content: IContent | null;
  isDisAppear: boolean;
  styleName: theme
}

export function PageElement(props: IProps) {
  let returnElement = <div style={{display: "none"}}/>
  if (props) {
    const styles = getStyle(props.styleName);
    const contents: Array<ReactElement> = [];
    /**
     * 处理单个元素
     */
    props.content?.contents.map((e, i) => {
      // 是否加粗
      const isBold = e.bold ?? false;
      // 字体的加粗效果
      const textBold = isBold ? 'bold' : 'normal';
      // 字体的颜色
      const textColor = e.color ?? '#000000';
      // 设置动画效果
      let animationName = getAnimationName(props.styleName);
      let animation = `${animationName} 0.5s`
      let opacity = '0';
      if (props.isDisAppear) {
        animation = '';
        opacity = '1';
      }
      /**
       * 生成元素
       */
      if (e.type === 'text') {
        const thisElement = <div key={'pageContent' + i} style={{
          fontWeight: textBold,
          color: textColor,
          animation: animation,
          opacity: opacity,
          animationDelay: `${i * 100 + 500}ms`,
          animationFillMode: 'forwards',
        }} className={styles.singleText}>{e.content}</div>;
        contents.push(thisElement)
      }
      if (e.type === 'button') {
        const textColor = e.color ?? '#FFFFFF';
        const href = e.href ?? '#';
        const thisElement = <button key={'pageContent' + i} style={{
          animation: animation,
          opacity: opacity,
          animationDelay: `${i * 100 + 500}ms`,
          animationFillMode: 'forwards',
        }} className={styles.singleButton}><a style={{
          fontWeight: textBold,
          color: textColor,
          textDecoration: 'none'
        }} href={href}>{e.content}</a></button>;
        contents.push(thisElement)
      }

    })

    /**
     * 处理图片及动画效果
     */
    const picSrc = props.content?.mainPicSrc ?? '';
    const hasPic = picSrc !== '';
    let picAnimationName = getImageAnimationName(props.styleName);
    let picAnimation = `${picAnimationName} 1s`
    if (props.isDisAppear) {
      picAnimation = ``;
    }
    returnElement = <div className={styles.page}>
      {hasPic && <div className={styles.picContainer}
                      style={{backgroundImage: `url(${props.content?.mainPicSrc})`, animation: picAnimation}}/>}
      <div className={styles.contentContainer}>
        <div className={styles.contentInnerContainer}>
          {contents}
        </div>
      </div>
    </div>
  }
  return returnElement;
}
