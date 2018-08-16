// Imports
import { GraphQLObjectType, GraphQLString } from 'graphql';
// App type
const AppType = new GraphQLObjectType({
  name: 'app',
  description: '...',

  fields: () => ({
    id: { type: GraphQLString},
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export default AppType;
