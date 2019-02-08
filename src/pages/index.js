import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import {
  database,
  denmark,
  flask,
  germany,
  github,
  graphql,
  grunt,
  javascript,
  jest,
  linkedin,
  mail,
  node,
  phone,
  php,
  python,
  react,
  redux,
  sass,
  usa,
  webpack,
} from '../assets/svg';
import { gitdude, me } from '../assets/img';

const languages = [
  {
    text: 'Javascript (ES6)',
    icon: javascript,
  },
  {
    text: 'Python',
    icon: python,
  },
  {
    text: 'Php',
    icon: php,
  },
  {
    text: 'SQL',
    icon: database,
  },
];

const frontend = [
  {
    text: 'React',
    icon: react,
  },
  {
    text: 'Redux',
    icon: redux,
  },
  {
    text: 'Jest/enzyme',
    icon: jest,
  },
  {
    text: 'CSS-in-JS',
  },
  {
    text: 'Storybook',
  },
  {
    text: 'Webpack',
    icon: webpack,
  },
  {
    text: 'Grunt',
    icon: grunt,
  },
  {
    text: 'Sass',
    icon: sass,
  },
];

const backend = [
  {
    text: 'NodeJS',
    icon: node,
  },
  {
    text: 'ExpressJS',
  },
  {
    text: 'Flask',
    icon: flask,
  },
  {
    text: 'GraphQL',
    icon: graphql,
  },
  {
    text: 'MySQL & Postgres',
    icon: database,
  },
  {
    text: 'Nginx & Apache',
  },
  {
    text: 'MongoDB',
  },
];

