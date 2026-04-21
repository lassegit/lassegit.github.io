import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import ai from '../utils/lists/ai';
import backend from '../utils/lists/backend';
import chartmaker from '../assets/img/chartmakerio.png';
import devops from '../utils/lists/devops';
import frontend from '../utils/lists/frontend';
import languages from '../utils/lists/languages';
import other from '../utils/lists/other';
import SkillsList from '../components/SkillsList';
import sqlai from '../assets/img/sqlai.ai.png';
import viewdiff from '../assets/img/viewdiff.png';
import websitefeedback from '../assets/img/websitefeedback.png';
import { denmark, germany, github, linkedin, mail, usa } from '../assets/svg';
import { me } from '../assets/img';

const personalProjects = [
  {
    name: 'SQLAI.ai',
    url: 'https://www.sqlai.ai/',
    image: sqlai,
    alt: 'SQLAI.ai screenshot',
    summary:
      'AI-powered SQL workspace for analysts, engineers, and database teams. It helps users generate, explain, and refine SQL faster without sacrificing control.',
    meta: 'Profitable product and one of the stronger AI-powered SQL tools in its category.',
  },
  {
    name: 'ViewDiff.ai',
    url: 'https://www.viewdiff.ai/',
    image: viewdiff,
    alt: 'ViewDiff.ai screenshot',
    summary:
      'AI-assisted diff viewer built for professional writers and editorial workflows. It makes it easier to compare revisions, spot meaning changes, and review drafts with less friction.',
    meta: 'Live product that is still being actively iterated on and refined.',
  },
  {
    name: 'Chartmaker.io',
    url: 'https://www.chartmaker.io/',
    image: chartmaker,
    alt: 'Chartmaker.io screenshot',
    summary:
      'AI-powered chart maker focused on turning rough input and raw data into clean, presentation-ready visuals with minimal setup.',
    meta: 'Built to shorten the path from idea or dataset to a usable chart.',
  },
  {
    name: 'WebsiteFeedback.ai',
    url: 'https://www.websitefeedback.ai/',
    image: websitefeedback,
    alt: 'WebsiteFeedback.ai screenshot',
    summary:
      'AI website feedback tool that reviews landing pages and marketing sites for clarity, positioning, UX, and first-impression issues.',
    meta: 'Designed to give teams a fast outside perspective before deeper user testing.',
  },
];

