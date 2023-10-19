const generate = Math.random().toString(4)

export const userModelFixture = {
  id: 1,
  name: 'John',
  email: 'John' + generate + '@email.com',
}