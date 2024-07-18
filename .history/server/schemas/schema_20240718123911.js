import { projects, clients } from "../sampleData";
import { GraphQLObjectType, GraphQLID } from "graphql";

const ClientTypes = new GraphQLObjectType({
    name: "Client",
    fields: ()=>({

    })
});
export default schema;
