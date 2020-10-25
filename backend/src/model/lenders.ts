import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('lenders')
export default class Lender {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    min_price: number;

    @Column()
    max_price: number;

    @Column()
    consequences: string;

    @Column()
    contact: number
}