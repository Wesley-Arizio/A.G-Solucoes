import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToOne, JoinColumn  } from 'typeorm';
import bcrypt from 'bcrypt';

import Lender from './lenders';

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 10);
    }

    // @OneToOne(type => User, lender => Lender)
    // @JoinColumn()
    // lender: Lender
}