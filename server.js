const express = require('express')
const graphQL = require('express-graphql')
const GraphQlSchema = require('./schema/spotifySchema')

const app = express()

app.use(
  '/graphql',
  graphQL({
    schema: GraphQlSchema,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('Listenening on port 4000')
})
