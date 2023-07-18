import { Game } from '@/types'

// 首页显示的游戏id，建议最多只放4个
export const homeGamesId = ['elf-of-era-idols-project', 'hoshinasuzu']

// 全部游戏
export const gamesData: Game[] = [
  {
    id: 'hoshinasuzu',
    title: '铃色☆记忆',
    developer: '星奈组',
    releaseDate: '2022-06-28',
    url: 'http://hoshinasuzu.cn/',
    cover: '/images/games/suzu.webp'
  },
  {
    id: 'elf-of-era-idols-project',
    title: 'Elf of Era! Idols Project',
    developer: 'Elf of Era! Idols Project 制作组',
    releaseDate: '2023-06-22',
    url: 'https://store.steampowered.com/app/2414730/Elf_of_Era_Idols_Project/',
    cover: '/images/games/elf-of-Era!-Idols-Project.webp'
  },
]
