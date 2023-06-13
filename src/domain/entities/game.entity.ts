import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'int' })
    price: number;

    @Column({ type: 'int' })
    stock: number;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'text' })
    console: string;


    @Column({ type: 'float', nullable: true })
    rating: number;
}