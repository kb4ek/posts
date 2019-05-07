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

@Table({
  timestamps: true,
})
export default class Post extends Model<Post> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  public pk: number;

  @Column(DataType.STRING)
  public title: string;

  @Column(DataType.STRING)
  public contents: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public writer: string;

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
