webpackJsonp([0x889f19b9b590],{348:function(a,s){a.exports={data:{site:{siteMetadata:{title:"lasse.tech",siteUrl:"https://lasse.tech"}},markdownRemark:{excerpt:"I have been wanting to start a blog for a while now. But I haven't come much further than writing incomplete pieces of text and researching…",html:'<p>I have been wanting to start a blog for a while now. But I haven\'t come much further than writing incomplete pieces of text and researching which blogging tool is the best. It is properly a necessary detour that allows your brain to structure and formulate your thoughts into communicable formats. Writing is fundamentally a different exercise than its precursor – reading – and it takes effort and will to accomplish it. </p>\n<p>Static React site generators are for me the optimal blogging tool. It leverages technologies I know, is easily customizable and simple. They have the best performance and scalability of any blogging tool and that is while being free. For users with a Git work flow usability is excellent, I can write my blog posts in my favorite editor (Sublime), view it locally and deploy from the command line. You can write with minimal amount of distraction.</p>\n<p>The most prominent static React generators are Gatsby and React-static. Both use React and share enough similarities to be considered competitors. In practical use, they differ considerable which is a deliberate choice and this is reflected in the default file structure of both.</p>\n<h2>React-static</h2>\n<p>Run <code class="language-text">npm install -g react-static &amp;&amp; react-static create</code> and install the basic boilerplate:</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token operator">-</span> <span class="token keyword">public</span><span class="token operator">/</span>\n  <span class="token operator">-</span> robots<span class="token punctuation">.</span>txt\n<span class="token operator">-</span> src<span class="token operator">/</span>\n  <span class="token operator">-</span> App<span class="token punctuation">.</span>js\n  <span class="token operator">-</span> app<span class="token punctuation">.</span>css\n  <span class="token operator">-</span> containers<span class="token operator">/</span>\n    <span class="token operator">-</span> <span class="token number">404.</span>js\n    <span class="token operator">-</span> About<span class="token punctuation">.</span>js\n    <span class="token operator">-</span> Blog<span class="token punctuation">.</span>js\n    <span class="token operator">-</span> Home<span class="token punctuation">.</span>js\n    <span class="token operator">-</span> Post<span class="token punctuation">.</span>js\n  <span class="token operator">-</span> index<span class="token punctuation">.</span>js\n  <span class="token operator">-</span> logo<span class="token punctuation">.</span>png\n<span class="token operator">-</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json\n<span class="token operator">-</span> <span class="token keyword">static</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>js\n<span class="token operator">-</span> <span class="token punctuation">.</span>babelrc\n<span class="token operator">-</span> <span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>js</code></pre>\n      </div>\n<p>With React-static you get the familiar file structure known from <code class="language-text">create-react-app</code> with the <code class="language-text">react-static</code> package added, along with <code class="language-text">react</code>, <code class="language-text">react-dom</code> and <code class="language-text">react-router</code>. React-static provides a simple API for attaching data to the React app with the configuration located in the <code class="language-text">static.config.js</code> file. Customization and development are done like a regular React app, no abstractions. There are no <code class="language-text">react-static</code> specific plugins, you will need to integrate various Node or React packages when developing features such as: code highlighting, image handling or RSS feed. In this sense, React-static is more a boilerplate or React package leveraging the React technology stack, than an actual static site generator. This is different in Gatsby.</p>\n<h2>Gatsby</h2>\n<p>Run <code class="language-text">npm i -g gatsby-cli &amp;&amp; gatsby new my-app</code>:</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token operator">-</span> <span class="token keyword">public</span><span class="token operator">/</span>\n<span class="token operator">-</span> src<span class="token operator">/</span>\n  <span class="token operator">-</span> components<span class="token operator">/</span>\n    <span class="token operator">-</span> header<span class="token punctuation">.</span>js\n  <span class="token operator">-</span> layouts<span class="token operator">/</span>\n    <span class="token operator">-</span> index<span class="token punctuation">.</span>css\n    <span class="token operator">-</span> index<span class="token punctuation">.</span>js\n  <span class="token operator">-</span> pages<span class="token operator">/</span>\n    <span class="token operator">-</span> <span class="token number">404.</span>js\n    <span class="token operator">-</span> index<span class="token punctuation">.</span>js\n    <span class="token operator">-</span> page<span class="token operator">-</span><span class="token number">2.</span>js\n<span class="token operator">-</span> gatsby<span class="token operator">-</span>browser<span class="token punctuation">.</span>js\n<span class="token operator">-</span> gatsby<span class="token operator">-</span>node<span class="token punctuation">.</span>js\n<span class="token operator">-</span> gatsby<span class="token operator">-</span>config<span class="token punctuation">.</span>js\n<span class="token operator">-</span> gatsby<span class="token operator">-</span>ssr<span class="token punctuation">.</span>js\n<span class="token operator">-</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json</code></pre>\n      </div>\n<p>The Gatsby has its own structure and deviates from the <code class="language-text">create-react-app</code> boilerplate. <code class="language-text">react</code>, <code class="language-text">react-dom</code> and <code class="language-text">react-router</code> aren\'t in the package.json file – like with React-static – but bundled with Gatsby. Multiple files: <code class="language-text">gatsby-browser.js</code>, <code class="language-text">gatsby-config.js</code>, <code class="language-text">gatsby-node.js</code> and <code class="language-text">gatsby-ssr.js</code> gives access to the Gatsby API. This includes adding Gatsby specific plugins or adding custom page types with data, fore instance a blog post template. Gatsby ships with GraphQL for data handling. Beyond the React style used in the <code class="language-text">src/</code> files, there isn\'t much evidence that Gatsby is build on React.</p>\n<h2>Comparison</h2>\n<p>Gatsby is essentially a static blog generator build on top of React with its own ecosystem, like Wordpress. Building a Gatsby site means using its plugins, API and documentation, not React\'s per-se. For blogs, personal or corporate web sites this speeds up development by making image handling, code highlighting or setting up a RSS feed dead simple. The documentation from development to deployment is good and easily accessible from their <a href="https://www.gatsbyjs.org/">web site</a>.</p>\n<p>If Gatsby is build on top of React, React-static is build with React. Developing in React-static means developing a React application with data attached to it. It is simple to add data from a data source, but unlike Gatsby it doesn\'t come bundled with useful plugins for image handling, attaching files, code highlighting or adding Google analytics. To add such functionality means either coding it yourself or finding an npm package that does this. To add Markdown files as a data source you need to add: <a href="https://github.com/DanWebb/jdown">jdown</a>, <a href="https://github.com/paulmillr/chokidar">chokidar</a>, <a href="https://github.com/pveyes/htmr">htmr</a> as shown in this <a href="https://github.com/nozzle/react-static/tree/master/examples/markdown">example</a>. This comes almost build in with Gatsby.</p>\n<p>Choose Gatsby for a simple static web site and React-static if you want to add static data to your React app.</p>',frontmatter:{date:"12 June, 2018",path:"/gatsby-and-react-static/",title:"Gatsby and React-static",tags:["gatsby","react-static","react"]}}},pathContext:{}}}});
//# sourceMappingURL=path---gatsby-and-react-static-f49b4f64ed820b4d1fd2.js.map