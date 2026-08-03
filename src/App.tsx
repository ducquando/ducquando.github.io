// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC, lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { Header, Footer, Loading } from './views';
import { dbHome, dbAbout, dbContact, dbWork, dbIcon } from './data';

const About = lazy(() => import('./views/about'));
const Contact = lazy(() => import('./views/contact'));
const Home = lazy(() => import('./views/home'));
const NotFound = lazy(() => import('./views/error'));
const Post = lazy(() => import('./views/post'));
const Work = lazy(() => import('./views/work'));

const pageTitle = (title: string) => `${title} | Quan Do`;

export const App: FC = () => {
  return (
    <>
      <Header icons={dbIcon} />
      <div style={{ height: '3.5rem' }}></div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                title={pageTitle("Home")}
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
                title={pageTitle("About")}
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
                title={pageTitle("Works")}
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
                title={pageTitle("Contact")}
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
      </Suspense>
      <Footer
        contactEmail={dbContact.Email}
        contactConnect={dbContact.Connect}
        icons={dbIcon}
      />
    </>
  );
};

export const ScrollToTop: FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};
