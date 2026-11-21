# WebGAL 主页

[WebGAL 主页](https://openwebgal.com)

## 如何运行

``` shell
npm i && npm run dev
```

## 改进或添加翻译

要改进翻译，请打开 `/locales/` 文件夹并修改相应的 json 文件。  
要添加翻译，请修改 `/i18n.ts` 并在 `/locales/` 文件夹中添加相应的 json 文件，然后打开 `/app/page.tsx` 并修改带有 id 为 `redirect` 的脚本。

## 添加展示游戏

打开 `/data/games.ts` 并添加游戏。

## 添加赞助商

打开 `/data/sponsors.ts` 并进行编辑。

## 更新贡献者

运行 `node update-contributors.js`。