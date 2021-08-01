# simpleGraphQL-demo
This simple GraphQL demo uses Apollo server

# Installation

node install

# Run the server

node index.js

# Test the server in your Web-Browser

open this URL in your Web-Browser: http://localhost:4000 

# Test with curl

curl -X POST -H "Content-Type: application/json" --data '{"query":"{ boards { boardId, temperature } }" }' http://localhost:4000

