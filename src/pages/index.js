import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import backend from '../utils/lists/backend';
import frontend from '../utils/lists/frontend';
import languages from '../utils/lists/languages';
import SkillsList from '../components/SkillsList';
import { denmark, germany, github, graphql, linkedin, mail, phone, usa } from '../assets/svg';
import { gitdude, me } from '../assets/img';

const IndexPage = ({ data }) => (
  <div className="frontpage">
    <Helmet title={`Frontend Developer | Lasse T. | ${data.site.siteMetadata.title}`} />
    <div>
      <div className="info">
        <img alt="" src={me} className="pic" />
        <h1 className="title">
          <span className="title-passive">I am</span> Lasse
        </h1>
        <h2 className="sub">Experienced frontend developer seeking challenging projects </h2>
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
          Frontend developer with over 10 years of experience in planning, architecting and building web and mobile apps.
          Additionally I have considerable backend experience, which allows me to either develop various backend solutions,
          when needed, or work effortlessly together with backend developers.
        </p>
        <p>
          I provide the technical and business expertise to bring your projects and ideas to life. I have a good eye for
          UX/UI, I am a good problem solver and strive to write high-quality code (simple, testable and maintainable). I
          welcome challenges and the possibility to get to know new technologies and people.
        </p>
        <p>
          When leading teams I value a results over processes, personal responsibility over micro-management and innovation
          over dictates. I adhere to the principles behind the infamous{' '}
          <a href="https://agilemanifesto.org/principles.html">agile manifesto</a>.
        </p>
        <p>
          I speak <img alt="Danish flag" src={denmark} className="flag" /> Danish,{' '}
          <img alt="German flag" src={germany} className="flag" /> German and{' '}
          <img alt="English flag" src={usa} className="flag" /> English.
        </p>
        <p>
          <span role="img" aria-label="Location pin">
            📍
          </span>
          Living between Berlin and Denmark.
        </p>
        <p>
          <i>(Also interested in more quirky projects such startups with me as partner or similar.)</i>
        </p>
      </div>
      <div>
        <h2>Technologies</h2>
        <p>Some of the technologies I utilize:</p>
        <SkillsList title="Frontend" list={frontend} />
        <SkillsList title="Backend" list={backend} />
        <SkillsList title="Languages" list={languages} />
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
        <p>Selected projects I build and/or was part of:</p>
        <ul>
          <li>
            Developed native mobile app for a crypto bank using React Native, Typescript and GraphQL.
            <br />
            <small>
              Customer: <b>nuri.com</b>
              <br />
              Url:{' '}
              <a href="https://nuri.com/" target="_blank" rel="noopener noreferrer">
                nuri.com
              </a>
            </small>
          </li>
          <li>
            Developed Germany&apos;s first complete online platform for digital car purchase using ReactJS and related
            ecosystem. My role was developer/tech lead and almost 2 year duration.
            <br />
            <small>
              Customer: <b>hey.car</b>
              <br />
              Url:{' '}
              <a href="https://hey.car/" target="_blank" rel="noopener noreferrer">
                hey.car
              </a>
            </small>
          </li>
          <li>
            Developed (in team and independently) a ReactJS app using test driven development for a e-learning startup in
            Berlin. <br />
            <small>
              Customer: <b>Wonderwerk.co</b>
              <br />
              Url:{' '}
              <a href="https://www.wonderwerk.co/" target="_blank" rel="noopener noreferrer">
                wonderwerk.co
              </a>
            </small>
          </li>
          <li>
            Embeddable webshop with using ReactJS, Redux, Webpack, Mysql and Flask with a order/product management backend
            and advanced data export functionality. <br />
            <small>
              Customer: <b>Danish Ministry of Higher Education and Science.</b>
              <br />
              Url: <b>Not publicly available.</b>
            </small>
          </li>
          <li>
            Custom integration between Cartodb and Podio management tool that displays geodata on different maps. Backend
            build using Laravel and Mysql.
            <br />
            <small>
              Customer: <b>The Foundation for Environmental Education.</b>
              <br />
              Url:{' '}
              <a href="http://www.fee.global/" target="_blank" rel="noopener noreferrer">
                fee.global
              </a>
            </small>
          </li>
          <li>
            Web app for finding and viewing verdicts build using BackboneJS, Grunt, Mysql, Flask, Elasticsearch and Docker.
            <br />
            <small>
              Customer: <b>Danish Environmental Board of Appeal.</b>
              <br />
              Url:{' '}
              <a href="https://www.fredninger.dk/" target="_blank" rel="noopener noreferrer">
                fredninger.dk
              </a>
            </small>
          </li>
          <li>
            Co-developed a portal for exploring digitalized images and artifacts from the museum&apos;s collection. Build
            using Express, ES6, Jade, Scss, Angular and Elasticsearch.
            <br />
            <small>
              Customer: <b>The National Museum of Denmark.</b> <br />
              Url:{' '}
              <a href="https://natmus.dk/" target="_blank" rel="noopener noreferrer">
                natmus.dk
              </a>
            </small>
          </li>
          <li>
            Build various frontend functionality and UX combining Angular and geodata for a danish housing startup. <br />
            <small>
              Customer: <b>Bolighed</b>
              <br />
              Url:{' '}
              <a href="https://bolighed.dk" target="_blank" rel="noopener noreferrer">
                bolighed.dk
              </a>
            </small>
          </li>
        </ul>
      </div>

      <div>
        <h2>Open source</h2>
        <p>I also developed and maintain various open source projets:</p>
        <ul>
          <li>
            <a href="https://packagecontrol.io/packages/Sublime%20ES7%20React%20Redux%20ReactNative%20JS%20snippets">
              Popular package
            </a>{' '}
            for ES7, React, Redux and React​Native snippets for Sublime Editor (JS & TS).
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-collapse-simple">react-collapse-simple</a>: Simple library for
            collapsing and expanding content with sliding animation (typescript)
          </li>
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
          My latest project is gitdude.com (<a href="https://github.com/lassegit/gitdude.com">github repository</a>), a
          developer service that adds code improvements tips as comment on each github commit. It is build with an isomorphic
          express setup using ReactJS and GraphQL:
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
