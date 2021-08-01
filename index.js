const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Board{
      boardId: String!
      temperature: String
  }

  type Query{
      boards: [Board]
  }

  type Mutation{
      sensorMessage(boardId: String!, temperature: String!): Board!
  }
`;

const boards = [
    {
        boardId: "board1",
        temperature: "21.00"
    },
    {
        boardId: "board2",
        temperature: "22.00"
    }
];

const resolvers = {
    Query: {
        boards: () => boards,
    },
    Mutation: {
        sensorMessage: async (_, { boardId, temperature }, { dataSources }) => {
          const board = boards.find(element => element.boardId === boardId);
          if (board) {
            board.temperature = temperature;
            return board;
          }
        },
      },
    
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`SERVER RUNNING AT ${url}`);
});