import { DataSource } from 'typeorm';
import { Game } from './entities';

export const Providers = [
  {
    provide: 'GAME_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Game),
    inject: ['DATA_SOURCE'],
  },
];

