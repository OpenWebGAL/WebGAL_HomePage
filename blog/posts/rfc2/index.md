---
title: 'RFC2：WebGAL UI 自定义技术解决方案（草案）'
author: 'Mahiru'
date: '2024-1-20'
tags: ['RFC']
---

第一次提交版本，2024年1月20日。

## 总体方案

WebGAL 将使用模板思想进行 UI 自定义。在 WebGAL Terre 编辑器中，额外添加一个模板编辑器。在创建 WebGAL 游戏时和创建 WebGAL 游戏后，可以选择要使用的模板。

## 模板

模板是描述自定义 UI 的一种数据结构。除了模板的样式文件外，模板还可能使用一些资源，这些资源被放置在模板的子目录下。

模板的文件结构是：

```
templateName/
├── assets/
└── UI/
    └── Title/
        └──title.css
```

其中，`assets` 是资源目录。

### 模板配置文件定义

模板配置文件将覆盖 WebGAL 默认样式的一些类，通过动态创建 CSS 来实现。

实现原理大致表示如下：

```tsx
// 第一个参数是在模板中的文件路径，第二个参数是 css 文件中的类名到要覆盖的 css module 类名的映射。这个映射用于字符串替换以适配经 css module 处理的类名
useApplyStyle('UI/Title/title.css',{"Title_button":styles.Title_button});
// ......
<div
  className={styles.Title_button}
  onClick={() => {
  startGame();
  playSeClick();
  }}
  onMouseEnter={playSeEnter}
  >
    <div className={styles.Title_button_text + ' ' + styles.Title_button_text_up}>{t('start.title')}</div>
</div>
```

由于新的 CSS 是动态加载的，具有更高的优先级，所以默认样式就这样被覆盖。

而在配置文件中，自定义 UI 的配置是这样的：

`title.css`

```css
.Title_button {
  color: #005CAF;
  background: rgba(0, 0, 0, 0.1);
  font-size: 150%;
}
```

这样就完成了对某个页面元素的 UI 自定义。

### 引用资源

如果一个模板要引用资源，必须引用在模板资源目录下的资源。

```css
.Title_button {
  color: #005CAF;
  background-image: url("template/assets/title-button-background.png");
  font-size: 150%;
}
```

这里的例子是为按钮自定义背景图片。

## 模板编辑器

在 WebGAL Terre 编辑器中，可以对模板的配置文件进行编辑，也可以对模板的资源进行管理。

在模板编辑器中，我们将整个视图划分成三个部分：

- 左侧侧边栏：模板的资源管理

- 右侧上半部分：一个 WebGAL 实例，用于预览该模板下的效果

- 右侧下半部分：模板编辑区域

### 模板编辑区域

模板编辑区域在没有进行任何模板覆盖的时候，保持留空。在模板编辑区域的左上角，可以新增一个自定义块，自定义块包括：

- 标题按钮

- 标题按钮栏

- 文本框

- 文本框名称部分

- 文本框文本部分

- 文本框小头像部分

- 选择肢布局

- 选择肢按钮

- ......

随着开发的进度，逐步解锁各个 UI 的自定义选项。尤其需要注意的是，**允许编辑的自定义块和类名是在编辑器配置中控制的**，比如

```typescript
registerStyleEditor('UI/Title/title.css', "Title_button", t("标题按钮")) // 这里的 t 是国际化翻译
```

这代表注册一个记录，这个记录表明 `UI/Title/title.css` 下，可以编辑的类名 `Title_button`，并且在“添加自定义块”的下拉菜单中展示为“标题按钮”。

在自定义块中，可以自定义常用的 CSS 属性，例如：

- 文本颜色

- 文本大小

- 背景颜色（图片）

- 内间距

- 外间距

- ......

我们要做一个**有限的**可视化 CSS 编辑块，在我们允许的范围内解析和编辑 CSS 属性，从而达到自定义 UI 的目的。并且这个编辑块允许编辑伪类（hover, active 等）。**为了便于不熟悉编程的用户理解，编辑块不展示伪类的编辑部分**，而是展示一组按钮，形如：“设置鼠标悬停效果”、“设置鼠标按下效果”等。

## 热替换

为了在编辑的流程中优化编辑体验，要实现热替换特性。

还记得我们定义的 `useApplyStyle` 吗？在这个函数中，我们在全局注册一个文件路径到指定的 `style` 块的映射，比如

```ts
const useApplyStyle = (url:string,classNameMap:Record<string,string>) => {
    const applyStyle = ()=>{
        // ...... 其他代码
    }
    register(url, applyStyle);// 注册回调函数，当编辑器后端通知时，重新跑一遍 applyStyle
}
```

这样，当我们的编辑器后端向引擎发送一个 WebSocket 消息时，就可以让引擎重新请求对应的 css 文件，然后删除之前动态添加的 style 标签，重新转换 css ，然后动态添加标签。

## 双模编辑

我们的游戏脚本都支持双模式编辑（图形化/代码编辑器），模板编辑没理由不支持，并且支持代码编辑器还可以覆盖到那些无法被图形编辑器编辑的 CSS 属性，以及 CSS 动画。甚至 LSP 都不要我们自己写，Monaco 内置了对 CSS 的语法检查。

我们的图形化编辑器只编辑那些被支持的属性。至于那些不支持的，就直接不在图形化编辑器中展示，编辑的结果也保持不变。