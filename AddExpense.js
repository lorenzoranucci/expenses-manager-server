var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var expenseType = require('./ExpenseType');
var expenseModel = require('./Expense');
exports.addExpense = {
  type: expenseType.expenseType,
/* define the arguments that we should pass to the mutation
   here we require both expense name and the author name 
   the id will be generated automatically 
*/
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
        type: new GraphQLNonNull(GraphQLInt),
      }
  },
  resolve: async(root, args)=> {
 //under the resolve method we get our arguments
  
    const uModel = new expenseModel(args);
    const newExpense = await uModel.save();
    if (!newExpense) {
      throw new Error('error');
    }
    return newExpense
  }
}


/*
add example
mutation addExpense {
  addExpense(
    name: "Gelato2",
    price: 19
  ) {id,name,price}
} */