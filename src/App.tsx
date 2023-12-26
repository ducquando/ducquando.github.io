import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Header,
  Footer,
  About,
  Contact,
  Home,
  NotFound,
  Post,
  Work,
} from './views';

import dbAbout from '../assets/data/about.js';
import dbContact from '../assets/data/contact.js';
import dbWork from '../assets/data/workSimplified.js';
import dbIcon from '../assets/data/icon.js';

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
              workHighlight={dbWork.Filter.curated.Index}
              icons={dbIcon}
              aboutGen={dbAbout.General}
              contactEmail={dbContact.Email}
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
              contactInfo={dbContact.Contact}
            />
          }
        />
        <Route
          path="*"
          element={
            <NotFound
              title="404 Error"
              message="Error: Page not found"
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
