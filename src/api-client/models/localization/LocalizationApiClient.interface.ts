export interface LocalizationApiClient {
  fetchTranslation: (namspace: string, key: string) => Promise<{ [key: string]: string }>;
}
