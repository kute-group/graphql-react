// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// Thought type
const ThoughtType = new GraphQLObjectType({
  name: 'thought',
  description: '...',

  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    thought: {type: GraphQLString},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
})

export default ThoughtType