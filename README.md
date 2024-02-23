### Preview & Review - Boulevards de Paris

<!-- See `other/ARRAYS.js` (use Quokka extension for VS Code). -->

Recall: `document.querySelector('<css selector>')` selects the first item in the DOM that matches provided the CSS selector.

Navigate to this [Wikipedia](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris) article.

Our goal is to capture all the boulevards in Paris the contain "de" and store them in a JavaScript sturcture called an [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). This will introduce you to some of the JavaScript we will be using later on our FlexNav page.

Paste the following in the browser's console and test:

```js
var first = document.querySelector("a");
```

`document.querySelectorAll()` returns a collection (`nodeList`) of the items on the page:

```js
var all = document.querySelectorAll("a");
```

Demo: console history.

Right click to inspect the first listed boulevard (Boulevard Auguste-Blanqui) and find `<div class="mw-category">` in the DOM. (Note: You can reference the currently selected element using `$0` in the console.)

```js
var category = document.querySelector(".mw-category");
```

We can use our `category` variable as the basis for a subsequent, more targeted query:

```js
var links = category.querySelectorAll("a");
```

Examine the methods on the resulting nodeList. Try `links.length` in the console.

Our nodeList looks like an array but isn't. Let's convert the nodeList into an Array:

```js
var linksArray = Array.from(links);
```

- Examine the methods on the resulting Array and compare them to the methods on a nodeList
- Examine one of the anchor tags from the resulting array in the console:

```js
linksArray[0];
linksArray[0].text;
```

#### Arrays

We commonly use loops to iterate through an array and perform some action.

Below we initialize an empty array `linkText` and then loop through the linksArray using its length property. For every item in linksArray we use Array.push() to add it to linkText:

```js
var linkText = [];

for (let i = 0; i < linksArray.length; i++) {
  linkText.push(linksArray[i].textContent);
}
```

See [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) on MDN.

Note: another way to create our array of text items is:

```js
var linkText = [];

for (let link of linksArray) {
  linkText.push(link.text);
}
```

See [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) on MDN.

Let's look at a couple of important [array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array): [`array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [`array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Here's an example that uses the array's [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method to isolate the text content from our linksArray:

```js
var linkTextTwo = linksArray.map(function (link) {
  return link.textContent;
});
```

```js
var linkTextTwo = linksArray
  .map(function (link) {
    return `${link.textContent} is in paree`;
  })
  .join(" AND ");
```

<!-- Here's an alternative form of the same thing using an arrow function:

```js
var linkText = linksArray.map((link) => link.textContent);
```

Note that we use `=>` instead of the word `function`. Since we only have one variable, we could also remove the round braces:

```js
var linkText = linksArray.map((link) => link.textContent);
``` -->

Let's use another Array method, `filter`, to isolate only those boulevards that contain a specific string:

```js
var de = linkText.filter(function (streetName) {
  return streetName.includes("de");
});
```

Above we are using Array.filter. The filter method takes a function as an argument. The function is called for each item in the array. If the function returns true, the item is added to the new array. If the function returns false, the item is not added to the new array.

<!-- Here's the same function as an arrow function:

```js
var de = linkText.filter((streetName) => streetName.includes("de"));
``` -->