const IndexPage = ({ data }) => (
  <div className="frontpage">
    <Helmet title={`Fullstack Developer in Berlin | Lasse T. | ${data.site.siteMetadata.title}`} />
    <div>
      <div className="info">
        <img alt="" src={me} className="pic" />
        <h1 className="title">
          <span className="title-passive">I am</span> Lasse
        </h1>
        <h2 className="sub">Fullstack developer in Berlin seeking interesting projects</h2>
        <ul className="links">
          <li>
            <img alt="" src={phone} />
            <a href="tel:+491621604084" title="Call me or send me a message">
              +49 162 160 4084
            </a>
          </li>
          <li>
            <img alt="" src={mail} />{' '}
            <a href="mailto:lassetange@gmail.com" title="Send me an email">
              lassetange@gmail.com
            </a>
          </li>
          <li>
            <img alt="" src={github} />{' '}
            <a href="https://github.com/lassegit" title="Github profile">
              Github
            </a>
          </li>
          <li>
            <img alt="" src={linkedin} />{' '}
            <a href="https://www.linkedin.com/in/lassetange" title="LinkedIn profile">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2>About me</h2>
        <p>
          Fullstack developer <i>(specializing in frontend)</i> living in Berlin with 10 years of experience planning,
          programming and deploying a wide range of web apps, both frontend and backend. I provide the technical and business
          expertise to bring your projects and ideas to life. I have a good eye for UX/UI, am resourceful and good problem
          solver. I welcome challenges and the possibility to get to know new technologies and people.
        </p>
        <p>
          I speak <img alt="" src={denmark} className="flag" /> Danish, <img alt="" src={usa} className="flag" /> English and{' '}
          <img alt="" src={germany} className="flag" /> German.
        </p>
      </div>
      <div>
        <h2>Technologies</h2>
        <p>Some of the technologies I utilize:</p>
        <ul className="tech-list">
          <li className="title">Languages:</li>
          {languages.map((item, index) => (
            <li key={index} className="item">
              {item.icon && <img alt="" src={item.icon} className="item-logo" />}
              {item.text}
            </li>
          ))}
          <li className="title">Frontend:</li>
          {frontend.map((item, index) => (
            <li key={index} className="item">
              {item.icon && <img alt="" src={item.icon} className="item-logo" />}
              {item.text}
            </li>
          ))}
          <li className="title">Backend:</li>
          {backend.map((item, index) => (
            <li key={index} className="item">
              {item.icon ? <img alt="" src={item.icon} className="item-logo" /> : null}
              {item.text}
            </li>
          ))}
        </ul>
        <p>
          Beyond this, I have experience with range of other frameworks, libraries, technologies and services, notably:{' '}
          <i>
            BackboneJS, Bootstrap, Plone CMS, NPM, Websockets, jQuery, Laravel, Linux server configuration and deployment,
            React Native, Git, Chrome extension development, geospatial data, LeafletJS, Google maps API, Cartodb, Varnish,
            Memcache, Wordpress, Drupal, responsive first, user experience, Gimp, web accessibility, SEO, Google Analytics,
            Stripe.
          </i>
        </p>
      </div>

      <div>
        <h2>Projects</h2>
        <p>A few selected projects I build:</p>
        <ul>
          <li>
            Co-developed (in a team and independently) a ReactJS app for a e-learning startup in Berlin. <br />
            <small>
              Customer: <b>Wonderwerk.co</b>
            </small>
          </li>
          <li>
            Embeddable webshop with using ReactJS, Redux, Webpack, Mysql and Flask with a order/product management backend
            and advanced data export functionality. <br />
            <small>
              Customer: <b>Danish Ministry of Higher Education and Science.</b>
            </small>
          </li>
          <li>
            Custom integration bridge between Cartodb and Podio management tool that displays geodata on various maps. Build
            using Laravel and Mysql.
            <br />
            <small>
              Customer: <b>The Foundation for Environmental Education.</b>
            </small>
          </li>
          <li>
            Web app for finding and viewing verdicts build using BackboneJS, Grunt, Mysql, Flask, Elasticsearch and Docker.
            <br />
            <small>
              Customer: <b>Danish Environmental Board of Appeal.</b>
            </small>
          </li>
          <li>
            Co-developed a portal for exploring digitalized images and artifacts from the museum&apos;s collection. Build
            using Express, ES6, Jade, Scss, Angular and Elasticsearch.
            <br />
            <small>
              Customer: <b>The National Museum of Denmark.</b>
            </small>
          </li>
          <li>
            Build various frontend functionality and UX combining Angular and geodata for a danish housing startup. <br />
            <small>
              Customer: <b>Bolighed</b>
            </small>
          </li>
        </ul>
      </div>

      <div>
        <h2>Open source</h2>
        <p>I also developed and maintain various open source projets:</p>
        <ul>
          <li>
            <a href="https://github.com/lassegit/react-simple-social">react-simple-social</a>: Add all social share links
            through one simple and lightweight React component.
          </li>
          <li>
            <a href="https://github.com/lassegit/npm-react-module">npm-react-module</a>: Boilerplate for developing ReactJS
            modules using Babel.
          </li>
          <li>
            <a href="https://github.com/lassegit/react-pell2">react-pell2</a>: ReactJS wrapper for Pell WYSIWYG text editor
            for web.
          </li>
          <li>
            <a href="https://github.com/lassegit/flask-reactjs">flask-reactjs</a>: Flask, ReactJS/Redux and webpack
            Boilerplate.
          </li>
          <li>
            <a href="https://github.com/lassegit/flask-scaffolding">flask-scaffolding</a>: Flask Scaffolding featuring Python
            3.4, SQLALCHEMY, BackboneJS, RequireJS & Sass (Bootstrap 3).
          </li>
          <li>
            <a href="https://github.com/lassegit/deepl-extension">deepl-extension</a>: simple Deepl Chrome extension.
          </li>
        </ul>

        <h3>Latest personal project</h3>
        <p>
          My latest project is <a href="https://gitdude.com">gitdude.com</a>, a developer service that adds code improvements
          tips as comment on each github commit. It is build with an isomorphic express setup using ReactJS and GraphQL:
        </p>
        <p>
          <img src={gitdude} className="portfolio-image" alt="Gitdude screenshot" />
        </p>
      </div>
    </div>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default IndexPage;
