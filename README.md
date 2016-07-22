[![Build Status](https://travis-ci.org/mozilla/mofo-ui.svg?branch=master)](https://travis-ci.org/mozilla/mofo-ui)

# mofo-ui

**Mozilla Foundation React components.**

## Purpose

`mofo-ui` is a library of React UI components primarily for usage by the various Mozilla Foundation hubs. It's designed to complement [mofo-bootstrap](https://github.com/mozilla/mofo-bootstrap), but doesn't require it. It can also be used alongside stock Boostrap versions 3 and 4 or with no additional CSS framework.

## Usage

In your target project, do the following:

1. `npm i mofo-ui --save`
2. Include the compiled CSS and JS located in `dist` in your app.
3. If you're using Webpack, you can require `mofo-ui` and pick which components you want to use.

For example:

```js
import { RadioFilter } from "mofo-ui";

<RadioFilter options={radioOptions} initialChoice={`foo`}></RadioFilter>
```

## Development

Run the following commands in your terminal:

1. `git clone https://github.com/mozilla/mofo-ui.git`
2. `cd mofo-ui`
3. `npm start`
4. Navigate to [http://127.0.0.1:1615](http://127.0.0.1:1615) to view the demo page.

### File Structure

```
├── demo <- A page with all components for dev and demo purposes
│   ├── css <- Compiled code. Don't edit.
│   ├── img <- Image assets for demo page.
│   ├── index.html <- Wrapper for demo.jsx injection
│   └── js <- Compiled code. Don't edit.
├── dist <- Compiled code. Don't edit.
├── src
│   ├── components <- All the mofo-ui library components
│   ├── demo.jsx <- JSX code for demo page
│   ├── exports.js <- Entry point for exported components.
│   └── main.scss
└── webpack.config.js
```
