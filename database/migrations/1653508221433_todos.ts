import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Todos extends BaseSchema {
  protected tableName = 'todos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("user_id").unsigned().references("id").inTable("users")
      table.string("name")
      table.boolean("is_done").defaultTo(0)
      table.boolean("is_removed").defaultTo(0)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
