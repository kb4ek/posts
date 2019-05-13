import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table,
  Default,
} from 'sequelize-typescript';
import { TextDataType } from 'sequelize/types';

@Table({
  timestamps: true,
})
export default class Post extends Model<Post> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  public pk: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  public userPk: number;

  @Column(DataType.STRING)
  public title: string;

  @Column(DataType.TEXT)
  public content: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public author: string;

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  public like: number;

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  public count: number;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;
}
