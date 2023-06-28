import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Contact } from "./contact.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 30 })
  first_name: string;

  @Column({ length: 30 })
  last_name: string;

  @Column({ length: 360, unique: true })
  email: string;

  @Column({ length: 80 })
  password: string;

  @Column({ length: 15 })
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
