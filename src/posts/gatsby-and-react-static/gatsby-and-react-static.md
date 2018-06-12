---
path: "/gatsby-and-react-static/"
date: "2018-06-12"
title: "Gatsby and React-static"
tags: ["gatsby", "react-static", "react"]
---

I have been wanting to start a blog for a while now. But I haven't come much further than writing pieces of incomplete text and researching the various blogging tools. Part of the reason for this process, I think, is collecting, structuring and formulating your thoughts into a coherent format that allows you to write them down. Writing is fundamentally a different exercise than the its precursor, reading, and it takes effort accomplish it. The other is finding a blogging tool that suits your technical preferences.

The static site generators are for me the optimal blogging tool available. It leverages technologies I know, is easy customizable and simplistic. They have the best performance and scalability of any blogging tool and that is while being free. And the usability is top notch, I can write my blog posts in my code editor, view it locally and deploy from the command line.

In the area of static site generators, the most prominent are; Gatsby and React-static. Both are build on top of React and share enough similarities to be considered competitors. In practical use, they differ considerable which is a deliverable choice and this is reflected in the default boilerplate of both.

## React-static 
Run `npm install -g react-static && react-static create` and install the basic boilerplate:

```javascript
- public/
  - robots.txt
- src/
  - App.js
  - app.css
  - containers/
    - 404.js
    - About.js
    - Blog.js
    - Home.js
    - Post.js
  - index.js
  - logo.png
- package.json
- static.config.js
- .babelrc
- .eslintrc.js
```

With React-static you get the familiar code structure from `create-react-app` with the `react-static` package added, along with `react`, `react-dom` and `react-router`. React-static provides a limited API for attaching data to the react app with the configuration located in the `static.config.js` file. Customization is done like a regular React app. There are no `react-static` specific plugins, you will need to integrate various Node or React packages when developing features such as: code highlighting, image handling or RSS feed. In this sense, React-static is more a boilerplate leveraging the React technology stack than an actual static site generator.

## Gatsby
This is different in Gatsby. Run `npm i -g gatsby-cli && gatsby new my-app`:

```javascript
- public/
- src/
  - components/
    - header.js
  - layouts/
    - index.css
    - index.js
  - pages/
    - 404.js
    - index.js
    - page-2.js
- gatsby-browser.js
- gatsby-node.js
- gatsby-config.js
- gatsby-ssr.js
- package.json
```

The Gatsby has its own structure and deviates from the `create-react-app` boilerplate. `react`, `react-dom` and `react-router` aren't in the package.json file – like with React-static – but bundled with Gatsby. Gatsby adds `gatsby-browser.js`, `gatsby-config.js`, `gatsby-node.js` and `gatsby-ssr.js` to access to the Gatsby specific API. This includes adding Gatsby specific plugins or adding custom page types with data, fore instance a blog post template. Gatsby ships with GraphQL for data handling. Beyond the React style used in the `src/` files, there isn't much evidence that Gatsby is build on React.

## Comparison

Gatsby is essentially a static blog generator build on top of React with its own ecosystem, like Wordpress. Building a Gatsby site means using its plugins, API and documentation, not React's. For blogs, personal or coperate web sites this speeds up development by making image handling, code highlighting or setting up a RSS feed dead simple. The documentation from development to deployment is good.

If Gatsby is build on top of React, React-static is build with React. Developing in React-static means developing a React application with data attached to it. It is simple to add data from a data source, but unlike it doesn't come bundled with useful plugins for image handling, attached files, code highlighting or adding Google analytics. To add such functionality means either coding it yourself or finding an npm package that does this. To add Markdown files as a data source you need to add: [jdown](https://github.com/DanWebb/jdown), [chokidar](https://github.com/paulmillr/chokidar), [htmr](https://github.com/pveyes/htmr) as shown in this [example](https://github.com/nozzle/react-static/tree/master/examples/markdown). This comes build in with Gatsby.

Choose Gatsby for a static web site and choose React-static if you want to add static data source to your React app.


