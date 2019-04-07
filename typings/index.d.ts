import 'egg';

declare module 'egg' {
  interface Context {
    renderPage(config?: object, template?: string): void;
  }
}
