import s from './topNav.module.scss'
import {useEffect} from "react";
import {uv} from "react-usevalue-hook";

export default function TopNav() {

  const showNav = uv(true);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        showNav.v = true;
      } else if (event.deltaY > 0) {
        showNav.v = false;
      }
    };
    document.addEventListener('wheel', handleWheel);
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return <div className={s.topNav + ' '+(!showNav.v?s.no:'')}>
    <div className={s.navMain}>
      <div className={s.navButton}>
        <a href={'/'}>WebGAL</a>
      </div>
      <div className={s.navButton}>
        <a href={'https://demo.openwebgal.com'}>DEMO</a>
      </div>
      <div className={s.navButton}>
        <a href={'https://docs.openwebgal.com/guide'}>DOWNLOADS</a>
      </div>
      <div className={s.navButton}>
        <a href={'https://docs.openwebgal.com'}>DOCUMENTS</a>
      </div>
      <div className={s.navButton}>
        <a href={'https://github.com/MakinoharaShoko/WebGAL'}>GITHUB</a>
      </div>
    </div>
  </div>
}
