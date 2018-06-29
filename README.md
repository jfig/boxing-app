# README #

## Boxing Lab APP ##

The Boxing Lab APP is an application built to provide a faster and easier way to find objects in the Laboratory.
The application was built using AngularJS. It's a SPA consuming a RESTful API.
Feel free to report issues and contribute with some PullRequests

* The most upfront (with features being tested) branch is the "master" branch
* The branch currently running into the server is the "production" branch

## Companion Repo: The API ##

* This angular app requires a functional RESTful API to work with, the API provides all the data
* You'll find a repo containing the API at https://github.com/lcdporto/boxing-api
* To make it easier to set up the API we created a Docker Image https://hub.docker.com/r/lcdporto/boxing-api/
* The angular app expects the API to be located on the localhost port 80, this can be changed at app/core/settings.js
* Example of creating and running a container

```sh
$ docker run -tid --name boxing-api -p 80:80 lcdporto/boxing-api
```
### Dependencies ###

* node and npm (dependent on your OS)
* bower
* gulp

### How do I get set up? ###

* Clone the repository
* Make sure you are in the project root folder (i.e. boxing-app)
* Make sure you have node and npm installed
* Install Dev dependencies with

```sh
$ npm install
```

* Install Bower and Gulp globally with

```sh
$ npm install -g bower
```

```sh
$ npm install -g gulp
```

* Install the APP dependencies with

```sh
$ bower install
```

* Open the file dist/angular/development/settings.js
* If need change the apiUrl property to match your development api url (e.g http://127.0.0.1:8080/)
* Launch the development server with

```sh
$ gulp serve
```

### Contribution guidelines ###

* Whenever you finish coding something, please try and see if there is conflicts with the most recent version in the branch "master"
* If possible, try to write tests to fully cover your feature

#### Checking your code ####

* We have implemented linting with jshint and code style checker with jscs, your contributions must pass these checks
* The jshint rules are defined in .jshintrc, to better understand these rules visit: http://jshint.com/docs/options/
* The jscs rules are defined in .jscsrc, to better understand these rules visit: http://jscs.info/rules
* Both rule files are considered work in progress, if you have something to say about them open up an issue
* To check your code

```sh
$ gulp check
```

* If you think a jshint rule does not make sense in a specific case, you can hide a warning with a snippet of code
* To that, add the following snippet to your file (/* jshint -W034 */), the -W034 part must match the rule code your trying to hide

#### Project Guidelines ####

* We are currently migrating the project to match John Papa's angular-styleguide https://github.com/johnpapa/angular-styleguide
* Use these guidelines as a reference, if you find something in the code that does not match, correct it or open an issue

### Who do I talk to? ###

If you have something to say, feel free to contact:

* Ighor Martins (ighor.martins@gmail.com)
* Ricardo Lobo (ricardolobo@audienciazero.org)

You can always come to our Lab too :)

More info at: https://lcdporto.org
