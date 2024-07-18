// import { Schema } from "mongoose";
import { clients, projects } from "../sampleData.js";
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
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    clientId: { type: ClientTypes,
      resolve: (parent, args){
        return clients.find((client) => client.id === parent.clientId);
      }
     },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

//Queries to reterive
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //For CLient --
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
    //For Projects -
    projects: {
      type: GraphQLList(ProjectTypes),
      resolve(parent, args) {
        return projects;
      },
    },
    project: {
      type: ProjectTypes,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return project.find((p) => p.id === args.id);
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
