import knex from "knex";
import config from "../../knexfile";

const configuration =
  process.env.NODE_ENV === "test" ? config.test : config.development;

const connection = knex(configuration);

export default connection;
