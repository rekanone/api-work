// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Book from 'App/Models/Book'
import BookValidator from 'App/Validators/BookValidator'

export default class BooksController {
    
    public async add({ request, response }){
        const book = await request.validate(BookValidator)
        await Book.create(book);
        return response.json({ "status": "success", ...book });
    }
    // delete option
    public async delete({ request, response }){
        // make new schema
        const bookIdSchema = schema.create({
            id: schema.number([
                rules.required(),
                rules.range(1, 	2147483647)
            ])
        });
        // validate
        const payload = await request.validate({ schema: bookIdSchema });
        // find
        const book = await Book.find(payload.id);
        // check book
        if(book != null) await book.delete() 
        else return response.json({ "status": "error", "message": "Book not found" }) 
        // response
        return response.json({ "status": "success", "message": "Book deleted", ...payload });
    }

    public async find({ params }){
        return Book.findOrFail(params.id);
    }

    public async update({ request, response }) {
        // get request values
        const payload = await request.body();

        // find book by id and set values
        await (await Book.findOrFail(payload.id))
        .merge({ ...payload })
        .save();
        
        /*
        // find book by id
        const book = await Book.findOrFail(payload.id);
        // set new values
        book.user_id = payload.user_id;
        book.book_name = payload.book_name;
        // save with new values
        await book.save();
        */

        // return  response to client
        return response.json({ "status": "success", ...payload })
    }

    

}
