import { projects, clients } from "../sampleData";
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLScalarType,
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

const RootQuery = new GraphQLScalarType({
    name: "RootQuery"
})
export default schema;
