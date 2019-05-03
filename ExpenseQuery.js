var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
//import expense model 
var ExpenseModel = require('./Expense');
//import GraphQL ExpenseType
var expenseType = require('./ExpenseType').expenseType;

// Query
exports.ExpenseQuery = new GraphQLObjectType({
  name: 'Query',
  fields:  ()=> {
    return {
      expense: {
        type: new GraphQLList(expenseType),
        resolve:  async ()=> {
          const expense = await ExpenseModel.find()
          if (!expense) {
            throw new Error('error while fetching data')
          }
          return expense
        }
      }
    }
  }
})