import { Game } from '@/types'

// 首页显示的游戏id，建议最多只放4个
export const homeGamesId: Game['id'][] = [
  'elf-of-era-idols-project',
  'observer',
  'agnostic-requiem',
  'safe-house',
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
    cover: 'agnostic-requiem.png',
  },
  {
    id: 'safe-house',
    title: 'Safe House',
    developer: 'HuangZeXin',
    releaseDate: '2023-12-30',
    url: 'https://store.steampowered.com/app/2707580/Safe_House/',
    cover: 'safe-house.png',
  },
  {
    id: 'fayanshideshiyan',
    title: '法言使的誓言',
    developer: '醉未了',
    releaseDate: '2024-02-12',
    url: 'https://www.bilibili.com/video/BV1ru4m1K7uj/',
    cover: 'fayanshideshiyan.png',
  },
]
