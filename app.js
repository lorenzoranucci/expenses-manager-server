const express = require('express')
const app = express()
const mongoose = require('mongoose');

const graphqlExpress = require("express-graphql");
const expenseSchema= require('./ExpenseSchema').ExpenseSchema;



//connecting to mongodb
mongoose.connect('mongodb://mongo/myappdb',(err)=>{
    if (err) throw err;
    console.log("connected to mongo");
})  

app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'), ()=> {
    console.log("Node app is running at localhost:" + app.get('port'))
});

//add the schema to graphql-express 
app.use('/graphql', graphqlExpress({
    schema: expenseSchema,
    rootValue: global,
    graphiql: true
}));

