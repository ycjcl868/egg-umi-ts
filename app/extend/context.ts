import { Context } from 'egg';

export default {
  async renderPage(this: Context, context: object = { settingInfo: {} }, template: string = 'default.html') {
    const ctx = this;
    const istemplatePath = /(\w*\/)*\w\.html$/.test(template);
    try {
      if (istemplatePath) {
        ctx.body = await ctx.view.render(template, context);
      } else {
        ctx.body = await ctx.view.renderString(template.replace(/\u2028/g, ''), context);
      }
    } catch (e) {
      console.error('renderPage', e);
      // ctx.error('renderPage 404', { status: 404 });
    }
  }
}
