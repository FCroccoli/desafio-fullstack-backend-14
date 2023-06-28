import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import "reflect-metadata";
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contact.entity";
import { InitialMigration1687955944585 } from "./migrations/1687955944585-InitialMigration";
import { InitialMigration1687956228936 } from "./migrations/1687956228936-InitialMigration";

const dataSourceConfig = (): DataSourceOptions => {
  const nodeEnv: string = process.env.NODE_ENV!;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL!,
      entities: [User, Contact],
      migrations: [InitialMigration1687955944585],
    };
  }

  return {
    type: "postgres",
    host: process.env.PGHOST!,
    port: parseInt(process.env.PGPORT!),
    username: process.env.PGUSER!,
    password: process.env.PGPASSWORD!,
    database: process.env.PGDATABASE!,
    logging: false,
    entities: [User, Contact],
    migrations: [InitialMigration1687955944585, InitialMigration1687956228936],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;
