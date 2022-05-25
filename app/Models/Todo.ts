import { DateTime } from 'luxon'
import { 
  BaseModel, 
  column, 
  beforeFetch, 
  beforeFind, 
  ModelQueryBuilderContract
} from '@ioc:Adonis/Lucid/Orm'

export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public name: string

  @column()
  public isDone: boolean

  @column()
  public isRemoved: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // HOOKS
  @beforeFetch()
  @beforeFind()
  public static async checkRemoved(query: ModelQueryBuilderContract<typeof Todo>) {
    query.where('is_removed', false);
  }
}
