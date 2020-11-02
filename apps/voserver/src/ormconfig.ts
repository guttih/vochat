import {DatabaseType} from 'typeorm';

const postgresDatabase: DatabaseType = 'postgres';

export const DatabaseSettings = {
    type: postgresDatabase,
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'vochat',
    synchronize: true
}

export const dbType: DatabaseType = 'postgres';

