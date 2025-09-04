import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Fable: a
    .model({
      title: a.string().required(),
      slug: a.string().required(),
      excerpt: a.string().required(),
      locale: a.enum([
        "ar",
        "de",
        "en",
        "es",
        "fr",
        "hi",
        "pt",
        "ru",
        "sv",
        "tl",
        "uk",
        "zh",
      ]),
      author: a.string().required(),
      origin: a.string().required(),
      topics: a.string().array().required(),
      audio: a.boolean().default(false),
      images: a.customType({
        pixar: a.string().required(),
        vintage: a.string(),
      }),
      users: a.hasMany("UserFable", "fableId"),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(["create", "list", "delete"]),
    ]),
  UserFable: a
    .model({
      fableId: a.id().required(),
      fable: a.belongsTo("Fable", "fableId"),
    })
    .authorization((allow) => [allow.authenticated(), allow.group("admin")]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30, // Or however long you want the key to be valid
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
