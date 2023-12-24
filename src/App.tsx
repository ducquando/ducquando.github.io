import * as React from 'react';
import { Routes, Route, useParams, useSearchParams } from 'react-router-dom';

import * as homeView from './views/home.pug';
import * as aboutView from './views/about.pug';
import * as contactView from './views/contact.pug';
import * as workView from './views/work.pug';
import * as postView from './views/post.pug';

const dbAbout = require('./assets/data/about.json');
const dbContact = require('./assets/data/contact.json');
// import * as dbWork from './assets/data/work.json';
const dbWork = require('./assets/data/workSimplified.json');
const dbIcon = require('./assets/data/icon.json');

class Home extends React.Component {
  render() {
    return homeView.call(this, {
      title: 'Do Duc Quan',
      aboutExp: dbAbout.Experience,
      aboutGen: dbAbout.General,
      contactEmail: dbContact.Email,
      contactConnect: dbContact.Connect,
      workField: dbWork.Field,
      workHighlight: dbWork.Filter.curated.Index,
      workPost: dbWork.Post,
      icons: dbIcon,
    });
  }
}

class About extends React.Component {
  render() {
    return aboutView.call(this, {
      title: 'About',
      aboutJourney: dbAbout.Journey,
      aboutExp: dbAbout.Experience,
      contactEmail: dbContact.Email,
      contactConnect: dbContact.Connect,
      icons: dbIcon,
    });
  }
}

class Work extends React.Component {
  render() {
    let [searchParams] = useSearchParams();
    const workParams = {
      sort: searchParams.get('sort') || 'curated',
      se: searchParams.get('se')
        ? searchParams.get('se') == 'true'
          ? true
          : false
        : true,
      pd: searchParams.get('pd')
        ? searchParams.get('pd') == 'true'
          ? true
          : false
        : true,
      ds: searchParams.get('ds')
        ? searchParams.get('ds') == 'true'
          ? true
          : false
        : true,
      gd: searchParams.get('gd')
        ? searchParams.get('gd') == 'true'
          ? true
          : false
        : true,
    };
    return workView.call(this, {
      title: 'Works',
      contactEmail: dbContact.Email,
      contactConnect: dbContact.Connect,
      workField: dbWork.Field,
      workParams: workParams,
      workFilter: dbWork.Filter,
      workPost: dbWork.Post,
      icons: dbIcon,
    });
  }
}

class Post extends React.Component {
  render() {
    const { workID } = useParams();
    const workPost = dbWork.Post[workID ?? ''];
    return postView.call(this, {
      title: workPost['Name'],
      contactEmail: dbContact.Email,
      contactConnect: dbContact.Connect,
      workPost: workPost,
      workField: dbWork.Field,
      workID: workID,
      allPosts: dbWork.Post,
      icons: dbIcon,
    });
  }
}

class Contact extends React.Component {
  render() {
    return contactView.call(this, {
      title: 'Contact',
      contactInfo: dbContact.Contact,
      contactEmail: dbContact.Email,
      contactConnect: dbContact.Connect,
      icons: dbIcon,
    });
  }
}

export const App: React.VFC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/works" element={Work} />
        <Route path="/works/:workID" element={Post} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </>
  );
};
