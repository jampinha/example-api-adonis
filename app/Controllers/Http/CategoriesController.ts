import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({ auth, response }: HttpContextContract) {
    await auth.use('api').authenticate()

    const data = await Category.all()
    return response.ok(data)
  }

  public async show({ auth, request, response }: HttpContextContract) {
    await auth.use('api').authenticate()

    const id = request.param('id')
    const category = await Category.find(id)

    if (!category) return response.notFound()

    await category.load('drinks')
    return response.ok(category)
  }
}
