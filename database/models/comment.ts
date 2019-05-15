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
} from 'sequelize-typescript';
import User from './user';
import Post from './post';

@Table({
  timestamps: true,
})
export default class comment extends Model<comment> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  public pk: number;

  @ForeignKey(() => Post)
  @Column(DataType.INTEGER)
  public postPk: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  public userPk: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  public content: string;

  @CreatedAt
  public createdAt: Date;

  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
  })
  public user: User;

  @BelongsTo(() => Post, {
    onDelete: 'CASCADE',
  })
  public post: Post;
}
