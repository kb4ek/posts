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
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import User from './user';
import post_like from './post_like';
import comment from './comment';

@Table({
  timestamps: true,
})
export default class Post extends Model<Post> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  public pk: number;

  @ForeignKey(() => User)
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

  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
  })
  public user: User;

  @HasMany(() => post_like)
  public postLike: post_like;

  @HasMany(() => comment)
  public comment: comment;
}
