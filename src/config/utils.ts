export function getAppConfigKey() {
  // if webpack process.env
  console.log('config', JSON.stringify(import.meta.env));

  return (import.meta.env.VITE_APP_CONFIG || '').trim();
}
