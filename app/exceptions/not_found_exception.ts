import { Exception } from '@adonisjs/core/exceptions'
import {HttpContext} from "@adonisjs/core/http";

export default class NotFoundException extends Exception {
  static status = 404;
  static code = 'E_NOTFOUND'

  async handle(error: this, {inertia, response}: HttpContext) {
    const rendered = await inertia.render('errors/not_found', {
      message: this.message
    });
    return response.status(error.status).send(rendered);
  }
}
