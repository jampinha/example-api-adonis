import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({ response }: HttpContextContract) {
    const data = await Category.all()
    return response.ok(data)
  }
}
