import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({ response }: HttpContextContract) {
    const data = await Category.all()
    return response.ok(data)
  }

  public async show({ request, response }: HttpContextContract) {
    const id = request.param('id')
    const category = await Category.find(id)

    if (!category) return response.notFound()

    await category.load('drinks')
    return response.ok(category)
  }
}
