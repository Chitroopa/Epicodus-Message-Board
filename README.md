# Epicodus message board

This README outlines the details of collaborating on this Ember application.

Epicodus message board allows Epicodus students to ask technical questions that Epicodus alumni, current students(across locations) or staff can answer.

## Planning

1. Configuration/dependencies
  * Emberfire, firebase db, moment
  * Emberfire - allows to connect with firebase database
  * firebase db - create firebase db for this project
  * moment - display date format

2. Specs
  * Spec 1: Questions should include the content of the question itself, an author, and additional notes.
  * Spec 2: Answers should include the content of the answer and the author.
  * Spec 3: Include a header and/or navbar that appears on all pages. It should contain the name of your site and a link to the home page, and other content such as social media, LinkedIn, etc.
  * Spec 4: List all questions on the homepage, displaying only the question and the name of the author.
  * Spec 5: Allow users to click a question, to be routed to another page containing additional information and question details.
  * Spec 6: Allow users to add and edit questions.
  * Spec 7: Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/Chitroopa/Epicodus-Message-Board`
* `cd Epicodus-Message-Board`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
