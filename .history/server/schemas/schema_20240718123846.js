import { projects, clients } from "../sampleData";
import { GraphQLObjectType } from "graphql";

const ClientTypes = new GraphQLObjectType({
    name: "Client",
    fields: ()=<GraphQLObjectType({})
});
export default schema;
