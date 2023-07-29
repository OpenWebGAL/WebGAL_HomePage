export type Game = {
  id: string;
  title: string,
  developer: string,
  releaseDate: string,
  url: string,
  cover: string,
}

export type WebgalAssets = {
  version: string,
  releaseTime: string,
  releaseNote: string[][];
  downloadUrl: string,
}

export type WebgalTerreAssets = {
  version: string,
  releaseTime: string,
  releaseNote: string[][],
  downloadUrl: {
    windows?: string,
    windowsSetup?: string,
    macos?: string,
    linux?: string,
  },
}

export type Person = {
  name: string,
  avatarUrl: string,
  url: string,
}

export type Sponsors = {
  special: Person[] | null,
  platinum: Person[] | null,
  gold: Person[] | null,
  silver: Person[] | null,
  sponsors: Person[] | null,
}

export type Contributor = Person