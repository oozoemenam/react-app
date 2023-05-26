/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_CONFIG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
