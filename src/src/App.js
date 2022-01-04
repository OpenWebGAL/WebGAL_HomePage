import styles from './App.module.css';
import WG_screenShot from './assets/img.png'
import WG_screenShot1 from './assets/img_1.png'
import WG_screenShot2 from './assets/img_2.png'
import WG_screenShot3 from './assets/img_3.png'
import WG_screenShot4 from './assets/img_4.png'

import {Carousel} from "antd";
import {Video} from "@icon-park/react";

function App() {

    return (
        <div className={styles.App}>
            <header className={styles.header}>
                <span className={styles.WG_Title}>WebGAL</span>
                <span className={styles.headDetail}>轻量、易用、开源的网页端视觉小说引擎</span>
                <a href={"https://webgal-demo.vercel.app/"}><span className={styles.headLink}>在线演示</span></a>
                <a href={"https://www.kancloud.cn/makinohara/webgal_doc_dev_1"}><span
                    className={styles.headLink}>开发文档</span></a>
                <a href={"https://github.com/MakinoharaShoko/WebGAL"}><span className={styles.headLink}>GitHub仓库</span></a>
            </header>
            <main className={styles.WG_main}>
                <div style={{textAlign: 'center'}}>
                    <Carousel autoplay effect="scrollx" dots={true} className={styles.WG_Carousel} dotPosition={'top'}>
                        <div>
                            <a href={"https://www.bilibili.com/video/BV1nh411n7vt/"}>
                                <img src={WG_screenShot} alt={"screenshot"} className={styles.WG_screenShot}/>
                            </a>
                        </div>
                        <div>
                            <a href={"https://www.bilibili.com/video/BV1nh411n7vt/"}>
                                <img src={WG_screenShot1} alt={"screenshot"} className={styles.WG_screenShot}/>
                            </a>
                        </div>
                        <div>
                            <a href={"https://www.bilibili.com/video/BV1nh411n7vt/"}>
                                <img src={WG_screenShot2} alt={"screenshot"} className={styles.WG_screenShot}/>
                            </a>
                        </div>
                        <div>
                            <a href={"https://www.bilibili.com/video/BV1nh411n7vt/"}>
                                <img src={WG_screenShot3} alt={"screenshot"} className={styles.WG_screenShot}/>
                            </a>
                        </div>
                        <div>
                            <a href={"https://www.bilibili.com/video/BV1nh411n7vt/"}>
                                <img src={WG_screenShot4} alt={"screenshot"} className={styles.WG_screenShot}/>
                            </a>
                        </div>
                    </Carousel>
                    <a href={"https://www.bilibili.com/video/BV1nh411n7vt/"}>
                        <div className={styles.buttonUnderCarousel}>
                            <Video theme="outline" size="24" fill="#8E354A" style={{margin:'0 10px 0 0'}}/>
                            观看演示视频
                        </div>
                    </a>
                </div>
                <div className={styles.toCenter}>
                    <div className={styles.infoTextLarge}>
                        轻量、易用、开源的网页端视觉小说引擎
                    </div>
                    <div className={styles.showRowButton}>
                        <a href={"https://webgal-demo.vercel.app/"}>
                            <div className={styles.buttonBig}>
                                在线演示
                            </div>
                        </a>
                        <div className={styles.buttonBig}>
                            下载链接
                        </div>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.footerTitle}>
                    WebGAL
                </div>
            </footer>
        </div>
    );
}

export default App;
