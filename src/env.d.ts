interface ImportMetaEnv {
  readonly PKG_NAME: string;
  readonly PKG_VERSION: string;
  readonly PKG_LICENSE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
