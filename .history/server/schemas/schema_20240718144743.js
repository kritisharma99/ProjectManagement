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

//Client Type
const ClientTypes = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

//Project Type
const ProjectTypes = new GraphQLObjectType({
  id: "5",
    clientId: "5",
    name: "Auction Website",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
    status: "In Progress",
})

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
      resolve(parent, args) {
        return clients;
      },
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
