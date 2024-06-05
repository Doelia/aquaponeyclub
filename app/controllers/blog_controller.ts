import {HttpContext} from "@adonisjs/core/http";
import DbService from "#services/DbService";
import {inject} from "@adonisjs/core";
import NotFoundException from "#exceptions/not_found_exception";

@inject()
export default class BlogController {

  constructor(protected db: DbService) {
  }

  public async index({ inertia }: HttpContext) {
    const articles = await this.db.query("select * from article order by created_at desc");
    return inertia.render('blog', {
      articles: articles.rows
    })
  }

  public async show({ inertia, params }: HttpContext) {
    const articles = await this.db.query("select * from article where id = $1", [params.id]);
    if (!articles.rowCount) {
      throw new NotFoundException("Article not found");
    }
    return inertia.render('article', {
      article: articles.rows[0]
    })
  }


}
