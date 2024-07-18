import { projects, clients } from "../sampleData";
import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const ClientTypes = new GraphQLObjectType({
    name: "Client",
    fields: ()=>({
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        id:{type: GraphQLID}
    })
});
export default schema;
