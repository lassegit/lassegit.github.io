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
    <Helmet title={`Frontend Developer in Berlin | Lasse T. | ${data.site.siteMetadata.title}`} />
    <div>
      <div className="info">
        <img alt="" src={me} className="pic" />
        <h1 className="title">
          <span className="title-passive">I am</span> Lasse
        </h1>
        <h2 className="sub">Frontend developer in Berlin seeking interesting projects</h2>
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
          Frontend developer with 10 years of experience <i>(including backend)</i> in planning, programming and deploying a
          wide range of web apps. I provide the technical and business expertise to bring your projects and ideas to life. I
          have a good eye for UX/UI, a good problem solver and strive to write high-quality code (simple, structured and
          maintainable). I welcome challenges and the possibility to get to know new technologies and people.
        </p>
        <p>
          I speak <img alt="" src={denmark} className="flag" /> Danish, <img alt="" src={germany} className="flag" /> German
          and <img alt="" src={usa} className="flag" /> English.
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
          <a href="https://gitdude.com" className="borderless">
            <img src={gitdude} className="portfolio-image" alt="Gitdude screenshot" />
          </a>
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
