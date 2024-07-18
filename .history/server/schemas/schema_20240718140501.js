import { projects, clients } from "../sampleData";
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLScalarType,
  GraphQLSchema,
} from "graphql";

const ClientTypes = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

//Queries to reterive
const RootQuery = new GraphQLScalarType({
  name: "RootQueryType",
  fields: {
    clients: {
      type: ClientTypes,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find((client) => client.id === args.id);
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

exports = {}
