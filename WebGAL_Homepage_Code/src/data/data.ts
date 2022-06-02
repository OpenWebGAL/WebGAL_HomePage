import {IPage} from "../types/page";

export const pageData: IPage = {
  title: "WebGAL",
  theme: "default",
  contents: [
    {
      mainPicSrc: "./assets/image/1.jpg",
      contents: [
        {
          type: "text",
          bold: true,
          content: "WebGAL"
        },
        {
          type: "text",
          content: "网页端Galgame引擎"
        },
        {
          type: "text",
          color: '#005CAF',
          content: "未来，现在就来",
          bold: true,
        },
        {
          type: 'button',
          content: '查看在线演示',
          href: 'https://demo.msfasr.com'
        },
        {
          type: 'button',
          content: '立刻了解',
          href: 'https://docs.msfasr.com'
        },
      ]
    },
    {
      mainPicSrc: "./assets/image/2.jpg",
      contents: [
        {
          type: "text",
          content: "支持多种演出效果",
          bold: true,
          color: '#005CAF',
        },
        {
          type: "text",
          content: "还是你熟悉的那个Galgame"
        }
      ]
    },
    {
      mainPicSrc: "./assets/image/3.jpg",
      contents: [
        {
          type: "text",
          content: "存读档，不能没有！",
          bold: true,
          color: '#005CAF',
        },
        {
          type: "text",
          content: "你的存档会被保存在浏览器"
        },
        {
          type: "text",
          content: "今后还会支持导出导出"
        }
      ]
    },
    {
      mainPicSrc: "./assets/image/4.jpg",
      contents: [
        {
          type: "text",
          content: "丰富的选项",
          bold: true,
          color: '#005CAF',
        },
        {
          type: "text",
          content: "一切按照你的喜好"
        }
      ]
    },
    {
      mainPicSrc: "./assets/image/5.jpg",
      contents: [
        {
          type: "text",
          content: "怎么能没有鉴赏",
          bold: true,
          color: '#005CAF',
        },
        {
          type: "text",
          content: "BGM与CG鉴赏"
        },
        {
          type: 'text',
          content: '记录美好瞬间',
          bold: true
        }
      ]
    },
    {
      mainPicSrc: "./assets/image/6.jpg",
      contents: [
        {
          type: "text",
          content: "自定义特效？没问题",
          bold: true,
          color: '#005CAF',
        },
        {
          type: "text",
          content: "使用强大的Pixi.JS"
        },
        {
          type: "text",
          content: "为实现复杂效果扫清阻碍"
        }
      ]
    },
    {
      mainPicSrc: "./assets/image/7.jpg",
      contents: [
        {
          type: "text",
          content: "图形化编辑器",
          bold: true,
          color: '#005CAF',
        },
        {
          type: "text",
          content: "友好操作，实时预览"
        },
        {
          type: "text",
          content: "人人都有",
          bold: true,
        },
        {
          type: "text",
          content: "制作Galgame的权利！",
          bold: true,
          color: '#005caf',
        },
        {
          type: 'button',
          content: '现在下载',
          href: 'https://github.com/MakinoharaShoko/WebGAL_Terre'
        },
      ]
    },
  ]
}
