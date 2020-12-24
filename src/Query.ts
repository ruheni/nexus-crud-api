import { queryType } from 'nexus'

const Query = queryType({
  definition(t) {
    t.crud.posts()
    t.crud.post()
    t.crud.user()
    t.crud.users()
  }
})

export default Query