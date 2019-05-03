var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
exports.expenseType = new GraphQLObjectType({
  name: 'expense',
  fields:  () =>{
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)},      
        name: {        type: GraphQLString      },     
        price: {        type: GraphQLInt     }    
      }
  
    }});