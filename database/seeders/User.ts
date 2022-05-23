import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {

  public async run () {

    await User.createMany([
      {
        name: 'recep',
        surname: 'akarca',
        age: 28
      },
      {
        name: 'ahmet',
        surname: 'altun',
        age: 30
      },
    ])

  }

}
