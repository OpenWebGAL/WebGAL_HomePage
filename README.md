# WebGAL Homepage

[WebGAL Homepage](https://openwebgal.com)

## How to run

``` shell
npm i && npm run dev
```

## Improve or add translations

To improve a translation, open the `/locales/` folder and modify the corresponding json file.  
To add translations, modify `/i18n.ts` and add the corresponding json file in the `/locales/` folder, open `/app/page.tsx` and change the Script with id redirect.

## Add a showcase game

Open `/data/games.ts` and add game.

## add sponsors

Open `/data/sponsors.ts` and edit it.

## Add contributiors

Download [get-webgal-contributors.js](https://gist.github.com/nini22P/1b6060b99f1833fdc1a557fc662e5774) and run `node get-webgal-contributors.js`.

Open `/data/contributiors.ts`, replace with data fetched by the script.
