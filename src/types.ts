export type HSLColors = number[];

export type RGBColors = number[];

export type App = { name: string };

export interface AppData {
  colors?: number[];
  icon: string;
  name: string;
}

export type AppStoreScraperApp = {
  id: number;
  appId: string;
  title: string;
  url: string;
  description: string;
  icon: string;
  genres: string[];
  genreIds: string[];
  primarryGenre: string;
  primaryGenreId: number;
  contentRating: string;
  language: string[];
  size: string;
  requiredOsVersion: string;
  released: string;
  updated: string;
  releaseNotes: string;
  version: string;
  price: number;
  currency: string;
  free: boolean;
  developerId: number;
  developer: string;
  developerUrl: string;
  developerWebsite: string;
  score: number;
  reviews: number;
  currrentVersionScore: number;
  currentVersionReviews: number;
  screenshots: string[];
  ipadScreenshots: string[];
  appletvScreenshots: string[];
  supportedDevices: string[];
};
