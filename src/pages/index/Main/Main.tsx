import {useEffect} from "react";
import {PageElement} from "../PageElement/PageElement";
import __ from 'lodash';
import styles from './main.module.scss'
import {IPage} from "../../../types/page";
import * as Hammer from 'hammerjs';
import { useObject } from "../../../hooks/useObject";

interface IProps {
  pageData: IPage
}


export function Main(props: IProps) {
  // 当前页数
  const currentPageIndex = useObject(0);
  // 当前的页面数据
  const page = props.pageData;
  const styleName = page.theme;
  const currentPage = useObject(page.contents[currentPageIndex.state]);
  const prevPage = useObject(null);

  useEffect(() => {
    document.title = page.title;
    const switchPage = (goDown: boolean) => {
      console.log('触发')
      if (goDown && currentPageIndex.state < page.contents.length - 1) {
        const prev = __.cloneDeep(currentPage.state);
        prevPage.setState(prev);
        currentPage.setState(page.contents[currentPageIndex.state + 1]);
        currentPageIndex.setState(currentPageIndex.state + 1);
      } else if (!goDown && currentPageIndex.state > 0) {
        const prev = __.cloneDeep(currentPage.state);
        prevPage.setState(prev);
        currentPage.setState(page.contents[currentPageIndex.state - 1]);
        currentPageIndex.setState(currentPageIndex.state - 1);
      }
    };
    const throttledSwitch = __.throttle(switchPage, 500,{'trailing':false});

    function eventHandler(e: WheelEvent) {
      if (e.deltaY > 0) {
        throttledSwitch(true);
      } else {
        throttledSwitch(false);
      }
    }


    window.addEventListener("wheel", eventHandler);
    const appRoot = document.getElementById('appRoot');
    let hammer: HammerManager;
    let swiper;
    if (appRoot) {
      hammer = new Hammer.Manager(appRoot);
      swiper = new Hammer.Swipe();
      hammer.add(swiper);
      hammer.on('swipeup', () => {
        console.log('触发触摸')
        throttledSwitch(true)
      });
      hammer.on('swipedown', () => {
        console.log('触发触摸')
        throttledSwitch(false)
      });
    }

    return () => {
      window.removeEventListener("wheel", eventHandler);
      if (appRoot) {
        hammer.off('swipedown');
        hammer.off('swipeup');
      }
    };
  },[]);
  return <div>
    <div key={currentPageIndex.state + 'disappear'} className={styles.disappear}>
      <PageElement styleName={styleName} isDisAppear={true} content={prevPage.state}/>
    </div>
    <div id={'showPage'} key={currentPageIndex.state + 'show'} className={styles.show}>
      <PageElement styleName={styleName} isDisAppear={false} content={currentPage.state}/>
    </div>
  </div>
}
