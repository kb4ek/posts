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
import Comment from './comment';

@Table({
  timestamps: true,
})
export default class comment_like extends Model<comment_like> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  public pk: number;

  @ForeignKey(() => Comment)
  @Column(DataType.INTEGER)
  public commentPk: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  public userPk: number;

  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
  })
  public user: User;

  @BelongsTo(() => Comment, {
    onDelete: 'CASCADE',
  })
  public comment: Comment;
}
