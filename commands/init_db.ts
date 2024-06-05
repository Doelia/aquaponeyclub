import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import DbService from "#services/DbService";
import {inject} from "@adonisjs/core";
import { fsReadAll } from '@adonisjs/core/helpers'
import fs from 'fs'

export default class InitDb extends BaseCommand {
  static commandName = 'init:db'
  static description = ''

  static options: CommandOptions = {}

  @inject()
  async run(db: DbService) {

    this.logger.info('Reset database...');
    await this.resetDatabase(db);

    const files = await fsReadAll(new URL('../migrations', import.meta.url), { pathType: 'absolute' })

    for (const file of files) {

      this.logger.info('Execute SQL file ' + file + '...');

      const content = fs.readFileSync(file, 'utf-8');
      const statements = content.split(';').filter(statement => statement.trim() !== '');
      for (const statement of statements) {
        await db.query(statement);
      }
    }

    this.logger.info('Database initialized');

    db.end(); // TODO mettre dans un provider ?

  }

  async resetDatabase(db: DbService) {
    await db.query('DROP SCHEMA public CASCADE; CREATE SCHEMA public;')
  }

}
