/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => ({ message: 'Welcome' }))

Route.post('/authenticate', async ({ auth, request, response }) => {
  const email = request.param('email')
  const password = request.param('password')

  console.log({ email, password })

  try {
    const token = await auth.use('api').attempt(email, password, {
      name: 'For the API access',
      expiresIn: '60 mins',
    })
    return token
  } catch {
    return response.unauthorized({ error: 'UNAUTHORIZED', message: 'Invalid credentials' })
  }
})

Route.get('/categories', 'CategoriesController.index')
Route.get('/categories/:id', 'CategoriesController.show')

Route.get('/drinks', 'DrinksController.index')
Route.get('/drinks/:id', 'DrinksController.show')
