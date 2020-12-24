import { mutationType } from 'nexus'

const Mutation = mutationType({
  definition(t) {
    t.crud.createOnePost()
    t.crud.updateOnePost()
    t.crud.updateManyPost()
    t.crud.deleteOnePost()
    t.crud.deleteManyPost()

    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.updateManyUser()
    t.crud.deleteOneUser()
    t.crud.deleteManyUser()
  }
})

export default Mutation