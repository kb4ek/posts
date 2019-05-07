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

@Table({
  timestamps: true,
})
export default class post_like extends Model<post_like> {
  @AllowNull(false)
  @Column(DataType.STRING)
  public postPk: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public userId: string;
}
