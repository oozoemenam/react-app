export interface IUrlUtils {
  getFullUrlWithParams(baseUrl: string, params: { [key: string]: number | string }): string;
}

export const UrlUtils: IUrlUtils = {
  getFullUrlWithParams(baseUrl, params) {
    const keys: string[] = Object.keys(params || {});
    if ((baseUrl || '').indexOf('[') === -1 || keys.length === 0) {
      return baseUrl;
    }
    let fullUrl = baseUrl;
    keys.forEach((key) => {
      fullUrl = fullUrl.replace(`[${key}]`, (params[key] || 'null').toString());
    });
    return fullUrl;
  }
};
