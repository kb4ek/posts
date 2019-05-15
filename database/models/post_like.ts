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
import Post from './post';
import User from './user';

@Table({
  timestamps: true,
})
export default class post_like extends Model<post_like> {
  @AutoIncrement
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public pk: number;

  @ForeignKey(() => Post)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public postPk: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public userPk: number;

  @BelongsTo(() => Post, {
    onDelete: 'CASCADE',
  })
  public post: Post;

  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
  })
  public user: User;
}
