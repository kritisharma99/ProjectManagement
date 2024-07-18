// import { Schema } from "mongoose";
import { clients } from "../sampleData.js";
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLList,
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
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //All clients list 
    clients: {
      //Tyoe - it will be of list of clientTypes (as we are reteriving all clients data)
      type: GraphQLList(ClientTypes),
      //No need of args
      //Resolve -
      resolve()
    },
    //This for specific client data
    client: {
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

export default schema;
