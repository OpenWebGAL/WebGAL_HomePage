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
  releaseNote: string[],
}

export type WebgalTerreAssets = {
  version: string,
  releaseTime: string,
  releaseNote: string[],
  downloadUrl: { platform: string, url: string }[],
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

export type PostData = {
  title: string,
  author: string,
  date: string,
  tags: string[],
}

export type Post = {
  slug: string,
  data: PostData,
  contentHtml: string,
}

export type PostListItem = {
  slug: string,
  data: PostData,
}