import User from "App/Models/User";
import UserIdValidator from "App/Validators/UserIdValidator";

// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

    public async all({  }) {
        return User.all();
    }

    public async find({ request }) {
        const payload = await request.validate(UserIdValidator);
        return await User.findOrFail(payload.id);
    }
}
