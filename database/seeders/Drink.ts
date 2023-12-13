import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Drink from 'App/Models/Drink'

export default class extends BaseSeeder {
  public async run() {
    // Sucos
    await Drink.fetchOrCreateMany('name', [
      { category: 1, name: 'Abacaxi', description: 'Suco de abacaxi' },
      { category: 1, name: 'Acerola', description: 'Suco de acerola' },
      { category: 1, name: 'Caju', description: 'Suco de caju' },
      { category: 1, name: 'Laranja', description: 'Suco de laranja' },
      { category: 1, name: 'Uva', description: 'Suco de uva' },
    ])
    // Refrigerantes
    await Drink.fetchOrCreateMany('name', [
      { category: 2, name: 'Coca-cola', description: 'Refrigerante de coca-cola' },
      { category: 2, name: 'Pepsi', description: 'Refrigerante de Pepsi' },
      { category: 2, name: 'Fanta', description: 'Refrigerante de Fanta' },
      { category: 2, name: 'Guaraná', description: 'Refrigerante de Guaraná' },
      { category: 2, name: 'Dolly', description: 'Refrigerante de cola' },
    ])
  }
}
