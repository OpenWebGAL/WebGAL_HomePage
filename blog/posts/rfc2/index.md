---
title: 'RFC2：WebGAL UI 自定义技术解决方案（草案）'
author: 'Mahiru'
date: '2024-1-20'
tags: ['RFC']
---

第一次提交版本，2024年1月20日。

第二次提交版本，2024年1月24日，更新了有关切换类名的指令、模板数据结构和具体的 CSS 替换实现方案的内容。

第三次提交版本，2024年1月31日，更新了有关应用 CSS IN JS 实现样式替换的方案。

第四次提交版本，2024年2月16日，更新了有关 `applyStyle` 指令如何运转的描述和热替换的新方案。

## 总体方案

WebGAL 将使用模板思想进行 UI 自定义。在 WebGAL Terre 编辑器中，额外添加一个模板编辑器。在创建 WebGAL 游戏时和创建 WebGAL 游戏后，可以选择要使用的模板。

## 模板

模板是描述自定义 UI 的一种数据结构。除了模板的样式文件外，模板还可能使用一些资源，这些资源被放置在模板的子目录下。

模板的文件结构是：

```
templateName/
├── template.json
├── assets/
└── UI/
    └── Title/
        └──title.scss
```

其中，`assets` 是资源目录。

模板的数据结构是：

```json
{
    "name":"模板名称",
    "version":"4.4.10",
    "其他字段":"待定......"
}
```

### 模板配置文件定义

模板配置文件将覆盖 WebGAL 默认样式的一些类，通过使用 CSS IN JS 动态应用 CSS 来实现。

实现原理大致表示如下：

```tsx
// 参数是在模板中的文件路径
const applyStyle = useApplyStyle('UI/Title/title.scss');
// ......
<div
  className={applyStyle('Title_button',styles.Title_button)} // 第一个参数是要在 templateStyles 找的，第二个参数是如果没找到的缺省
  onClick={() => {
  startGame();
  playSeClick();
  }}
  onMouseEnter={playSeEnter}
  >
    <div className={styles.Title_button_text + ' ' + styles.Title_button_text_up}>{t('start.title')}</div>
</div>
```

而在配置文件中，自定义 UI 的配置是这样的：

`title.scss`

```scss
.Title_button {
  color: #005CAF;
  background: rgba(0, 0, 0, 0.1);
  font-size: 150%;
}
```

使用 SCSS 是因为 SCSS 可以写嵌套，进而支持伪类，比如 

```scss
.Title_button {
  color: #005CAF;
  background: rgba(0, 0, 0, 0.1);
  font-size: 150%;
  &:hover {
        color: #66CCFF;
    }
}
```

在找到模板中的类名时，就应用经过 CSS IN JS 处理过的类名，进而替换原有的缺省样式。

比如这里，`applyStyle` 试图应用 `Title_button` 这个类名，我们使用一定的解析方案，找到 scss 中的 `Title_button` 这个类名，然后将其转换为 CSS IN JS 的格式，形如：

```
color: #005CAF;
background: rgba(0, 0, 0, 0.1);
font-size: 150%;
&:hover {
    color: #66CCFF;
}
```

然后使用 CSS IN JS 框架中的 `css(cssInJsString)` 将其转换为 CSS IN JS 框架生成的类名。

如果没有找到，根据我们之前提到的`applyStyle('Title_button',styles.Title_button)`中的第二个参数，返回缺省类名。

这样就完成了对某个页面元素的 UI 自定义。

### 切换类名的指令

有时候，用户可能准备了多个类名以定义不同的样式，并希望使用脚本切换以达到某些表现效果。`applyStyle` 指令可以切换类名。

```
; 将 Title_button 类切换到 Title_button_2 类
applyStyle:Title_button->Title_button_2;
; 可以同时应用多个切换
applyStyle:Title_button->Title_button_2, Dialog->Dialog_1;
```

### 实现方法概览

首先，在初始化模板时，WebGAL 维护一个从原始的模板中类名到要应用的类名的映射：

```ts
type replacedUIlable = Record<string, string>
```

`键` 代表在 `applyStyle` 时注册的某个组件的标识符，比如 `Title_button`，`值` 代表目前应用的类名，由 `applyStyle` 指令写入。

如果 `applyStyle` 指令被执行，指令会写 `replacedUIlable`，更新状态，然后被 CSS IN JS 框架应用。

比如，原有的 `replacedUIlable` 中有一个实体 `"Title_button"->"Title_button"`

运行了指令`applyStyle:Title_button->Title_button_2;`

此时更新为 `Title_button"->"Title_button_2"`

这时候，要替换到标识符被注册为`Title_button` 的类名就变为 `Title_button_2`，原有的 `Title_button` 不再生效。

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
registerStyleEditor('UI/Title/title.scss', "Title_button", t("标题按钮")) // 这里的 t 是国际化翻译
```

这代表注册一个记录，这个记录表明 `UI/Title/title.scss` 下，可以编辑的类名 `Title_button`，并且在“添加自定义块”的下拉菜单中展示为“标题按钮”。

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

编辑器只需要向引擎发送一个消息，让引擎去重新请求所有的样式文件就可以了。由于编辑器大多数情况下在本地运行，所以网络请求的延迟可以忽略不计。

## 双模编辑

我们的游戏脚本都支持双模式编辑（图形化/代码编辑器），模板编辑没理由不支持，并且支持代码编辑器还可以覆盖到那些无法被图形编辑器编辑的 CSS 属性，以及 CSS 动画。甚至 LSP 都不要我们自己写，Monaco 内置了对 SCSS 的语法检查。

我们的图形化编辑器只编辑那些被支持的属性。至于那些不支持的，就直接不在图形化编辑器中展示，编辑的结果也保持不变。