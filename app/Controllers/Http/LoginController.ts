// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {

    public async attempt({ auth, request }) {
        const {email, password} = request.body();
        const token = await auth.attempt(email, password);
        return token;
    }

}