const IndexPage = ({ data }) => (
  <div className="frontpage">
    <Helmet title={`Fullstack Developer | Lasse T. | ${data.site.siteMetadata.title}`} />
    <div>
      <div className="info">
        <img alt="" src={me} className="pic" />
        <h1 className="title">
          <span className="title-passive">I am</span> Lasse
        </h1>
        <h2 className="sub">Experienced Fullstack Developer Seeking Challenging Work</h2>
        <ul className="links">
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
          Full-stack developer with over 15 years of experience planning, architecting, and building web and mobile apps,
          with a frontend focus. Beyond technical expertise, I have helped grow startups into successful businesses and
          learned many of the valuable ins and outs of that process.
        </p>
        <p>
          I provide the technical and business expertise to bring your projects and ideas to life. I have a good eye for
          UX/UI, am a strong problem solver, and strive to write high-quality code—simple, testable, and maintainable. I
          welcome challenges and the chance to work with new technologies and people.
        </p>
        <p>
          I have worked extensively with various AI technologies since OpenAI released GPT-3. I know how to optimize, search,
          and apply AI to business and development processes to solve real problems.
        </p>
        <p>
          When leading teams, I value results over processes, personal responsibility over micro-management, and innovation
          over dictates. I adhere to the principles behind the infamous{' '}
          <a href="https://agilemanifesto.org/principles.html">Agile Manifesto</a>.
        </p>
        <p>
          <a href="https://sometechblog.com/posts/frontend-architecture-decisions/">Read a few of my thoughts</a> on
          what&apos;s important for ensuring good architecture.
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
          Based in Copenhagen.
        </p>
      </div>
      <div>
        <h2>Technologies</h2>
        <p>
          I work across the modern TypeScript stack, with React at the center and strong experience spanning frontend
          architecture, APIs, data modeling, testing, and delivery.
        </p>
        <p>
          The list below is representative rather than exhaustive, but it covers the technologies I use most often and can
          step into quickly across the React and TypeScript ecosystem.
        </p>
        <SkillsList title="Frontend" list={frontend} />
        <SkillsList title="Backend & Data" list={backend} />
        <SkillsList title="Languages" list={languages} />
        <SkillsList title="AI" list={ai} />
        <SkillsList title="Testing & Tooling" list={other} />
        <SkillsList title="Platform & Delivery" list={devops} />
      </div>

      <div>
        <h2>Projects</h2>
        <p>Selected projects I built and/or was part of:</p>
        <ul>
          <li>
            Developed and architected native mobile and web app for the delivery service using React (Native), TypeScript,
            GraphQL and Storybook. Additionally I tutored teammates.
            <br />
            <small>
              Customer: <b>alpakas.app</b>
              <br />
              Url:{' '}
              <a href="https://alpakas.app/" target="_blank" rel="noopener noreferrer">
                alpakas.app
              </a>
              <br />
              Date: 2022 - 2022.
            </small>
          </li>
          <li>
            Developed native mobile app for a crypto bank using React Native, TypeScript and GraphQL.
            <br />
            <small>
              Customer: <b>nuri.com</b>
              <br />
              Url:{' '}
              <a href="https://nuri.com/" target="_blank" rel="noopener noreferrer">
                nuri.com
              </a>
              <br />
              Date: 2021 - 2021.
            </small>
          </li>
          <li>
            Developed Germany&apos;s first complete online platform for digital car purchases using ReactJS and related
            ecosystem. My role was developer/tech lead; duration: almost 2 years.
            <br />
            <small>
              Customer: <b>hey.car</b>
              <br />
              Url:{' '}
              <a href="https://hey.car/" target="_blank" rel="noopener noreferrer">
                hey.car
              </a>
              <br />
              Date: 2018 - 2021.
            </small>
          </li>
          <li>
            Developed (in team and independently) a ReactJS app using test driven development for an e-learning startup in
            Berlin. <br />
            <small>
              Customer: <b>Wonderwerk.co</b>
              <br />
              Url:{' '}
              <a href="https://www.wonderwerk.co/" target="_blank" rel="noopener noreferrer">
                wonderwerk.co
              </a>
              <br />
              Date: 2018 - 2018.
            </small>
          </li>
          <li>
            Embeddable webshop using ReactJS, Redux, Webpack, MySQL and Flask with an order/product management backend and
            advanced data export functionality. <br />
            <small>
              Customer: <b>Danish Ministry of Higher Education and Science.</b>
              <br />
              Url: <b>Not publicly available.</b>
              <br />
              Date: 2015 - 2018 (freelance work through Headnet).
            </small>
          </li>
          <li>
            Custom integration between Cartodb and Podio management tool that displays geodata on different maps. Backend
            built using Laravel and MySQL.
            <br />
            <small>
              Customer: <b>The Foundation for Environmental Education.</b>
              <br />
              Url:{' '}
              <a href="http://www.fee.global/" target="_blank" rel="noopener noreferrer">
                fee.global
              </a>
              <br />
              Date: 2015 - 2018 (freelance work through Headnet).
            </small>
          </li>
          <li>
            Web app for finding and viewing verdicts built using BackboneJS, Grunt, MySQL, Flask, Elasticsearch and Docker.
            <br />
            <small>
              Customer: <b>Danish Environmental Board of Appeal.</b>
              <br />
              Url:{' '}
              <a href="https://www.fredninger.dk/" target="_blank" rel="noopener noreferrer">
                fredninger.dk
              </a>
              <br />
              Date: 2015 - 2018 (freelance work through Headnet).
            </small>
          </li>
          <li>
            Co-developed a portal for exploring digitized images and artifacts from the museum&apos;s collection. Built using
            Express, ES6, Jade, SCSS, Angular and Elasticsearch.
            <br />
            <small>
              Customer: <b>The National Museum of Denmark.</b> <br />
              Url:{' '}
              <a href="https://natmus.dk/" target="_blank" rel="noopener noreferrer">
                natmus.dk
              </a>
              <br />
              Date: 2015 - 2018 (freelance work through Headnet).
            </small>
          </li>
          <li>
            Built various frontend functionality and UX combining Angular and geodata for a Danish housing startup.
            <br />
            <small>
              Customer: <b>Bolighed</b>
              <br />
              Url:{' '}
              <a href="https://bolighed.dk" target="_blank" rel="noopener noreferrer">
                bolighed.dk
              </a>
              <br />
              Date: 2015 - 2018 (freelance work through Headnet).
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

        <h3>A few personal projects</h3>
        <p>
          These are products I started and built outside client work. They show the mix of product thinking, execution, and
          iteration I bring when moving from idea to something people actually use.
        </p>
        <div className="personal-projects">
          {personalProjects.map(project => (
            <article key={project.name} className="personal-project-card">
              <div className="personal-project-copy">
                <h4 className="personal-project-title">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                </h4>
                <p>{project.summary}</p>
                <p className="personal-project-meta">{project.meta}</p>
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="personal-project-image-link">
                <img src={project.image} className="portfolio-image personal-project-image" alt={project.alt} />
              </a>
            </article>
          ))}
        </div>
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
