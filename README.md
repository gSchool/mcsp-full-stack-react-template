# Full-Stack React Example

This repo contains an example of a full-stack application with an express backend and a React frontend.

It uses vite as the module bundler, and includes examples of CRUD functionality for a todo list application.

## Customizing the Template

1. Create new repo using this as a template.
1. Pull that repo down.
1. Update the `npm:seed` command with the name of your database.
1. Update `./server/migration.sql` to create the schema for your application.

## Development Setup

1. Install dependencies: `npm install`
1. Create your database: `$ createdb YOUR_DB`
1. Run your migrations: `$ npm:seed`
1. Copy `server/.env.template` -> `server/.env`
1. Add your info in `server/.env`
1. Run the app: `$ npm run dev`
