import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn
} from 'typeorm';

import { User } from './User';

@Entity()
export class Pix {

	@PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;

  @Column()
  value: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn()
  requestingUser: User;

  @ManyToOne(() => User, user => user.id, {nullable: true})
  @JoinColumn()
  payingUser: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  
}


