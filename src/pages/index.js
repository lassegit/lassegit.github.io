import React, { Component } from 'react'
import Helmet from 'react-helmet'

import me from '../assets/img/me.jpg'
import gitdude from '../assets/img/gitdude.jpg'
import database from '../assets/svg/database.svg'
import flask from '../assets/svg/flask.svg'
import graphql from '../assets/svg/graphql.svg'
import linkedin from '../assets/svg/linkedin.svg'
import phone from '../assets/svg/phone.svg'
import sass from '../assets/svg/sass.svg'
import webpack from '../assets/svg/webpack.svg'
import denmark from '../assets/svg/denmark.svg'
import germany from '../assets/svg/germany.svg'
import grunt from '../assets/svg/grunt.svg'
import mail from '../assets/svg/mail.svg'
import python from '../assets/svg/python.svg'
import external from '../assets/svg/external.svg'
import github from '../assets/svg/github.svg'
import javascript from '../assets/svg/javascript.svg'
import node from '../assets/svg/node.svg'
import react from '../assets/svg/react.svg'
import usa from '../assets/svg/usa.svg'

export default class IndexPage extends Component {
  render() {
    const title = `Lasse T. | ${this.props.data.site.siteMetadata.title}`

    return (
      <div>
        <Helmet title={title} />
        <div>
          <div className="info">
            <img src={me} className="pic" />
            <h1 className="title">
              <span className="title-passive">I am</span> Lasse
            </h1>
            <h2 className="sub">
              Fullstack developer in Berlin seeking interesting projects
            </h2>
            <ul className="links">
              <li>
                <img src={phone} />
                <a
                  href="tel:+491621604084"
                  title="Call me or send me a message"
                >
                  +49 162 160 4084
                </a>
              </li>
              <li>
                <img src={mail} />{' '}
                <a href="mailto:lassetange@gmail.com" title="Send me an email">
                  lassetange@gmail.com
                </a>
              </li>
              <li>
                <img src={github} />{' '}
                <a href="https://github.com/lassegit" title="Github profile">
                  Github
                </a>
              </li>
              <li>
                <img src={linkedin} alt="LinkedIn" />{' '}
                <a
                  href="https://www.linkedin.com/in/lassetange"
                  title="LinkedIn profile"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2>About me</h2>
            <p>
              Danish freelancer programmer living in Berlin with 10 years of
              experience planning, programming and deploying a wide range of web
              apps, both frontend and backend. I provide the technical and
              business expertise to bring your projects and ideas to life.
            </p>
            <p>
              I speak <img src={denmark} className="flag" /> Danish,{' '}
              <img src={usa} className="flag" /> English and{' '}
              <img src={germany} className="flag" /> German.
            </p>
          </div>

          <div>
            <p>Some of the technologies I utilize (at the time of writing):</p>
            <ul className="tech-list">
              <li className="title">Language:</li>
              <li className="item">
                <img src={javascript} className="item-logo" />
                Javascript (ES6)
              </li>
              <li className="item">
                <img src={python} className="item-logo" />
                Python
              </li>
              <li className="title">Frontend:</li>
              <li className="item">
                <img src={react} className="item-logo" />
                ReactJS
              </li>
              <li className="item">
                <img src={webpack} className="item-logo" />
                Webpack
              </li>
              <li className="item">
                <img src={grunt} className="item-logo" />
                Grunt
              </li>
              <li className="item">
                <img src={sass} className="item-logo" />
                Sass
              </li>
              <li className="title">Backend:</li>
              <li className="item">
                <img src={node} className="item-logo" />
                NodeJS
              </li>
              <li className="item">
                <img src={flask} className="item-logo" />
                Flask
              </li>
              <li className="item">
                <img src={graphql} className="item-logo" />
                GraphQL
              </li>
              <li className="item">
                <img src={database} className="item-logo" />
                MySQL &amp; PostgreSQL
              </li>
              <li className="title">Mobile:</li>
              <li className="item">
                <img src={react} className="item-logo" />
                React Native
              </li>
            </ul>
            <p>
              Beyond this I have experience with a range of technologies and
              frameworks, such as; Angular, Backbone, Redux, Express, Php,
              Laravel, Nginx, Apache, Linux server, Git, browser extension
              development, geospatial data, Leaflet, Google maps and Cartodb,
              Mongodb, Varnish, Memcache, Wordpress, responsive first, user
              experience, Gimp, web accessibility, SEO, Google Analytics,
              Stripe.
            </p>
          </div>

          <div>
            <h2>Open source</h2>
            <p>I also created and maintain various open source projets:</p>
            <ul>
              <li>
                <a href="https://github.com/lassegit/react-pell2">
                  react-pell2
                </a>: ReactJS wrapper for Pell WYSIWYG text editor for web.
              </li>
              <li>
                <a href="https://github.com/lassegit/flask-reactjs">
                  flask-reactjs
                </a>: Flask, ReactJS/Redux and webpack Boilerplate.
              </li>
              <li>
                <a href="https://github.com/lassegit/flask-scaffolding">
                  flask-scaffolding
                </a>: Flask Scaffolding featuring Python 3.4, SQLALCHEMY,
                BackboneJS, RequireJS & Sass (Bootstrap 3).
              </li>
              <li>
                <a href="https://github.com/lassegit/npm-react-module">
                  npm-react-module
                </a>: Boilerplate for developing ReactJS modules using Babel.
              </li>
              <li>
                <a href="https://github.com/lassegit/deepl-extension">
                  deepl-extension
                </a>: simple Deepl Chrome extension.
              </li>
            </ul>

            <h3>Latest project</h3>
            <p>
              My latest project is <a href="https://gitdude.com">gitdude.com</a>,
              a developer service that adds code improvements tips as comment on
              each github commit. It is build with an isomorphic express setup
              using ReactJS and GraphQL:
            </p>
            <p>
              <img
                src={gitdude}
                className="portfolio-image"
                alt="Gitdude screenshot"
              />
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
