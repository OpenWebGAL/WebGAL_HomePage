import { Game } from '@/types'

// 首页显示的游戏id，建议最多只放4个
export const homeGamesId: Game['id'][] = [
  'elf-of-era-idols-project',
  'observer',
  'agnostic-requiem',
  // 'safe-house',
  'qinglian'
]

// 全部游戏
export const games: Game[] = [
  {
    id: 'hoshinasuzu',
    title: '铃色☆记忆',
    developer: '星奈组',
    releaseDate: '2022-06-28',
    url: 'https://hoshinasuzu.cc/suzu-memory/',
    cover: 'suzu.webp',
  },
  {
    id: 'elf-of-era-idols-project',
    title: 'Elf of Era! Idols Project',
    developer: 'Elf of Era! Idols Project 制作组',
    releaseDate: '2023-06-22',
    url: 'https://store.steampowered.com/app/2414730/Elf_of_Era_Idols_Project/',
    cover: 'elf-of-Era!-Idols-Project.webp',
  },
  {
    id: 'observer',
    title: '観察者-OBSERVER-',
    developer: 'Yuji Sakai',
    releaseDate: '2023-11-12',
    url: 'https://digigame-webgal.onrender.com/',
    cover: 'observer.webp',
  },
  {
    id: 'agnostic-requiem',
    title: 'Agnostic Requiem',
    developer: 'WasabiStone',
    releaseDate: '2023-11-05',
    url: 'https://store.steampowered.com/app/2645190/Agnostic_Requiem/',
    cover: 'agnostic-requiem.webp',
  },
  {
    id: 'safe-house',
    title: 'Safe House',
    developer: 'HuangZeXin',
    releaseDate: '2023-12-30',
    url: 'https://store.steampowered.com/app/2707580/Safe_House/',
    cover: 'safe-house.webp',
  },
  {
    id: 'fayanshideshiyan',
    title: '法言使的誓言',
    developer: '醉未了',
    releaseDate: '2024-02-12',
    url: 'https://www.bilibili.com/video/BV1ru4m1K7uj/',
    cover: 'fayanshideshiyan.webp',
  },
  {
    id: 'qinglian',
    title: '青恋',
    developer: '阿牛, NICE',
    releaseDate: '2024-06-28',
    url: 'https://store.steampowered.com/app/3043160/_/',
    cover: 'ql.webp',
  },
  {
    id: 'xinxi',
    title: '信息',
    developer: '三玖谁顶的住啊',
    releaseDate: '2024-07-10',
    url: 'https://www.bilibili.com/video/BV1aH4y1w7g4/',
    cover: 'xinxi.webp',
  },
  {
    id: 'devils-journey',
    title: '恶魔之旅',
    developer: 'Zombie Ass',
    releaseDate: '2024-10-24',
    url: 'https://www.bilibili.com/video/BV1jRyfYjEuX/',
    cover: 'devils-journey.webp',
  },
  {
    id: 'dingyi',
    title: '定义',
    developer: '六白七十一',
    releaseDate: '2024-11-08',
    url: 'https://www.bilibili.com/video/BV1WLDQYHEPN/',
    cover: 'dingyi.webp',
  },
  {
    id: 'lovegoal',
    title: '愛情終點',
    developer: '糖染川',
    releaseDate: '2025-01-04',
    url: 'https://store.steampowered.com/app/3365970/_/',
    cover: 'lovegoal.webp',
  },
]
