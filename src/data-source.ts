import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import "reflect-metadata";
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contact.entity";

const dataSourceConfig = (): DataSourceOptions => {
  const nodeEnv: string = process.env.NODE_ENV!;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL!,
      entities: [User, Contact],
      migrations: [],
    };
  }

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: ["src/entities/*.ts"],
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
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;
