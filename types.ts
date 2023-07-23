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