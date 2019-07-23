# traction-test

## Project setup
```
npm install
```

## Run server

```
node app
```

## Test Application

0. Navigate to `localhost:9000`

0. Enter a URL in the input box and click submit

0. A link will then be rendered that is a shortened URL. Clicking on that link will take you to the long version of your URL.

0. Note: If you enter the same URL twice you will be given the shortened version of the first URL entered since the API tests if the URL has already been persisted to the backend.

## Explanation

Since the project was relatively simple, I decided to use a object hashmap instead of setting up an entire database for such a simple API.
That would require me to create environment variables, connect using mysql, create migrations for the database, and would require the person testing
the application to have mysql running. This project accurately describes how I would structure my RESTful APIs within my folder structure and shows that
I can take a seemingly complex webservice-like application and make it simple using a file and simple I/O. This is a common trend these days.

Thanks for testing this application!
