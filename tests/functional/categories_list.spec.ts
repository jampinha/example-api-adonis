import { test } from '@japa/runner'

test('it should list categories correctly', async ({ client }) => {
  const response = await client.get('/categories')

  response.assertStatus(200)
  response.hasBody()
})
