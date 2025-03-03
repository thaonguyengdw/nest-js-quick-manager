import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    /**
     * generates a salt value for password hashing. A salt is a random value that is added to the password before hashing,
     * which helps to make the hashed password more secure. The genSalt() function returns a PROMISE that resolves to a string
     * representing the generated salt value. The salt value is used to hash the password using the bcrypt.hash() function.
     */
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
