import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsynConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../**/*.migration{.ts,.js}'],
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      synchronize: false, // it should be false on production, synchronenize the entities with the database
      logging: true,
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME || 'quiz',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../**/*.migration{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  logging: true,
};

/**
 * The NestJs confi
 */
// export default class TypeOrmConfig {
//   static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
//     return {
//       type: 'postgres',
//       host: configService.get('DB_HOST'),
//       port: configService.get('DB_PORT'),
//       username: configService.get('DB_USERNAME'),
//       password: configService.get('DB_PASSWORD'),
//       database: configService.get('DB_NAME'),
//       entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//       synchronize: true, // it should be false on production, synchronenize the entities with the database
//       logging: true,
//     };
//   }
// }

// export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
//   /*************  ✨ Codeium Command ⭐  *************/
//   /**
//    * The factory function that will be used to create the options for TypeOrmModule.
//    * It takes a ConfigService instance as an argument and returns a Promise of TypeOrmModuleOptions.
//    * The ConfigService is used to get the config values for the database connection.
//    * @param {ConfigService} configService
//    * @returns {Promise<TypeOrmModuleOptions>}
//    */
//   /******  f07196b1-b838-4383-82d1-251bb4fba9fa  *******/
//   imports: [ConfigModule], //import the ConfigModule inside the closure to support the nest dependency injection
//   useFactory: async (
//     configService: ConfigService,
//   ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
//   inject: [ConfigService],
// };
