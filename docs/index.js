/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog';

import 'purecss/build/pure.css';
import './main.css';
import '../style.css';

import '../dist/style.min.css';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.

let LoginForm = require('../src/LoginForm.jsx');

const documentationImports = {
  LoginForm
};
const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('../README.md'))
  },
  {
    path: '/usage',
    title: 'Usage',
    content: pageLoader(() => import('../DOCS.md'))
  }
];

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <GithubCorner
      href="https://github.com/binhqd/react-form-login"
      bannerColor="#fff"
      octoColor="#000"
      width={80}
      height={80}
      direction="right"
    />
    <Catalog
      imports={documentationImports}
      pages={pages}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} />
      }}
      title="Boilerplate"
    />
  </div>,
  document.getElementById('catalog')
);
