# traction-test

## Project setup

0. Install Dependencies
```
npm install
```
0. Build frontend Assets
```
npm run build
```

## Run server

```
node app
```

## Initialize database

0. Make sure that you have mysql running on port 3306.

0. If you don't have mysql running on port 3306 run the following commands in your terminal.

This command will install the homebrew package manager that makes mysql installation VERY EASY.
```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Now you can install mysql with the following command.
```bash
$ brew install mysql
```

Setup your credentials with this command
```bash
$ mysql_secure_installation
```

This command will run your mysql server
```bash
$ mysql.server start
```

0. Set the environment variables in `.env.example` and rename to `.env`

0. Make sure that you set a user who has INSERT, UPDATE, SELECT, DROP, and CREATE permissions (you can also just use root).

0. If you are running MySQL 8 or greater the following steps will allow you to use the Node MySQL driver. (It needs to be updated to support MySQL V8)

```bash
sudo nano /etc/my.cnf
```
Then add these lines to your editor and hit CTRL + X and then Y
```bash
[mysqld]
default-authentication-plugin=mysql_native_password
```

0. Navigate to `localhost:9000/api/init`

0. `OK` will be printed to the screen if the migrations were successful, otherwise just reload the page

## Use Application

0. Navigate to `localhost:9000`

0. Enter a URL in the input box and click submit

0. A link will then be rendered that is a shortened URL. Clicking on that link will take you to the long version of your URL. You can also just type the link into the browser search bar and it will still work.

Note: If you enter the same URL twice you will be given the shortened version of the first URL entered since the API tests if the URL has already been persisted to the database.

## Run API unit tests

```
npm run test:backend
```
