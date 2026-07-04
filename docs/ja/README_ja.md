# WebGAL ホームページ

[WebGAL ホームページ](https://openwebgal.com)

## 実行方法

``` shell
npm i && npm run dev
```

## 翻訳の改善または追加

翻訳を改善するには、`/locales/` フォルダを開き、対応する JSON ファイルを修正してください。  
翻訳を追加するには、`/i18n.ts` を修正し、`/locales/` フォルダに対応する JSON ファイルを追加し、`/app/page.tsx` を開いて `redirect` という id のスクリプトを変更してください。

## 展示ゲームの追加

`/data/games.ts` を開き、ゲームを追加してください。

## スポンサーの追加

`/data/sponsors.ts` を開き、編集してください。

## コントリビューターの更新

`node update-contributors.js` を実行してください。