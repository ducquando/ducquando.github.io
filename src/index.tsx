// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App, ScrollToTop } from './App';
import './stylesheets/fonts.css';
import './stylesheets/colors.css';
import './stylesheets/buttons.css';
import './stylesheets/style.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>
);
