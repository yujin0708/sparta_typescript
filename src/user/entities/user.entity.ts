import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../types/userRole.type';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', select: false, nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;
}