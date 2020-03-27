---
title: Building a quiz application with React.js, GraphQL and Prisma
date: 2020-03-26
tags: ['tech', 'javascript', 'react', 'graphql']
description: "I recently started a new side-project during my free-time, and I thought it could be cool to share my impressions about the technologies I used, the difficulties I encountered, etc."
---

I recently started a new side-project during my free-time, and I thought it could be cool to share my impressions about the technologies I used, the difficulties I encountered, etc. The project is not finished yet, but the main features are built.

[Here is the source code](https://github.com/Karzam/JS_Quiz/)

I wanted to make a web application with a client & server side, but not something that would take too long. So I thought about a javascript quiz with a time-limited question series, and the ability to save user results.

### The technologies

Instead of making this project with Vue.js, which is my favorite front-end framework and the one I know best, I chosed React.js because it's been a while since last time I used it. It's cool to change sometimes, and I wanted to test the new "hooks" feature.

I started working with GraphQL more than one year ago, and I really appreciate this new way of making APIs. So I chosed to build a GraphQL server, with the help of [graphql-yoga](https://github.com/prisma-labs/graphql-yoga), which allows you to setup them in a really simple way. The client side is provided by [Apollo Client for React](https://www.apollographql.com/docs/react/), which is now working with hooks, it's the perfect match for this project.

For the database part, I tried a technology I knew nothing about: Prisma.

### Prisma?

Basically, Prisma is an ORM that allows you to declare models in a specific file type, and perform server-side operations.
The cool part is that you can quickly setup a demo server, and plug the endpoint in your app. Then, you can manage the database rows from an admin interface.

Migrating the schema is pretty fast, you just need to update the `.prisma` datamodel file in your server, run `prisma deploy` from the terminal and it's done. It looks like this:

```graphql
type Question {
  id: ID! @id
  level: Level! @default(value: BEGINNER)
  title: String!
  code: String!
  answers: [Answer!]! @relation(link: TABLE)
}

type Answer {
  id: ID! @id
  text: String!
  isCorrect: Boolean! @default(value: false)
}

enum Level {
  BEGINNER
  INTERMEDIATE
  ADVANCED
}
```

The directives are easy to use, it's pretty the much the same concepts as other ORMs (relations, default values...)

When deploying the schema file, basic GraphQL operations (create a question, find a question by id, update an answer...) are automatically setup. A Prisma client is also generated in the same time. This local client is an abstraction of the top-level Prisma server, which allows you to implement custom typedefs and resolvers, and perform operations in the database.

It's pretty easy to use, but I encountered some issues that drove me crazy when working with Prisma.
Here, for example, the `question` query is needing a fragment to ensure that `answers` field is returned, otherwise it's not:

```jsx
const FRAGMENT_QUESTION = `
  fragment Q on Question {
    id
    level
    title
    code
    answers {
      id
      text
      isCorrect
    }
  }
`
const resolvers = {
  Query: {
    questions(root, args, context) {
      const level = args.level || 'INTERMEDIATE'

      // Without fragment, no answers :(
      return context.prisma.questions({ where: { level } }).$fragment(FRAGMENT_QUESTION)
    },
  },
  ...
}
```

Another issue was about a migration to attach 2 relations with aliases on a type, that gave a weird error.
I had to add one type, run deploy, add the other one and redeploy:

```graphql
type Result {
  id: ID! @id
  userId: ID!
  dateTime: DateTime!
  question: Question! @relation(link: TABLE)
  givenAnswer: Answer @relation(name: "GivenAnswer", link: TABLE)
  correctAnswer: Answer @relation(name: "CorrectAnswer", link: TABLE)
}

# Can't migrate givenAnswer and correctAnswer at the same time :( 
```

It's somehow blurry to switch between Prisma client's abstracted schema (which is actually in your server), and the "under the hood" types of the Prisma server.

### The features

For the moment, the quiz features a selection level screen:

![alt text](https://raw.githubusercontent.com/Karzam/JS_Quiz/master/screenshots/level_selection.jpg "Difficulty level selection screen")  

...and then, the quiz view!  
(`16` is the current coutdown value)

![alt text](https://raw.githubusercontent.com/Karzam/JS_Quiz/master/screenshots/quiz.jpg "Quiz screen")  

Given answers are stored in the local component state. On the last one registered, they are all sent in a mutation to create results in database (because we need to complete the quiz entirely to save and get results):

```jsx
const [createResults, { loading: mutating }] = useMutation(CREATE_RESULTS)

const onEnd = async(answers) => {
  const reponse = await createResults({
    variables: {
      input: answers
    }
  })
  
  return history.replace('/result', { results: response.data.createResults })
}
```

Once it's done, results are sent back by the mutation, and displayed:

![alt text](https://raw.githubusercontent.com/Karzam/JS_Quiz/master/screenshots/results.jpg "Results screen")  

The next steps: user authentication, making a screen with all the previous quiz results of the current user, and why not a leaderboard.
I also need to fill the database with a lot of questions, so it's not always fetching the same ones. I plan to post a new article when these features are integrated.

Thanks for reading!