import User from "App/Models/User";
import UserIdValidator from "App/Validators/UserIdValidator";

// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CommentsController {

    public async find({ request }) {
        const payload = await request.validate(UserIdValidator);
        return User.query()
                    .where('id', payload.id)
                    .preload('comments', (query) => {
                        return query.orderBy('id', 'desc');
                    });
    }
}
