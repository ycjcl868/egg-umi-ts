import 'egg';

interface renderConfigType<T extends object = {}> extends Partial<Record<'title' | 'description' | 'keywords' | 'iconfont', string>> {
  settingInfo?: object;
  __context__?: T;
  [key: string]: any;
}
declare module 'egg' {
  interface Context {
    renderPage<T>(config?: renderConfigType<T>, template?: string): void;
  }
}
