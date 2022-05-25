// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";
import RegisterValidator from "App/Validators/RegisterValidator";

export default class UsersController {

    public async login({ auth, request }) {
        const {email, password} = request.body();
        const token = await auth.attempt(email, password);
        return token;
    }

    public async register({ request, response }) {
        const payload = await request.validate(RegisterValidator)
        const user = await User.findBy("email", payload.email)
        if(user){
            return response.json({"error": "User already exist"})
        }
        await User.create({
            email: payload.email,
            password: payload.password
        })
        return response.json({"success": "User created"})
    }

}
