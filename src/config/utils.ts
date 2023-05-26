export function getAppConfigKey() {
  // if webpack process.env
  return (import.meta.env.VITE_APP_CONFIG || '').trim();
}
