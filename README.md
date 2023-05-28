# ProjectKentanus

## TODO

- There is no easy way how to pass environment variables from docker to vue since I am using copy dist/ to container. I think it will need to be changed
- Linter is raising warnings with crlf, check how to disable it
- Looks like client/dist is not fully covered by .gitignore. Check why
- Docs

## Guides

### Git

(!) Do not use rebase!

#### How to restart your branch after something went bad.

This will remove your local (non-pushed) changes.
- Go to main branch : `git checkout main`
- Remove your messed up branch: `git branch -d backend`
- Update main branch : `git fetch` `git pull`
- Checkout non-messed remote branch: `git checkout -b origin/backend`

#### How to make your branch sync with main

- Switch to main branch: `git checkout main`
- Update your main branch: `git fetch` `git pull`
- Switch to your branch: `git checkout backend`
- If changes in master are needed, merge them: `git merge master`

### Docker

(!) Keep in mind: If docker container communicate with another container, you cant use localhost ip address!

Example: Backend app communicate with database. App inside docker needs to use connection ip to container db (172.25.0.12:5671)

Example2: Your LOCALHOST (not app in container) frontend app communicate with backend app (in docker container). You CAN use 127.0.0.1:9090 

#### How to run docker environment

- Go to the root of the project
- run `docker-compose up`

  - Database: 127.0.0.1:27017 (container ip address: 172.25.0.12)
  - Frontend: http://127.0.0.1:8080 (container ip address: 172.25.0.11)
  - Backend: http://127.0.0.1:9090 (container ip address: 172.25.0.10)

After any change in code (backend/frontend), just rebuild your project. Changes should be automatically synced with docker.
Backend should reload container also.

### Build

- npm install && npm run build

