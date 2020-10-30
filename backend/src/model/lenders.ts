import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import User  from './users';

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

    @OneToOne(type => Lender, user => User)
    user: User
}