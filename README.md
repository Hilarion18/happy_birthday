## About

This project was created with [express-generator-typescript](https://github.com/seanpmaxwell/express-generator-typescript).


## Available Scripts

### `npm run dev` or `npm run dev:hot` (hot reloading)

Run the server in development mode.

### `npm test` or `npm run test:hot` (hot reloading)

Run all unit-tests.

### `npm test -- "name of test file" (i.e. Users).`

Run a single unit-test.

### `npm run lint`

Check for linting errors.

### `npm run build`

Build the project for production.

### `npm start`

Run the production build (Must be built first).


## Additional Notes

- If `npm run dev` gives you issues with bcrypt on MacOS you may need to run: `npm rebuild bcrypt --build-from-source`. 
<br>
<br>
<br>
<br>

# Summary
- It can be tested by using our postman on the file on the same root here with name `"happy birthday.postman_collection"`
<br>
- The server will run include the job to check the time to compare timezone with the receiver user localtime in which has different time with other timezone and the server timezone.
<br>
- The job will run every 15 minutes, because few zones are offset by an additionnal 30 or 45 mins

## Assumptions if want to run through docker
- docker and docker-compose are installed
- scripts are not being run from behind a proxy

## Run through Docker command line
- docker build -t birthday-server .
- docker run -p 3000:3000 birthday-server


## List endpoint routes
- POST /user: create user with the request body on this json
`{
    "first_name": "bruce",
    "last_name": "wayne",
    "birthday": "2024-10-29",
    "country": "Indonesia",
    "timezone": "Pacific/Samoa",
    "email": "bruce_wayne@mail.com",
    "message": ""
}`
<br>
**NOTE: if the message is empty, the default message will be `"Hey, {full_name} it’s your birthday”`
<br>

- DELETE /user: delete user with email in the request body
`{
    "email": "bruce_wayne@mail.com"
}`
<br>

## Additional endpoint for frontend
- GET /country: to get list of country in the world to facilitate the frontend fetching the list of country for user to choose
- GET /timezone: to get list of timezones in the world to facilitate the frontend fetching the list of timezones for user to choose