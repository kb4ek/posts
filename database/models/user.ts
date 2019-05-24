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
  HasMany,
} from 'sequelize-typescript';
import Post from './post';
import post_like from './post_like';
import comment from './comment';

@Table({
  timestamps: true,
})
export default class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  public pk: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  public id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public password: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public passwordKey: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;

  @HasMany(() => Post)
  public post: Post[];

  @HasMany(() => post_like)
  public postLike: post_like[];

  @HasMany(() => comment)
  public comment: comment[];
}
