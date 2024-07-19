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

//Mongoose Model
import Project from "../dbModels/Project.js";
import Client from "../dbModels/Client.js";

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
    client: {
      type: ClientTypes,
      resolve(parent, args) {
        // return clients.find((client) => client.id === parent.clientId);
        return Client.findById(parent.clientId);
      },
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
        // return clients;
        return Client;
      },
    },
    //This for specific client data
    client: {
      type: ClientTypes,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return clients.find((client) => client.id === args.id);
        return Client.findById(args.id);
      },
    },
    //For Projects -
    projects: {
      type: GraphQLList(ProjectTypes),
      resolve(parent, args) {
        // return projects;
        return Project.find();
      },
    },
    project: {
      type: ProjectTypes,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return projects.find((p) => p.id === args.id);
        return Project.findById(args.id);
      },
    },
  },
});

//Mutation - it is like add or Upade in Rest API
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addClient: {},
  }),
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation,
});

export default schema;
