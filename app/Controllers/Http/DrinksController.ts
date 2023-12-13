import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drink from 'App/Models/Drink'

export default class DrinksController {
  public async index({ auth, response }: HttpContextContract) {
    await auth.use('api').authenticate()

    const data = await Drink.all()
    return response.ok(data)
  }

  public async show({ auth, request, response }: HttpContextContract) {
    await auth.use('api').authenticate()

    const id = request.param('id')
    const drink = await Drink.find(id)

    if (!drink) return response.notFound()

    return response.ok(drink)
  }
}
