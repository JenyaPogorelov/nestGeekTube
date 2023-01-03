import {
  Column,
  PrimaryKey,
  Table,
  Model,
  CreatedAt,
} from 'sequelize-typescript';
@Table
export class User extends Model {
  // @PrimaryKey
  // id: number;

  @Column
  nickName: string;
}
