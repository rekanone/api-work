import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Book from 'App/Models/Book'

export default class BookSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Book.createMany([
      { user_id: 1, book_name: 'Kitap 1' },
      { user_id: 1, book_name: 'Kitap 2' },
      { user_id: 1, book_name: 'Kitap 3' },
      { user_id: 1, book_name: 'Kitap 4' },
      { user_id: 1, book_name: 'Kitap 5' },
      
      { user_id: 2, book_name: 'Kitap 1' },
      { user_id: 2, book_name: 'Kitap 2' },
      { user_id: 2, book_name: 'Kitap 3' },
      { user_id: 2, book_name: 'Kitap 4' },
      { user_id: 2, book_name: 'Kitap 5' },
    ])
  }
}
