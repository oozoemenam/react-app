/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_CLIENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
