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
import product from '../utils/lists/product';
import SkillsList from '../components/SkillsList';
import sqlai from '../assets/img/sqlai.ai.png';
import viewdiff from '../assets/img/viewdiff.png';
import websitefeedback from '../assets/img/websitefeedback.png';
import { denmark, germany, github, linkedin, mail, usa } from '../assets/svg';
import { me } from '../assets/img';

const aiProducts = [
  {
    name: 'SQLAI.ai',
    url: 'https://www.sqlai.ai/',
    image: sqlai,
    alt: 'SQLAI.ai screenshot',
    summary: 'AI-powered SQL workspace for generating, explaining, and optimizing SQL without losing control.',
    meta: 'Since 2023 · Profitable',
  },
  {
    name: 'Chartmaker.io',
    url: 'https://www.chartmaker.io/',
    image: chartmaker,
    alt: 'Chartmaker.io screenshot',
    summary: 'Turns rough input and raw data into clean, presentation-ready charts with minimal setup.',
    meta: 'Since 2024',
  },
  {
    name: 'WebsiteFeedback.ai',
    url: 'https://www.websitefeedback.ai/',
    image: websitefeedback,
    alt: 'WebsiteFeedback.ai screenshot',
    summary: 'AI feedback on landing pages and marketing sites: clarity, positioning, UX, and first impressions.',
    meta: 'Since 2024',
  },
  {
    name: 'ViewDiff.ai',
    url: 'https://www.viewdiff.ai/',
    image: viewdiff,
    alt: 'ViewDiff.ai screenshot',
    summary: 'AI-assisted diff viewer for professional writers, editors, and editorial workflows.',
    meta: 'Since 2025',
  },
];

