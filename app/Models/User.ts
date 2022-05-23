import { DateTime } from 'luxon'
import { 
  BaseModel, 
  column, 
  hasMany, 
  HasMany
} from '@ioc:Adonis/Lucid/Orm'
import Comment from 'App/Models/Comment'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public surname: string

  @column()
  public age: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Relations
  @hasMany(() => Comment, {
    localKey: 'id',
    foreignKey: 'user_id'
  })
  public comments: HasMany<typeof Comment>
}
