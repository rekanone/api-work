import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comment from 'App/Models/Comment'

export default class CommentSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await Comment.createMany([
      { user_id: 1, comment: 'Yorum 1' },
      { user_id: 1, comment: 'Yorum 2' },
      { user_id: 1, comment: 'Yorum 3' },
      { user_id: 1, comment: 'Yorum 4' },
      { user_id: 1, comment: 'Yorum 5' },
      
      { user_id: 2, comment: 'Yorum 1' },
      { user_id: 2, comment: 'Yorum 2' },
      { user_id: 2, comment: 'Yorum 3' },
      { user_id: 2, comment: 'Yorum 4' },
      { user_id: 2, comment: 'Yorum 5' },
    ])

  }
}