const IndexPage = ({ data }) => (
  <div className="frontpage">
    <Helmet title={`Tech Lead and Full-Stack Developer in Copenhagen | ${data.site.siteMetadata.title}`} />
    <div>
      <div className="info">
        <img alt="" src={me} className="pic" />
        <h1 className="title">
          <span className="title-passive">I am</span> Lasse
        </h1>
        <h2 className="sub">Tech Lead and Full-Stack Developer in Copenhagen</h2>
        <ul className="links">
          <li>
            <img alt="" src={mail} />{' '}
            <a href="mailto:lasse@lassetange.com" title="Send me an email">
              lasse@lassetange.com
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
          Tech lead and full-stack developer with 15+ years of experience planning, architecting, and building web and mobile
          products. I have spent most of my career inside international startups and scale-ups in Berlin and Copenhagen —
          leading teams, owning architecture decisions, and helping early-stage companies grow into successful businesses.
        </p>
        <p>
          I have worked with AI since OpenAI released GPT-3 and have built and launched four AI products of my own, including
          the profitable SQLAI.ai. That work spans the practical side of applied AI — RAG, embeddings and vector search,
          prompt design, and AI-assisted development — always aimed at solving real business problems rather than producing
          demos.
        </p>
        <p>
          Beyond the code, I bring the business judgment that comes from startup environments: strong product thinking, a
          good eye for UX/UI, and code that stays simple, testable, and maintainable. When leading teams, I value results
          over processes and personal responsibility over micro-management.
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
        <h2>AI products</h2>
        <p>Products I designed, built, and run end to end — from idea and architecture to UX, marketing, and revenue.</p>
        <div className="personal-projects">
          {aiProducts.map(project => (
            <article key={project.name} className="personal-project-card">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="personal-project-image-link">
                <img src={project.image} className="portfolio-image personal-project-image" alt={project.alt} />
              </a>
              <h4 className="personal-project-title">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h4>
              <p>{project.summary}</p>
              <p className="personal-project-meta">{project.meta}</p>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h2>Selected client work</h2>
        <p>Roles I have held for startups and public institutions:</p>
        <ul>
          <li>
            Architected and developed the native mobile and web apps for a delivery service, with end-to-end responsibility
            for design, structure, and technical implementation, while mentoring teammates.
            <br />
            <small>
              Customer: <b>alpakas.app</b> ·{' '}
              <a href="https://alpakas.app/" target="_blank" rel="noopener noreferrer">
                alpakas.app
              </a>
              <br />
              Tech: React Native, React, TypeScript, GraphQL.
              <br />
              Date: Jan 2022.
            </small>
          </li>
          <li>
            Developed the native mobile app for a Berlin crypto bank, focused on secure and user-friendly access to digital
            banking services.
            <br />
            <small>
              Customer: <b>nuri.com</b> ·{' '}
              <a href="https://nuri.com/" target="_blank" rel="noopener noreferrer">
                nuri.com
              </a>
              <br />
              Tech: React Native, TypeScript, GraphQL.
              <br />
              Date: Feb 2021 - Sep 2021.
            </small>
          </li>
          <li>
            Developer and tech lead on Germany&apos;s first complete platform for end-to-end digital car purchases. Designed
            and implemented the fully digital customer journey — selection, configuration, purchase, and transaction flows —
            and shaped the product through user interviews, analytics, feature flags, and A/B testing.
            <br />
            <small>
              Customer: <b>hey.car</b> ·{' '}
              <a href="https://hey.car/" target="_blank" rel="noopener noreferrer">
                hey.car
              </a>
              <br />
              Tech: SSR React, Redux, CSS-in-JS, Kotlin REST API.
              <br />
              Date: Aug 2018 - Nov 2020.
            </small>
          </li>
          <li>
            Developed a React application for a Berlin e-learning startup using test-driven development, working both
            independently and as part of the team.
            <br />
            <small>
              Customer: <b>Wonderwerk.co</b> ·{' '}
              <a href="https://www.wonderwerk.co/" target="_blank" rel="noopener noreferrer">
                wonderwerk.co
              </a>
              <br />
              Tech: React, JavaScript, TDD.
              <br />
              Date: Aug 2018 - Dec 2018.
            </small>
          </li>
          <li>
            Long-term freelance developer through the Copenhagen agency Headnet, delivering full-stack projects for public
            institutions and startups:
            <ul>
              <li>
                <b>Danish Ministry of Higher Education and Science</b>: embeddable webshop with an order/product backend and
                advanced data export (React, Redux, Flask, MySQL).
              </li>
              <li>
                <b>The National Museum of Denmark</b>: portal for exploring the museum&apos;s digitized collection with rich
                search (
                <a href="https://natmus.dk/" target="_blank" rel="noopener noreferrer">
                  natmus.dk
                </a>
                ; Angular, Express, Elasticsearch).
              </li>
              <li>
                <b>Danish Environmental Board of Appeal</b>: map of protected buildings in Denmark built on geospatial
                queries (
                <a href="https://www.fredninger.dk/" target="_blank" rel="noopener noreferrer">
                  fredninger.dk
                </a>
                ; Backbone, Flask, Elasticsearch, Docker).
              </li>
              <li>
                <b>The Foundation for Environmental Education</b>: CartoDB–Podio integration visualizing geodata across map
                views (Laravel, MySQL).
              </li>
              <li>
                <b>Bolighed</b>: map-based frontend features for housing search for a Danish startup (Angular, geodata).
              </li>
            </ul>
            <small>Date: Jun 2013 - Jan 2018.</small>
          </li>
        </ul>
      </div>

      <div>
        <h2>Technologies</h2>
        <p>
          I work across the modern TypeScript stack, with React at the center — from frontend architecture and APIs to data
          modeling, testing, and delivery. AI is a first-class part of my toolbox, both in the products I build and in how I
          build them. The lists below are representative rather than exhaustive.
        </p>
        <SkillsList title="AI" list={ai} />
        <SkillsList title="Frontend" list={frontend} />
        <SkillsList title="Backend & Data" list={backend} />
        <SkillsList title="Languages" list={languages} />
        <SkillsList title="Testing & Tooling" list={other} />
        <SkillsList title="Platform & Delivery" list={devops} />
        <SkillsList title="Product & Leadership" list={product} />
      </div>

      <div>
        <h2>Open source</h2>
        <p>Selected open source projects I developed and maintain:</p>
        <ul>
          <li>
            <a href="https://packagecontrol.io/packages/Sublime%20ES7%20React%20Redux%20ReactNative%20JS%20snippets">
              Popular package
            </a>{' '}
            for ES7, React, Redux and React​Native snippets for Sublime Editor (JS & TS).
          </li>
          <li>
            <a href="https://github.com/lassegit/flask-reactjs">flask-reactjs</a>: Flask, React/Redux and webpack
            boilerplate.
          </li>
          <li>
            <a href="https://github.com/lassegit/flask-scaffolding">flask-scaffolding</a>: Flask scaffolding featuring
            SQLAlchemy, BackboneJS and Sass.
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-collapse-simple">react-collapse-simple</a>: Simple library for
            collapsing and expanding content with sliding animation (TypeScript).
          </li>
          <li>
            <a href="https://github.com/lassegit/react-simple-social">react-simple-social</a>: Add all social share links
            through one simple and lightweight React component.
          </li>
          <li>
            <a href="https://github.com/lassegit/git18n-node">git18n-node</a>: Lightweight npm package that abstracts
            translation management for developers.
          </li>
          <li>
            Browser extensions for quick dictionary and translation lookups:{' '}
            <a href="https://github.com/lassegit/deepl-extension">DeepL</a>,{' '}
            <a href="https://github.com/lassegit/langenscheidt-chrome-ext">Langenscheidt</a> and{' '}
            <a href="https://github.com/lassegit/ordnet-chrome-ext">Ordnet</a>.
          </li>
        </ul>
        <p>
          <a href="https://github.com/lassegit" target="_blank" rel="noopener noreferrer">
            See more on my GitHub profile →
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
