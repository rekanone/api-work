import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Todo from 'App/Models/Todo'

export default class TodoSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Todo.createMany([
      { user_id: 1, name: "Todo 1" },
      { user_id: 1, name: "Todo 2" },
      { user_id: 1, name: "Todo 3" },
      { user_id: 1, name: "Todo 4" },
      { user_id: 1, name: "Todo 5" },
    ])
  }
}
