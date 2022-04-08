# Full-Stack React Example

This repo contains an example of a full-stack application with an express backend and a React frontend.

It uses vite as the module bundler, and includes examples of CRUD functionality for a todo list application.

## How to Use

1. Fork the repo.
1. Create your database: `$ createdb YOUR_DB`
1. Change the db connection in `./server/server.js` to connect to your database.
1. Update `./server/migration.sql` to create the schema for your application.
1. Run your migrations: `$ psql -f server/migration.sql YOUR_DB`

## How to Run

To run your application, you can use `npm run dev`. It will start your backend server as well as the vite server which hosts your frontend assets.

If you want to run your backend and frontend separately, run `npm run dev:client` in one terminal tab and `npm run dev:server` in another.
