import { Controller } from 'egg';
import Util from '../web/utils/test';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.renderPage<{ a: string }>({
      title: `Umi typescript ${Util('eggjs')}`,
    });
  }
}
