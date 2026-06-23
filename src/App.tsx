// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import * as React from 'react';
import { lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './views';
import { dbHome, dbAbout, dbContact, dbWork, dbIcon } from '../public/data';

const About = lazy(async () => ({ default: (await import('./views')).About }));
const Contact = lazy(async () => ({
  default: (await import('./views')).Contact,
}));
const Home = lazy(async () => ({ default: (await import('./views')).Home }));
const NotFound = lazy(async () => ({
  default: (await import('./views')).NotFound,
}));
const Post = lazy(async () => ({ default: (await import('./views')).Post }));
const Work = lazy(async () => ({ default: (await import('./views')).Work }));

export const App: React.FC = () => {
  return (
    <div>
      <Header icons={dbIcon} />
      <div style={{ height: '3.5rem' }}></div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              workHighlight={dbWork.Filter.default.Index}
              icons={dbIcon}
              homeOverview={dbHome.Overview}
              aboutGen={dbAbout.General}
              contactEmail={dbContact.Email}
              contactLocation={dbContact.Contact.Location}
              workPost={dbWork.Post}
              workField={dbWork.Field}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              title="About"
              aboutJourney={dbAbout.Journey}
              aboutExp={dbAbout.Experience}
              aboutDetails={dbAbout.Details}
              aboutFuture={dbAbout.Future}
            />
          }
        />
        <Route
          path="/works/:workID"
          element={
            <Post
              workField={dbWork.Field}
              allPosts={dbWork.Post}
              icons={dbIcon}
            />
          }
        />
        <Route
          path="/works"
          element={
            <Work
              workField={dbWork.Field}
              allPosts={dbWork.Post}
              icons={dbIcon}
              workFilter={dbWork.Filter}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              title="Contact"
              icons={dbIcon}
              contactEmail={dbContact.Email}
              contactConnect={dbContact.Connect}
              contactInfo={Object.values(dbContact.Contact)}
            />
          }
        />
        <Route
          path="*"
          element={
            <NotFound
              title="Redirecting..."
              message="Page not found"
              icons={dbIcon}
            />
          }
        />
      </Routes>
      <Footer
        contactEmail={dbContact.Email}
        contactConnect={dbContact.Connect}
        icons={dbIcon}
      />
    </div>
  );
};

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};
