# FlexNav

- [FlexNav](#flexnav)
  - [Homework](#homework)
    - [Part One](#part-one)
    - [Part Two](#part-two)
  - [The Terminal](#the-terminal)
    - [A Note For Windows Users](#a-note-for-windows-users)
  - [Initialize GIT and Create a Branch](#initialize-git-and-create-a-branch)
  - [The Project](#the-project)
  - [Node Package Manager (NPM)](#node-package-manager-npm)
    - [NPM Demos](#npm-demos)
    - [NPM init](#npm-init)
  - [A Review of Design Patterns](#a-review-of-design-patterns)
  - [Flexbox Navigation](#flexbox-navigation)
  - [JavaScript Navigation](#javascript-navigation)
    - [JavaScript 'for' Loops](#javascript-for-loops)
    - [Event Listeners and 'for' Loops](#event-listeners-and-for-loops)
    - [Content](#content)
  - [SPA Design Issues](#spa-design-issues)
    - [Event Delegation](#event-delegation)
    - [Working with Objects](#working-with-objects)
    - [String Manipluation](#string-manipluation)
    - [Problems with the Current Approach](#problems-with-the-current-approach)
    - [An Array of Objects](#an-array-of-objects)

## Homework

### Part One

Continue with the Front End Masters - the entire [CSS section](https://frontendmasters.com/courses/web-development-v3/css-overview-rules/).

### Part Two

Begin the [JavaScript section](https://frontendmasters.com/courses/web-development-v3/javascript-overview/).

## The Terminal

There are many good reasons to acquire a basic understanding of the command line terminal. In this class we will use the [Terminal](https://support.apple.com/guide/terminal/welcome/mac) app for GIT and GITHUB as well as for Node Package Manager (NPM).

---

### A Note For Windows Users

A rough equivalent to the Unix Terminal is [Powershell](https://docs.microsoft.com/en-us/powershell/) but there are important differences. Alternatives to Powershell include the app that comes with [Git for Windows](https://gitforwindows.org/) aka "Git Bash." _Unless you are very experienced with Windows, I suggest using Git Bash instead of Powershell on Windows._

---

Some basic shell commands (note: the convention in documentation is to use `$` to indicate a prompt - do NOT include it when copying and pasting a command):

```sh
$ pwd  // print working directory
$ cd <path-to-folder> // change directory
$ cd .. // go up one level
$ cd ~ // go to your home directory
$ ls  // list files
$ ls -l  // flags expand the command
$ ls -al
```

Demo: tab completion and history.

Demo: you can easily `cd` into a folder via drag and drop or by copying and pasting a folder into the terminal after the `cd` command: `cd <pasted-folder-name>`.

Before continuing we will run the following commands:

```sh
$ node --version
$ npm --version
$ git --version
$ node
> var total = 12+12
> total
> var el = document.querySelector('.anything') // error
> .exit // or control + c to exit node
$ clear // or command + k to clear the terminal
```

Use `cd` or the copy and paste method to cd into today's folder.

If you want to learn more about the terminal try reading [this article](https://www.git-tower.com/blog/more-productive-mastering-terminal/?vgo_ee=e7b8PdtP0aWH7ZIgym%2BTUayPUFd7JHyq9acdSgULWaM%3D).

## Initialize GIT and Create a Branch

[Configure](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) your installation of git:

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
$ git config --global init.defaultBranch main
$ git config --list
# $ :q
```

[Create a personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Initialize your repository:

```sh
$ git init
$ git add .
$ git commit -m 'initial commit'
$ git branch inclass
$ git checkout inclass
```

Note the `.gitignore` file.

Exercise: make a small change to the `.gitignore` file and the `readme` and merge them into the main branch.

## The Project

<img src="other/tabs-image.jpg">

The UI is spare but the techniques and concepts employed are complex.

You will be introduced to:

- node package manager
- css flexbox
- css attribute selectors
- js data structures: arrays and objects
- js flow control: looping with `for...of` and `if` statements
- js DOM manipulation: `innerHTML` and `classList`
- js string manupulation: `includes`, `substring` and template strings
- js event listeners: `click` and `hashchange`
- working with routing, urls and hashes
- web site design patterns

---

Today we will be building a single page application - there is only one HTML page and JavaScript creates "the illusion" of multiple pages using what are frequently referred to as "views."

This is a common design pattern in modern web development. These types of sites are often built using frontend libraries such as React, Angular or Vue. We will be using vanilla JavaScript.

You should have you a better understanding of:

- how browsers function internally
- routing or how the browser determines what content to display based on the URL
- managing the state (data) of the page based on the browser's location

We will examine various design patterns shortly.

Create an `index.html` page in the `app` folder and scaffold it with Emmet's `html:5` macro.

Add a link to `styles.css` in `index.html`:

```html
<link rel="stylesheet" href="css/styles.css" />
```

Add the following to index.html:

```html
<nav>
  <ul>
    <li><a href="index.html" class="active">Cuisines</a></li>
    <li><a href="chefs.html">Chefs</a></li>
    <li><a href="reviews.html">Reviews</a></li>
    <li><a href="delivery.html">Delivery</a></li>
  </ul>
</nav>
```

We will open the file in a browser using the HTTP (as opposed to File://) protocol using an NPM module.

## Node Package Manager (NPM)

[Node Package Manager](https://www.npmjs.com) is an essential part of the web design and development ecosystem. [Node](https://nodejs.org/en/) includes NPM as part of its install.

In order to familiarize you with node packages and to test your Node installation we will install a server with hot reloading - as opposed to using VS Code's GoLive extension.

Note the presence of `package.json` in today's folder. Examine it in VS Code.

[JSON](https://en.wikipedia.org/wiki/JSON) (JavaScript Object Notation) is a file format often used for transmitting data. It is ubiquitious in web development.

```js
{
  "name": "flex-nav",
  "version": "1.0.0",
  "description": "A simple navbar",
  "main": "index.js",
  "scripts": {
    "start": "browser-sync app -w --port 1234"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "browser-sync": "^2.27.7"
  }
}
```

---

### NPM Demos

- demo installing dependencies. Note the `node_modules` folder and the "lock" file.

Node modules are generally stored and developed on Github as repositories and registered as packages on a registry. The most common registry is [NPM](https://www.npmjs.com/).

- demo running the script

---

### NPM init

We will delete and recreate the `package.json`.

1. Delete `package.json`
2. `cd` to navigate to today's directory
3. Then initialize npm and install browser-sync:

```sh
$ npm init
$ npm install browser-sync
```

Note:

- the installed the software is listed in package.json dependencies ([Browser Sync](https://www.browsersync.io/))
- the addition of the installation folder: `node_modules`
- the new [package-lock.json](https://docs.npmjs.com/files/package-lock.json)
- the `.gitignore` file (added by me) declares that the contents of the node_modules folder should not be tracked by git

Examine the contents of `node_modules`. Normally there is no need to touch this folder. Note that since it can be reinstalled at any time it is not tracked by git.

Add to the scripts section of package.json. This will allow us to start the server with `$ npm run start`.

```json
"scripts": {
  "start": "browser-sync app -w"
},
```

This script is a command line. It was written by consulting the command line [documentation](https://browsersync.io/docs/command-line).

Make a small change to the HTML and note the hot reloading.

Use `ctrl-c` to shut down the server.

Try editing the start script to specify the port number:

```json
"scripts": {
  "start": "browser-sync app -w --port 1234"
},
```

Restart the server with `$ npm run start`.

## A Review of Design Patterns

Let's review three common [design patterns](https://designpatterns.netlify.app/):

- [Static](https://designpatterns.netlify.app/static/reviews) - uses separate HTML files to create a functioning web site
- [Fragments](https://designpatterns.netlify.app/fragments/) - a single page application (SPA) that uses link fragments to navigate
- [SPA](https://designpatterns.netlify.app/spa/) - a single page application with JavaScript

Compare the location bar in the browser in the three samples. The SPA and fragments samples have an index.html and hash in the URL. The static sample does not. The SPA version changes content not by scrolling to a new location but by changing the content of the page with JavaScript.

All three approaches are valid and common and each has advantages and disadvantages.

The difference between the static and SPA approach is often subsumed under the rubriks "web site" vs "web app."

The primary disadvantage of the multi-page static version is that any JavaScript and CSS running on the page is reinitialized and/or reloaded when a new page is loaded. This inability to maintain the state of data across views makes it unsuitable for web applications. The advantages include better search engine optimization (SEO), the ability to share links with others and to use a back button among others.

The primary advantage of the SPA is that it does not reinitialize JavaScript (or CSS for that matter) because there is only one HTML page - just with different views. It can work more like a desktop application (think Gmail or Google Docs for example).

The fragments page is a compromise between the two. It maintains state across views and does not reinitialize JavaScript. It is a good choice for a web site that needs to maintain state across views but does not need to be a full web application.

For pedagogical purposes I have modeled our design after the SPA.

(Note: the code for the design samples is available at `other/design-patterns` in this project.)

---

## Flexbox Navigation

Add a link to the CSS in the head of the HTML:

` <link rel="stylesheet" href="css/styles.css" />`

Add some basic formatting in `app/styles.css`:

```css
body {
  margin: 0;
  font-family: system-ui;
}

ul {
  margin: 0;
  padding: 0;
}

nav ul {
  list-style: none;
  background-color: #ffcb2d;
  padding: 2rem;
}
```

We will use CSS Flexbox to style the navbar. We will use the `display: flex` property on the `nav ul` to make the list items flex items. We will use `justify-content` to space the items out and `gap` to add space between them.

```css
nav ul {
  ...
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}
```

Style the anchor tags:

```css
nav a {
  text-decoration: none;
  color: #000;
  font-weight: 700;
  padding: 6px 10px;
}
```

Note the units for specifying font weight - a number between 100 and 900. This allows us to access the full range of weights available in a font instead of the single weight we get with `font-weight: bold`.

Add an `active` class to the first anchor tag in the navbar:

```html
<li><a class="active" href="index.html">cuisines</a></li>
```

Format the active link and the hover state:

```css
nav a:hover,
nav .active {
  color: #fff;
  background: rgb(240, 31, 31);
  border-radius: 4px;
}
```

---

We have a meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

So we can use media queries to control the layout at different screen sizes. Here we will target the wide screen by using `min-width` instead of `max-width`:

```css
@media (min-width: 460px) {
  nav ul {
    padding-left: 1rem;
    justify-content: flex-start;
    gap: 2rem;
  }
}
```

## JavaScript Navigation

First we will use JavaScript to add an active class to the tabs when they are clicked on.

Add a script tag to `index.html` above the closing body tag.

`<script src="js/scripts.js"></script>`

Add to scripts.js:

```js
var tabs = document.querySelector("nav a");
console.log(tabs);
```

We need to use `querySelectorAll` because we are gathering more than one item:

```js
var tabs = document.querySelectorAll("nav a");
console.log(tabs);
console.log(tabs[0]); // access the first item in the tabs NodeList
```

Note that we use brackets to access items in the NodeList and that the count begines at 0. We can use the `length` property to see how many items are in the NodeList:

```js
var tabs = document.querySelectorAll("nav a");
console.log(tabs.length);
```

We need to attach an eventListener to each of the tabs. `addEventListener()` requires you to pass in a specific, individual element to listen to. You cannot simply specify a list of elements: `tabs.addEventListener()`.

### JavaScript 'for' Loops

We will use a [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop to loop through the tabs.

A for loop is a control flow statement for specifying iteration, which allows code to be executed repeatedly. The syntax is:

```js
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

Expression 1; is executed (one time only) before the execution of the code block

Expression 2; defines the condition for executing the code block

Expression 3; is executed (every time) after the code block has been executed.

Use case examples:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Note: `i++` is shorthand for `i = i + 1`.

```js
let num = 1;

for (let i = 0; i < 9; i++) {
  console.log("i: ", i);
  console.log("before adding: ", num);
  num = num + i;
  console.log("after adding: ", num);
}

console.log("final num: ", num);
```

Note: the loop exits when `i` is no longer less than 9. The final number is only displayed after the loop exits.

Use `tabs.length` (4) in the condition and use `tabs[i]` to access each tab:

```js
for (let i = 0; i < tabs.length; i++) {
  console.log(i);
  console.log(tabs[i]);
  console.log(tabs[i].href);
}
```

### Event Listeners and 'for' Loops

We cannot attach an event listener to a NodeList. Instead we must Attach an event listener to each tab using a `for` loop:

```js
var tabs = document.querySelectorAll("nav a");

function makeActive(event) {
  event.preventDefault();
  console.log(event.target);
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", makeActive);
}
```

Note: we've added a call back function - `makeActive` - with `event.preventDefault()` to prevent the default behavior of the link.

<!-- Since NodeLists have a forEach method we can also do this:

```js
tabs.forEach(function (tab) {
  tab.addEventListener("click", makeActive);
});
```


Using an Arrow function shortcut (for anonymous functions):

```js
tabs.forEach((tab) => tab.addEventListener("click", makeActive));
```

-->

`event.target` is [read-only](https://developer.mozilla.org/en-US/docs/Web/API/Event/target). We cannot use it to set a class on the link we click on. I.e., This will not work `event.target.class = "active";`.

Let's use [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) again to add a class to the link we click on:

```js
var tabs = document.querySelectorAll("nav a");

function makeActive(event) {
  event.preventDefault();
  event.target.classList.add("active"); // NEW
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", makeActive);
}
```

Remove the active class from all tabs (using a `for` loop) before we add it so that only one is active at a time:

```js
var tabs = document.querySelectorAll("nav a");

function makeActive(event) {
  event.preventDefault();
  for (let i = 0; i < tabs.length; i++) {
    // NEW
    tabs[i].classList.remove("active");
  }
  event.target.classList.add("active");
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", makeActive);
}
```

To make things easier to reason about we will separate the classList removal out into its own `makeInactive` function and then call that function (`makeInactive();`) from the `makeActive` function:

```js
const tabs = document.querySelectorAll("nav a");

function makeActive(event) {
  event.preventDefault();
  makeInactive(); // NEW
  event.target.classList.add("active");
}

function makeInactive() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", makeActive);
}
```

### Content

Create a new script tag above the existing one in `index.html`:

```html
<!-- NEW -->
<script src="js/data-variables.js"></script>
<script src="js/scripts.js"></script>
```

Examine the `js/data-variables.js` file:

```js
const cuisines =
  "<h1>Cuisines</h1> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.</p>";

const chefs =
  "<h1>Chefs</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.<p>";

const reviews =
  "<h1>Reviews</h1> <p>Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.</p>";

const delivery =
  "<h1>Delivery</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.</p>";
```

Note the use of HTML tags in the strings.

Create an empty `article` tag with a class of `content` below the navbar in the html:

```html
<article class="content"></article>
```

and a variable that holds a reference to it and initialize our page with one of our variables using `innerHTML`:

```js
const contentPara = document.querySelector(".content");
contentPara.innerHTML = cuisines;
```

Add some minimal styling to the content:

```css
.content {
  padding: 1rem;
}
```

We know that we can read the value of the clicked link's href by using `event.target.href`:

```js
function makeActive() {
  ...
  console.log(event.target.href);
  ...
}
```

So let's make the HTML of the `.content` div depend on the clicked link's href. We will use and new string method [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes):

```js
function makeActive(event) {
  event.preventDefault();
  console.log(event.target.href);
  makeInactive();
  event.target.classList.add("active");

  if (event.target.href.includes("chefs")) {
    contentPara.innerHTML = chefs;
  }
}
```

`string.includes` is a function that returns `true` if the string contains the substring and `false` if it does not.

Our script only works for one tab. Expand the conditions:

```js
function makeActive(event) {
  event.preventDefault();
  makeInactive();
  event.target.classList.add("active");

  if (event.target.href.includes("cuisines")) {
    contentPara.innerHTML = cuisines;
  } else if (event.target.href.includes("chefs")) {
    contentPara.innerHTML = chefs;
  } else if (event.target.href.includes("reviews")) {
    contentPara.innerHTML = reviews;
  } else if (event.target.href.includes("delivery")) {
    contentPara.innerHTML = delivery;
  } else {
    contentPara.innerHTML = "Error: Content not found";
  }
}
```

Note: we have a bug in our code. Everything works except `if (event.target.href.includes('cuisines'))`.

Change the first link in `index.html` to:

```html
<li><a href="foocuisinesbar" class="active">cuisines</a></li>
```

Again note: we do not use `event.target.href === "cuisines"` because the href is a full URL and not just the work chefs, cuisines etc. Recall what `console.log(event.target.href)` returns.

Demo: DOM vs HTML view source. The Elements panel in the inspector shows the current state of the DOM, not the original HTML.

## SPA Design Issues

Compare our current project with the static version.

We cannot:

- refresh the page without losing context
- copy and paste a link to share with others
- use back and forward buttons in the browser
- we have limited search engine optimization (SEO)
- our site will not work without JavaScript

The problems with what we've built might be termed _maintaining state_ and _routing_. If you refresh the browser while you are on the Reviews tab the page reinitializes to show the Cuisines tab and content. We will fix this shortly.

### Event Delegation

Instead of listening for clicks on each individual tab, e.g.:

```js
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", makeActive);
}
```

We are going to use "event delegation." Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

Use:

```js
// for (let i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener("click", makeActive);
// }
document.addEventListener("click", makeActive);
```

Event delegation allows us to listen for events on a parent element, determine which child element the event occurred on and change behavior based on the click event's target (the node that was clicked on). It is not strictly necessary in this simple page but it is a good habit and a feature of many JavaScript libraries.

Everything works as previously however clicking on any HTML element now runs our `makeActive` function.

Try clicking on the paragraph and the yellow background.

We will use an if statement to ensure that the user has clicked on a link in the navbar before running our code. Note the use of `matches`:

```js
function makeActive(event) {
  console.log(event.target);

  if (event.target.matches("nav a")) {
    // NEW
    event.preventDefault();
    makeInactive();
    event.target.classList.add("active");
    if (event.target.href.includes("cuisines")) {
      contentPara.innerHTML = cuisines;
    } else if (event.target.href.includes("chefs")) {
      contentPara.innerHTML = chefs;
    } else if (event.target.href.includes("reviews")) {
      contentPara.innerHTML = reviews;
    } else if (event.target.href.includes("delivery")) {
      contentPara.innerHTML = delivery;
    }
  } // NEW
}
```

We can also use an if statement with the JavaScript "not" (`!`) operator. If the user hasn't clicked on a link in the navbar we simply `return` from the function which stops execution:

```js
function makeActive(event) {
  if (!event.target.matches("nav a")) return; // NEW
  console.log(event.target);
  makeInactive();
  event.target.classList.add("active");
  if (event.target.href.includes("cuisines")) {
    contentPara.innerHTML = cuisines;
  } else if (event.target.href.includes("chefs")) {
    contentPara.innerHTML = chefs;
  } else if (event.target.href.includes("reviews")) {
    contentPara.innerHTML = reviews;
  } else if (event.target.href.includes("delivery")) {
    contentPara.innerHTML = delivery;
  }
  event.preventDefault();
}
```

This has the advantage of being a bit easier to read and understand.

### Working with Objects

<!-- (See `other/OBJECTS.js` using Quokka in VS Code.) -->

We can use JavaScript objects to store data.

An object is a collection of key-value pairs. The keys are strings and the values can be any data type.

We typically store objects in a variable. Objects can be identified by their use of curly brackets - "{ ... }" - as opposed to the square brackets - [ ... ] - used for Arrays and NodeLists.

Use the browser's console to enter the following:

```js
let obj = {
  a: 1,
  b: 2,
};

obj.a;

obj["a"];
```

In the example above `a` and `b` are the keys and `1` and `2` are the values.

Note that there are two ways of accessing the value of a key in an object. The first is called "dot" notation and the second is called "bracket" notation.

Bracket notation is useful when the key is a string:

```js
let obj = {
  a: 1,
  b: 2,
  'my variable': 3,
};

obj.my variable; // doesn't work

obj["my variable"];
```

We can add and delete keys and values from an object:

```js
obj.d = 3;

obj["my key"] = "my value";

delete obj.a;

obj;
```

Note: the use of the term "object" is a bit problematic in JavaScript because, technically speaking, almost everything in JavaScript is an object. However, when we say "object" we are usually referring to a collection of key-value pairs in curly braces.

We will switch to using objects to store our data using the file `data-object.js` which is already in the `js` directory.

Remove the existing `data-variables.js` script tag and add

`<script src="js/data-object.js"></script>`

to `index.html` - before the existing script tag:

```html
    <script src="js/data-object.js"></script>
    <script src="js/scripts.js"></script>
  </body>
```

Examine the contents of that file:

```js
const data = {
  cuisines:
    "<h1>Cuisines</h1> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.</p>",

  chefs:
    "<h1>Chefs</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.<p>",

  reviews:
    "<h1>Reviews</h1> <p>Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.</p>",

  delivery:
    "<h1>Delivery</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.</p>",
};
```

Note the error in the console: `Uncaught ReferenceError: cuisines is not defined`. Our existing code:

`contentPara.innerHTML = cuisines;`

can no longer access the variable cuisines and we get a [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError). We need to access the value of the key `cuisines` in the object `data`.

Update the script to use the "dot" accessor method for objects - e.g. `data.cuisines`:

```js
contentPara.innerHTML = data.cuisines;
```

And use the accessor in the makeActive function:

```js
function makeActive(event) {
  if (!event.target.matches("nav a")) return;
  event.preventDefault();
  makeInactive();

  event.target.classList.add("active");

  if (event.target.href.includes("cuisines")) {
    contentPara.innerHTML = data.cuisines; // NEW
  } else if (event.target.href.includes("chefs")) {
    contentPara.innerHTML = data.chefs; // NEW
  } else if (event.target.href.includes("reviews")) {
    contentPara.innerHTML = data.reviews; // NEW
  } else if (event.target.href.includes("delivery")) {
    contentPara.innerHTML = data.delivery; // NEW
  }
}
```

Don't forget the initial page load:

```js
contentPara.innerHTML = data.cuisines;
```

Our page is still pretty fragile. Hitting refresh still defaults to the cuisines page and the back button doesn't work. Let's fix it by getting the page contents based on the address in the browser's address bar.

We are currently using `event.preventDefault()` and so the browser's location bar never changes.

Change the href values in the nav to use hashes:

```html
<nav>
  <ul>
    <li><a href="#cuisines">cuisines</a></li>
    <li><a href="#chefs">chefs</a></li>
    <li><a href="#reviews">reviews</a></li>
    <li><a href="#delivery">delivery</a></li>
  </ul>
</nav>
```

Remove `event.preventDefault();` from the script. We no longer need it since hashes do not trigger a page change and refresh.

Paste `window.location` in the browser console. We can use Location to get the hash.

In the console try: `window.location.hash`. Note that it returns the hash followed by whatever follows, e.g. '#cuisines'.

### String Manipluation

Our page is still navigable but let's expand our use of hashes.

We can get the string without the hash from the URL using [substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring):

```js
function makeActive(event) {
  if (!event.target.matches("nav a")) return;
  makeInactive();
  event.target.classList.add("active");
  console.log("hash: ", window.location.hash);
  console.log(
    "hash minus first character: ",
    window.location.hash.substring(1)
  );
}
```

Use the substring to set the HTML:

```js
function makeActive(event) {
  if (!event.target.matches("nav a")) return;
  makeInactive();
  event.target.classList.add("active");
  var currentHash = window.location.hash.substring(1);
  contentPara.innerHTML = data[currentHash];
}
```

Note the use of `data[...]` instead of `data.type`. We use square brackets because `currentHash` is a string.

For example:

```js
var text = "cuisines";

var myObject = {
  cuisines: "testing",
};

myObject[text];
myObject.text; // doesn't work
```

As you might imagine, strings are a fundamental data type for working with data on the web. We will use them frequently and your growing knowledge of [string methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) will be important.

### Problems with the Current Approach

1. in certain circumstances we have to click on the tab twice to get the appropriate content
2. the active / inactive class switching works but not at first or when we refresh the page

We can see the first issue by logging the variable currentHash to the console:

```js
function makeActive(event) {
  if (!event.target.matches("nav a")) return;
  makeInactive();
  event.target.classList.add("active");
  var currentHash = window.location.hash.substring(1);
  contentPara.innerHTML = data[currentHash];
  console.log(currentHash); // NEW
}
```

This could be a tricky bug to resolve.

We can set the hash to a default value when the page loads. Try the following in the browser's console:

```js
window.location.hash = "foobar";
```

We will use the [hashchange](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event) event to set the content according to the hash. `hashchange` fires when the hash in the browser's location bar changes.

```js
var tabs = document.querySelectorAll("nav a");
var contentPara = document.querySelector(".content");

function makeActive(event) {
  if (!event.target.matches("nav a")) return;
  makeInactive();
  event.target.classList.add("active");
  // We are removing these two lines
  // var currentHash = window.location.hash.substring(1)
  // contentPara.innerHTML = data[currentHash]
}

function makeInactive() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}

// NEW
function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  contentPara.innerHTML = data[currentHash];
}

document.addEventListener("click", makeActive);
window.addEventListener("hashchange", setContentAccordingToHash); // NEW
```

When a user first arrives at the page there will be no hash - the page will be blank and there will be no highlighted tab. We will add a new function called `initializePage` to set the default view:

```js
var tabs = document.querySelectorAll("nav a");
var contentPara = document.querySelector(".content");

function makeActive(event) {
  if (!event.target.matches("nav a")) return;
  makeInactive();
  event.target.classList.add("active");
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}

function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  contentPara.innerHTML = data[currentHash];
}

// NEW
function initializePage() {
  document.querySelector("nav a").classList.add("active");
  window.location.hash = "cuisines";
  setContentAccordingToHash();
}

document.addEventListener("click", makeActive);
window.addEventListener("hashchange", setContentAccordingToHash);

initializePage(); // NEW
```

Refreshing the page still resets the content to cuisines.

Now that we are using a hash to set the content we can also use it when the page loads to derive a solution for the refresh button:

```js
function initializePage() {
  // set a default if there is no hash
  if (!window.location.hash) {
    window.location.hash = "cuisines";
    document.querySelector("nav a").classList.add("active");
  } else {
    // if there is a hash set the active tab according to the hash
    document
      .querySelector('[href="' + window.location.hash + '"] ')
      .classList.add("active");
  }
  setContentAccordingToHash();
}
```

Refreshing the page now maintains the active tab and the content.

Note the use of [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) and concatenation.

Attribute selectors are very handy in CSS and JavaScript. They allow us to select elements based on the presence of an attribute or the value of an attribute. Here is an example of an attribute selector in CSS:

```css
[class="content"] {
  color: red;
}
```

Note the use of string concatenation in the JavaScript:

```js
.querySelector('[href="' + window.location.hash + '"] ')
```

We'll use a more modern form of string concatenation to improve upon this line of code.

We could also use an attribute selector to select the anchor tag with the `href="cuisines"` in our `initializePage` function:

```js
document.querySelector('[href="#cuisines"]').classList.add("active");
```

Note the use of single and double quotes. We use single quotes to wrap the entire string and double quotes to wrap the value of the attribute.

Next we'll replace our concatination with template strings (aka string literals).

Template strings allow us to use multi-line strings and to embed expressions inside strings. They are a replacement for old school string concatination.

Here is a comparison of old school text concatination and template strings:

```js
const name = "Yorik";
const age = 2;

const oldSchool = "My name is " + name + " and I am " + age * 7 + " years old.";

oldschool;

const newSchool = `My name is ${name} and I am ${age * 7} years old.`;

newschool;
```

Here is another example showing how we often create HTML using template strings:

```js
var data = {
  section: "cuisines",
  story: "Lorem ipsum dolor sit amet.",
};

var htmlBlock = "<h1>" + data.section + "</h1>" + "<p>" + data.story + "</p>";

var htmlBlockTwo = `
    <h1>${data.section}</h1> 
    <p>${data.story}</p>
`;
```

[Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) use back ticks instead of quote marks and have access to JS expressions inside placeholders - `${ ... }`

We are currently using old school concatination in our CSS attribute selector:

```js
.querySelector('[href="' + window.location.hash + '"] ')
```

We will change it to:

```js
.querySelector(`[href="${window.location.hash}"]`)
```

We can use the hash change to determine _both_ the active tab and the content being displayed.

This also makes it easier to reset both the active state and content when the browser's forward and back arrows are used.

Remove the click event listener:

```js
document.addEventListener("click", makeActive);
```

And add a call to makeActive in the `setContentAccordingToHash` function which passes the hash to makeActive:

```js
makeActive(currentHash);
```

And in `makeActive` we receive the currentHash and use it to set the active tab instead of `event.target`:

```js
function makeActive(currentHash) {
  makeInactive();
  var tabToActivate = document.querySelector(`a[href="#${currentHash}"]`);
  tabToActivate.classList.add("active");
}
```

Here is the final result:

```js
// declare variables
var tabs = document.querySelectorAll("nav a");
var contentPara = document.querySelector(".content");

// add the class active to one tab
function makeActive(currentHash) {
  makeInactive();
  var tabToActivate = document.querySelector(`a[href="#${currentHash}"]`);
  tabToActivate.classList.add("active");
}

// remove the class active from all tabs
function makeInactive() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}

// runs on page load and whenever the hash changes
function setContentAccordingToHash() {
  var currentHash = window.location.hash.substring(1);
  contentPara.innerHTML = data[currentHash];
  makeActive(currentHash);
}

// only runs once on page load
function initializePage() {
  if (!window.location.hash) {
    window.location.hash = "cuisines";
    document.querySelector('[href="#cuisines"]').classList.add("active");
  }
  setContentAccordingToHash();
}

window.addEventListener("hashchange", setContentAccordingToHash);

initializePage();
```

Initialize git and Add and Commit all changes. Create a new branch called `data-array` and check it out before continuing.

### An Array of Objects

This is an extremely common format for data to be sent from a server for use in a page.

```txt
https://api.nasa.gov/
https://api.nasa.gov/planetary/apod?api_key=fj9a8bBmnYgdbmBX8aYEhhdeSJfBVk3JYWlOjPSc

https://docs.spacexdata.com/
https://api.spacexdata.com/v3/capsules

https://developer.nytimes.com/
https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=XJYe53T8oZ9wRgPqxGVAs2NtPqId5pdL

https://pokeapi.co
https://pokeapi.co/api/v2/pokemon/
https://pokeapi.co/api/v2/pokemon/3/

https://www.reddit.com/r/BudgetAudiophile/
https://www.reddit.com/r/BudgetAudiophile.jsonw
```

Examine `js/data-array.js`:

```js
const data = [
  {
    section: "cuisines",
    story:
      "Cuisines. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.",
  },
  {
    section: "chefs",
    story:
      "Chefs. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.",
  },
  {
    section: "reviews",
    story:
      "Reviews. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.",
  },
  {
    section: "delivery",
    story:
      "Delivery. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.",
  },
];
```

This data structure is an Array containing multiple objects which contain multiple entries. Like Object, Arrays are a common data structure in JavaScript. We look look at Arrays in depth in a later lesson but they have some familiar properties such as `data.length`:

```js
let temp = ["red", "green", "blue"];
temp.red; // will not work with Arrays
temp[0]; // there is only one way to access Array vales
temp.push("purple"); // not temp.color3 = "purple" examine the Array prototype
```

Change the link in the HTML to reference `data-array.js`:

```html
<script src="js/data-array.js"></script>
```

The page will not work because we are using the wrong data structure. We will need to change the way we access the data in the `setContentAccordingToHash` function.

We will loop through our new data array using an if statement in order to find a match for our currentHash variable.

Compare the following two code snippets:

```js
// runs on page load and whenever the hash changes
function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  contentPara.innerHTML = data[currentHash];
  makeActive(currentHash);
}
```

```js
// runs on page load and whenever the hash changes
function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  for (var i = 0; i < data.length; i++) {
    if (data[i].section === currentHash) {
      contentPara.innerHTML = data[i].section;
      makeActive(currentHash);
    }
  }
}
```

<!-- We could also use the array's `forEach` method instead of a for loop:

```js
function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  data.forEach(function (item) {
    if (item.section === currentHash) {
      contentPara.innerHTML = item.story;
      makeActive(currentHash);
    }
  });
}
```

I prefer a `for ... of` loop ([documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)) because I find the syntax easier to read:

```js
function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  for (var item of data) {
    if (item.section === currentHash) {
      contentPara.innerHTML = item.story;
      makeActive(currentHash);
    }
  }
}
``` -->

We can use a template string (string literal) to create HTML that uses both the section and story elements:

```js
if (data[i].section === currentHash) {
  contentPara.innerHTML = `<h2>${data[i].section}</h2> <p>${data[i].story}</p>`;
  makeActive(currentHash);
}
```

e.g.:

```js
// runs on page load and whenever the hash changes
function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  for (var i = 0; i < data.length; i++) {
    if (data[i].section === currentHash) {
      contentPara.innerHTML = `
        <h2>${data[i].section}</h2> 
        <p>${data[i].story}</p>
      `;
      makeActive(currentHash);
    }
  }
}
```

And finally, use an [event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) to kick start our page:

```js
// initializePage()
document.addEventListener("DOMContentLoaded", initializePage);
```

Here is the final script:

```js
// declare variables
var tabs = document.querySelectorAll("nav a");
var contentPara = document.querySelector(".content");

// add the class active to one tab
function makeActive(currentHash) {
  makeInactive();
  var tabToActivate = document.querySelector(`a[href="#${currentHash}"]`);
  tabToActivate.classList.add("active");
}

// remove the class active from all tabs
function makeInactive() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}

// runs on page load and whenever the hash changes
function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  for (var i = 0; i < data.length; i++) {
    if (data[i].section === currentHash) {
      contentPara.innerHTML = `<h2>${data[i].section}</h2> <p>${data[i].story}</p>`;
      makeActive(currentHash);
    }
  }
}

// only runs once on page load
function initializePage() {
  if (!window.location.hash) {
    window.location.hash = "cuisines";
    document.querySelector('[href="#cuisines"]').classList.add("active");
  }
  setContentAccordingToHash();
}

window.addEventListener("hashchange", setContentAccordingToHash);
document.addEventListener("DOMContentLoaded", initializePage);
```

<!-- ## Extra Curricular Activity

Note: a resource usually lives at an "end point". An end point is a URL that the API uses to perform a specific action. For example, the end point for the NASA API is `https://api.nasa.gov/planetary/apod?api_key=fj9a8bBmnYgdbmBX8aYEhhdeSJfBVk3JYWlOjPSc`.

In our case there is a json file available on Github at `https://raw.githubusercontent.com/front-end-foundations/FlexNav/master/app/js/data-array.json`.

We can use the browser's `fetch` method to get the data from the URL:

```js
async function logContent() {
  const response = await fetch("https://raw.githubusercontent.com/front-end-foundations/FlexNav/master/app/js/data-array.json");
  const content = await response.json();
  console.log(content);
}
```

Typically we create a variable to store the data and a variable to store the end point:

```js
let data; // NEW
const endPoint = "https://raw.githubusercontent.com/front-end-foundations/FlexNav/master/app/js/data-array.json"; // NEW

async function logContent() {
  const response = await fetch(endPoint);
  const content = await response.json();
  console.log(content);
  data = content; // NEW
}
``` -->
