import {
  Column,
  DataType,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'users',
})
export default class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  id!: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;
}
