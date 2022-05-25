// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todo from "App/Models/Todo"

export default class TodosController {

    public async all({ auth }) {
        return Todo.query().where("user_id", auth.user.id);
    }
}
