import pg from "pg";
import env from "#start/env";
const {Pool} = pg;

export default class DbService {

  pool;

  constructor() {
    this.pool = new Pool({
      connectionString: env.get('DATABASE_URL'),
      max: 20, // Nombre maximal de connexions dans le pool
      idleTimeoutMillis: 30000, // Temps d'inactivité avant qu'une connexion soit fermée
      connectionTimeoutMillis: 2000, // Temps d'attente pour obtenir une connexion avant une erreur
    });
  }

  async query(query: string, params: any[] = []): Promise<any> {

    let result = await this.pool.query({
      text: query,
      values: params,
    });

    if (!result) {
      throw new Error('No result');
    }
    return result;
  }

  end() {
    this.pool.end();
  }

}
