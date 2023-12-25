import * as React from 'react';
import { Routes, Route, useParams, useSearchParams } from 'react-router-dom';

import { Header, Footer, About } from './views';
// import { Footer } from './views/footer';
// import * as homeView from './views/home.pug';
// import * as contactView from './views/contact.pug';
// import * as workView from './views/work.pug';
// import * as postView from './views/post.pug';

import dbAbout from '../assets/data/about.js';
import dbContact from '../assets/data/contact.js';
import dbWork from '../assets/data/workSimplified.js';
import dbIcon from '../assets/data/icon.js';

// function Home() {
// homeView({
//   title: 'Do Duc Quan',
//   aboutExp: dbAbout.Experience,
//   aboutGen: dbAbout.General,
//   contactEmail: dbContact.Email,
//   contactConnect: dbContact.Connect,
//   workField: dbWork.Field,
//   workHighlight: dbWork.Filter.curated.Index,
//   workPost: dbWork.Post,
//   icons: dbIcon,
// });
// }

// class About extends React.Component {
//   render() {
//     return aboutView({
//       title: 'About',
//       aboutJourney: dbAbout.Journey,
//       aboutExp: dbAbout.Experience,
//       contactEmail: dbContact.Email,
//       contactConnect: dbContact.Connect,
//       icons: dbIcon,
//     });
//   }
// }

// function Work() {
//   let [searchParams] = useSearchParams();
//   const workParams = {
//     sort: searchParams.get('sort') || 'curated',
//     se: searchParams.get('se')
//       ? searchParams.get('se') == 'true'
//         ? true
//         : false
//       : true,
//     pd: searchParams.get('pd')
//       ? searchParams.get('pd') == 'true'
//         ? true
//         : false
//       : true,
//     ds: searchParams.get('ds')
//       ? searchParams.get('ds') == 'true'
//         ? true
//         : false
//       : true,
//     gd: searchParams.get('gd')
//       ? searchParams.get('gd') == 'true'
//         ? true
//         : false
//       : true,
//   };
// workView({
//   title: 'Works',
//   contactEmail: dbContact.Email,
//   contactConnect: dbContact.Connect,
//   workField: dbWork.Field,
//   workParams: workParams,
//   workFilter: dbWork.Filter,
//   workPost: dbWork.Post,
//   icons: dbIcon,
// });
// }

// function Post() {
//   const { workID } = useParams();
// const workPost = dbWork.Post[workID ?? ''];
// postView({
//   // title: workPost['Name'],
//   contactEmail: dbContact.Email,
//   contactConnect: dbContact.Connect,
//   // workPost: workPost,
//   workField: dbWork.Field,
//   workID: workID,
//   allPosts: dbWork.Post,
//   icons: dbIcon,
// });
// }

// function Contact() {
// contactView({
//   title: 'Contact',
//   contactInfo: dbContact.Contact,
//   contactEmail: dbContact.Email,
//   contactConnect: dbContact.Connect,
//   icons: dbIcon,
// });
// }

export const App: React.FC = () => {
  // const { workID } = useParams();
  // const workPost = dbWork.Post[workID ?? ''];
  return (
    <div>
      <Header icons={dbIcon} />
      <div style={{ height: '3.5rem' }}></div>
      <Routes>
        {/* <Route path="/" element={Home} /> */}
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
        {/* <Route path="/works" element={Work} />
        <Route path="/works/:workID" element={Post} />
        <Route path="/contact" element={Contact} /> */}
      </Routes>
      <Footer
        contactEmail={dbContact.Email}
        contactConnect={dbContact.Connect}
        icons={dbIcon}
      />
    </div>
  );
};
