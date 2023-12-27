// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

const dbWork = {
  "Filter": {
    "curated": {
      "Sort": "curated",
      "Index": [
        "the-next-lap-web",
        "fulbright-forum",
        "inquiry",
        "lane-detection",
        "student-council",
        "momo-o2o",
        "stocks",
        "fulbright-navigator",
        "showcase",
        "depth-map",
        "fulbright-posters",
        "cheap-thrills",
        "fong",
        "covid-simulation",
        "scribbles",
        "amazeing-game",
        "project-gallery",
        "high-school",
        "copraise"
      ]
    },
    "name": {
      "Sort": "name",
      "Index": [
        "lane-detection",
        "depth-map",
        "cheap-thrills",
        "copraise",
        "stocks",
        "covid-simulation",
        "fulbright-posters",
        "fulbright-forum",
        "fulbright-navigator",
        "student-council",
        "high-school",
        "momo-o2o",
        "amazeing-game",
        "inquiry",
        "showcase",
        "scribbles",
        "the-next-lap-web",
        "fong"
      ]
    },
    "recent": {
      "Sort": "recent",
      "Index": [
        "the-next-lap-web",
        "fulbright-navigator",
        "fulbright-forum",
        "stocks",
        "covid-simulation",
        "depth-map",
        "lane-detection",
        "momo-o2o",
        "inquiry",
        "cheap-thrills",
        "copraise",
        "showcase",
        "project-gallery",
        "fong",
        "fulbright-posters",
        "amazeing-game",
        "student-council",
        "high-school",
        "scribbles"
      ]
    }
  },

  "Field": {
    "pd": {
      "ID": "pd",
      "Name": "Product development",
      "Alias": "Product",
      "PostID": [
        "the-next-lap-web",
        "fulbright-forum",
        "showcase",
        "amazeing-game",
        "inquiry",
        "momo-o2o",
        "cheap-thrills",
        "project-gallery",
        "copraise"
      ]
    },
    "se": {
      "ID": "se",
      "Name": "Software engineering",
      "Alias": "Software",
      "PostID": [
        "the-next-lap-web",
        "fulbright-forum",
        "fulbright-navigator",
        "showcase",
        "lane-detection",
        "amazeing-game",
        "depth-map"
      ]
    },
    "ds": {
      "ID": "ds",
      "Name": "Data science and AI",
      "Alias": "Data",
      "PostID": ["stocks", "covid-simulation", "depth-map", "lane-detection"]
    },
    "gd": {
      "ID": "gd",
      "Name": "Graphic design",
      "Alias": "Graphic",
      "PostID": [
        "fong",
        "student-council",
        "scribbles",
        "high-school",
        "fulbright-posters"
      ]
    }
  },

  "Post": {
    "the-next-lap-web": {
      "Link": "/the-next-lap-web",
      "Name": "The Next Lap: Business Web",
      "Thumbnail": "/assets/pictures/post/NextLap-0.png",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/TheNextLap.svg",
      "Duration": "1.5 months",
      "Date": "2023",
      "Tags": "Full-stack, Figma, NodeJS, MySQL, Azure",
      "Role": "UX/UI designer, web developer",
      "Source": false,
      "Highlight": true,
      "Similar": ["fulbright-forum", "fulbright-navigator", "project-gallery"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/NextLap-1.png",
            "Caption": "Thumbnail"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Overview"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "This is a full-stack business website developed for The Next Lap Edu Group, a <span style='color: var(--illuminating-yellow);'>Singaporean child care center</span> that offers full-day and half-day programs for children and has received positive feedback from parents and children alike."
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Technology stack"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "- UI: <span style='color: var(--illuminating-yellow);'>HTML, CSS</span> <br> - Business logic: <span style='color: var(--illuminating-yellow);'>JavaScript</span> <br> - Middleware: <span style='color: var(--illuminating-yellow);'>NodeJS, ExpressJS</span> <br> - Database: <span style='color: var(--illuminating-yellow);'>MySQL</span>"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Design system"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "We used the combination of 2 rounded san-serif fonts for heading and body to make the website more child-friendly."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/NextLap-2.png",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "The color palette is derived from the 3 The Next Lap's identified colors: bright red, sky blue, and honey yellow. Alongside, we add in neutral colors such as white and dark to display text better."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/NextLap-3.png",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "An UI kit was designed to provide consistency between screens."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/NextLap-4.png",
            "Caption": "UI kit"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Website"
          },
          {
            "Type": "img",
            "Style": "width-50",
            "Source": "/assets/pictures/post/NextLap-5.png",
            "Caption": "Homepage: desktop"
          },
          {
            "Type": "img",
            "Style": "width-20",
            "Source": "/assets/pictures/post/NextLap-6.png",
            "Caption": "Homepage: mobile"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-50",
            "Source": "/assets/pictures/post/NextLap-7.png",
            "Caption": "About: desktop"
          },
          {
            "Type": "img",
            "Style": "width-20",
            "Source": "/assets/pictures/post/NextLap-8.png",
            "Caption": "About: mobile"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-50",
            "Source": "/assets/pictures/post/NextLap-9.png",
            "Caption": "Services: desktop"
          },
          {
            "Type": "img",
            "Style": "width-20",
            "Source": "/assets/pictures/post/NextLap-10.png",
            "Caption": "Services: mobile"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-50",
            "Source": "/assets/pictures/post/NextLap-11.png",
            "Caption": "Tuition: desktop"
          },
          {
            "Type": "img",
            "Style": "width-20",
            "Source": "/assets/pictures/post/NextLap-12.png",
            "Caption": "Tuition: mobile"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-50",
            "Source": "/assets/pictures/post/NextLap-13.png",
            "Caption": "Enrichment: desktop"
          },
          {
            "Type": "img",
            "Style": "width-20",
            "Source": "/assets/pictures/post/NextLap-14.png",
            "Caption": "Enrichment: mobile"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-50",
            "Source": "/assets/pictures/post/NextLap-15.png",
            "Caption": "Franchise: desktop"
          },
          {
            "Type": "img",
            "Style": "width-20",
            "Source": "/assets/pictures/post/NextLap-16.png",
            "Caption": "Franchise: mobile"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-50",
            "Source": "/assets/pictures/post/NextLap-17.png",
            "Caption": "Career: desktop"
          },
          {
            "Type": "img",
            "Style": "width-20",
            "Source": "/assets/pictures/post/NextLap-18.png",
            "Caption": "Career: mobile"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-50",
            "Source": "/assets/pictures/post/NextLap-19.png",
            "Caption": "Contact: desktop"
          },
          {
            "Type": "img",
            "Style": "width-20",
            "Source": "/assets/pictures/post/NextLap-20.png",
            "Caption": "Contact: mobile"
          }
        ]
      ]
    },
    "fulbright-forum": {
      "Link": "/fulbright-forum",
      "Name": "Fulbright: Forum",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/FulbrightForum.svg",
      "Duration": "3 months",
      "Date": "2023",
      "Tags": "Full-stack, Figma, Flutter, Dart, Firebase",
      "Role": "Full-stack developer, UX/UI designer",
      "Source": "https://github.com/ducquando/fulbright-forum/",
      "Highlight": false,
      "Similar": ["the-next-lap-web", "inquiry", "amazeing-game"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Thumbnail"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Overview"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": ""
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Design system"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": ""
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": ""
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "An UI kit was designed to provide consistency between screens."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "UI kit"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "App interface"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/",
            "Caption": ""
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/",
            "Caption": ""
          }
        ]
      ]
    },
    "fulbright-navigator": {
      "Link": "/fulbright-navigator",
      "Name": "Fulbright: Navigator App",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/FulbrightNavigator.svg",
      "Duration": "2 weeks",
      "Date": "2023",
      "Tags": "Full-stack, AR, Swift, Firebase",
      "Role": "Software engineer, product owner",
      "Source": "https://github.com/ducquando/fulbright-navigator/",
      "Highlight": false,
      "Similar": ["the-next-lap-web", "showcase", "amazeing-game"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Thumbnail"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Overview"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": ""
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Design system"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": ""
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": ""
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "An UI kit was designed to provide consistency between screens."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "UI kit"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "App interface"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/",
            "Caption": ""
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/",
            "Caption": ""
          }
        ]
      ]
    },
    "showcase": {
      "Link": "/showcase",
      "Name": "Showcase: Mobile App",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/Showcase.svg",
      "Duration": "3 weeks",
      "Date": "2022",
      "Tags": "Full-stack, Swift, SQLite",
      "Role": "Software engineer, UX/UI designer",
      "Source": "https://github.com/ducquando/showcase",
      "Highlight": true,
      "Similar": ["the-next-lap-web", "fulbright-forum", "fulbright-navigator"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/Showcase-1.png",
            "Caption": "Thumbnail"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Overview"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "Showcase is a <span style='color: var(--illuminating-yellow);'>full-stack iOS application</span> that aims to <span style='color: var(--illuminating-yellow);'>enhance the learning experience of students</span> by allowing them to <span style='color: var(--illuminating-yellow);'>browse and read research articles from various fields and disciplines</span>. Showcase is inspired by the UX project called <a href='/works/project-gallery'>Project Gallery</a>, which was developed by students from CS303 Human-Computer Interaction course at Fulbright University Vietnam. <br><br> Showcase offers some basic features that make it easy and enjoyable for users to access and interact with research articles. These features include: article showcasing, article recommendation, article interaction, article searching, color mode switching, and user authentication."
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Technology stack"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "- UI styling: <span style='color: var(--illuminating-yellow);'>SwiftUI</span> <br> - Business logic: <span style='color: var(--illuminating-yellow);'>Swift</span> <br> - Middleware: <span style='color: var(--illuminating-yellow);'>SQLiteDB</span> <br> - Database: <span style='color: var(--illuminating-yellow);'>SQLite</span>"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Design system"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "With targeted customers being iOS users, the default typography system of Apple was used to provide a consistent look across mobile applications on Apple devices."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/Showcase-2.png",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "A bright and vivid color palette was chosen to attract new users from using the app and to distinguish from the yellow-ish color of physical paper. With that, it can help preventing users from getting bored of reading thousands of words."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/Showcase-3.png",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "An UI kit was designed to provide consistency between screens."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/Showcase-4.png",
            "Caption": "UI kit"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "App preview"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Showcase-5.gif",
            "Caption": "View: light mode"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Showcase-6.gif",
            "Caption": "View: dark mode"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Showcase-7.gif",
            "Caption": "Search: light mode"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Showcase-8.gif",
            "Caption": "Search: dark mode"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Showcase-9.gif",
            "Caption": "Saved: light mode"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Showcase-10.gif",
            "Caption": "Saved: dark mode"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Showcase-11.gif",
            "Caption": "Settings: light mode"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Showcase-12.gif",
            "Caption": "Settings: dark mode"
          }
        ]
      ]
    },
    "stocks": {
      "Link": "/stocks",
      "Name": "Deep Learning: Stocks Prediction",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/Stocks.svg",
      "Duration": "1 month",
      "Date": "2023",
      "Tags": "LSTM, TensorFlow, Python, Streamlit",
      "Role": "Data scientist",
      "Source": "https://github.com/ducquando/stocks",
      "Highlight": false,
      "Similar": ["lane-detection", "depth-map", "covid-simulation"],
      "Content": [
        [
          {
            "Type": ""
          }
        ]
      ]
    },
    "lane-detection": {
      "Link": "/lane-detection",
      "Name": "Computer Vision: Lane Detection",
      "Thumbnail": "/assets/pictures/post/LaneDetection-0.png",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/LaneDetection.svg",
      "Date": "2022",
      "Duration": "2 weeks",
      "Tags": "Python",
      "Role": "Algorithm architecture, software engineer",
      "Source": "https://github.com/ducquando/lane-detection",
      "Highlight": true,
      "Similar": ["stocks", "depth-map", "covid-simulation"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/LaneDetection-1.png",
            "Caption": "Thumbnail"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Overview"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "This is a <span style='color: var(--illuminating-yellow);'>computer vision program</span> for self-driving robot with dash camera to automatically <span style='color: var(--illuminating-yellow);'>detect and calculate lane, lane width, and midline</span>. The program was embed the program into a Raspberry single-board computer and tested in Fulbright's MakerSpace room."
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Technology stack"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "- Business logic: <span style='color: var(--illuminating-yellow);'>Python</span> <br> - Hardware controller: <span style='color: var(--illuminating-yellow);'>Arduino Coding</span>"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Demonstration"
          },
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "/assets/pictures/post/LaneDetection-2.gif"
          }
        ]
      ]
    },
    "amazeing-game": {
      "Link": "/amazeing-game",
      "Name": "PyGame: A-maze-ing Game",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/Amazeing.svg",
      "Duration": "1 month",
      "Date": "2020",
      "Tags": "Illustrator, PyGame, Python",
      "Role": "Front-end developer",
      "Source": false,
      "Highlight": false,
      "Similar": ["fulbright-forum", "showcase", "cheap-thrills"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/Amazeing-1.png",
            "Caption": "Thumbnail"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Overview"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "Welcome to A-maze-ing, a game where you can <span style='color: var(--illuminating-yellow);'>explore and solve complex random mazes</span> based on graph theory. In this game, you will encounter different types of mazes, such as perfect mazes, braid mazes, and recursive mazes generated using a modified version of <span style='color: var(--illuminating-yellow);'>Prim's algorithm</span>. The entire game is rendered upon <span style='color: var(--illuminating-yellow);'>PyGame engine</span>. <br><br> Are you ready to become a maze master? Then let's get started!"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Design system"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "The combination of this pair of fonts made it possible to reflect both readablity and artisticity of pixelate arts."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/Amazeing-2.png",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "A palette of pastel colors is chosen to attract player's curiosity yet minimize their eye strain."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/Amazeing-3.png",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "Since this is a project for an undergraduate course, we decided to characterize some of our professors as players."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/Amazeing-4.png",
            "Caption": "Character design"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Game interface"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Amazeing-5.png",
            "Caption": "Game intro"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Amazeing-5.png",
            "Caption": "Game intro"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Amazeing-6.png",
            "Caption": "Choose character"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Amazeing-7.png",
            "Caption": "Choose difficulty"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Amazeing-8.png",
            "Caption": "Game on"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Amazeing-8.png",
            "Caption": "Game on"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Amazeing-9.png",
            "Caption": "Lose screen"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/Amazeing-10.png",
            "Caption": "Win screen"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "/assets/pictures/post/Amazeing-11.png",
            "Caption": "Future development"
          }
        ]
      ]
    },
    "inquiry": {
      "Link": "/inquiry",
      "Name": "Reimagined One-Stop: Inquiry",
      "Thumbnail": "/assets/pictures/post/Inquiry-0.png",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/Inquiry.svg",
      "Duration": "1 week",
      "Date": "2022",
      "Tags": "Prototypes, Figma",
      "Role": "UX/UI designer",
      "Source": "https://www.behance.net/gallery/168780193/ReImagined-OneStop-Inquiry-Site",
      "Highlight": true,
      "Similar": ["momo-o2o", "showcase", "project-gallery"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/Inquiry-1.png",
            "Caption": "Thumbnail"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Overview"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "OneStop is a portal that allows Fulbright students to submit inquiries to various departments and receive timely and important notices. However, <span style='color: var(--illuminating-yellow);'>many students struggle with using this portal effectively</span>, as they face challenges such as finding the right department, tracking the progress of their inquiries, and getting satisfactory responses. These challenges can negatively affect the students' academic performance and satisfaction. <br><br> The purpose of this case study is to propose some recommendations for <span style='color: var(--illuminating-yellow);'>improving the design and functionality of OneStop's inquiries submission portal</span>. We hope that our case study can help Fulbright improve its student service and communication, and enhance its reputation as a leading institution of higher education."
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Design system"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "The combination of serif and san-serif helped constrast the difference among heading and body font, which aligns with Fulbright's instituational branding guideline."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/Inquiry-2.png",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "For coloring, we extended Fulbright color palette to include dark and white color for text. This helped the original color range more diverse, flexible and easy-to-read."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/Inquiry-3.png",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "Based on the definied color palette and font guideline, we designed an UI kit for the high-fidelity prototype."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/Inquiry-4.png",
            "Caption": "UI kit"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Prototype"
          },
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "/assets/pictures/post/Inquiry-5.png",
            "Caption": "Inquiry site"
          },
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "/assets/pictures/post/Inquiry-6.png",
            "Caption": "Inquiry site"
          },
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "/assets/pictures/post/Inquiry-7.png",
            "Caption": "Submit inquiry"
          },
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "/assets/pictures/post/Inquiry-8.png",
            "Caption": "Manage inquiry"
          }
        ]
      ]
    },
    "covid-simulation": {
      "Link": "/covid-simulation",
      "Name": "Discrete Maths: Covid Simulation",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/CovidSimulation.svg",
      "Duration": "2 weeks",
      "Date": "2023",
      "Tags": "SIR, networks, Python",
      "Role": "Algorithm architecture",
      "Source": "https://github.com/ducquando/covid-simulation",
      "Highlight": false,
      "Similar": ["lane-detection", "stocks", "depth-map"],
      "Content": [
        [
          {
            "Type": ""
          }
        ]
      ]
    },
    "depth-map": {
      "Link": "/depth-map",
      "Name": "Computer Vision: Depth Inspection",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/Depth.svg",
      "Duration": "2 weeks",
      "Date": "2022",
      "Tags": "Stereo Camera, Python",
      "Role": "Algorithm architecture, software engineer",
      "Source": "https://github.com/ducquando/depth-map",
      "Highlight": false,
      "Similar": ["lane-detection", "stocks", "covid-simulation"],
      "Content": [
        [
          {
            "Type": ""
          }
        ]
      ]
    },
    "fong": {
      "Link": "/fong",
      "Name": "Year-end Party: Fóng",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/Fong.svg",
      "Duration": "1 month",
      "Date": "2021",
      "Tags": "Design, Illustrator",
      "Role": "Graphic designer",
      "Source": false,
      "Highlight": false,
      "Similar": ["student-council", "fulbright-posters", "copraise"],
      "Content": [
        [
          {
            "Type": ""
          }
        ]
      ]
    },
    "student-council": {
      "Link": "/student-council",
      "Name": "Fulbright Student Council: Branding and Posts",
      "Thumbnail": "/assets/pictures/post/StudentCouncil-0.png",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/StudentCouncil.svg",
      "Duration": "3 months",
      "Date": "2020",
      "Tags": "Design, Illustrator",
      "Role": "Creative director, graphic designer",
      "Source": false,
      "Highlight": true,
      "Similar": ["fulbright-posters", "scribbles", "high-school"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/StudentCouncil-1.png",
            "Caption": "Thumbnail"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Overview"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "This is the branding guideline and collection of social post designs for Fulbright Student Council, an <span style='color: var(--illuminating-yellow);'>official Affiliate of Fulbright University Vietnam</span> with a mission of <span style='color: var(--illuminating-yellow);'>representing the voices and needs</span> of the University's undergraduate students."
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Branding guideline"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "The combination of serif and san-serif helps constrast the difference among heading and body font, which also aligns with Fulbright's instituational branding guideline."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/StudentCouncil-2.png",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "Student Council is proud to have dark blue and gold as its representative colors. Characterized by simplicity, those two colors outstandingly reflect the youthfulness and professionality of the undergraduates.."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/StudentCouncil-3.png",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "The image of tamarind leaves - an indispensable part of the tamarind tree, subtly represents Fulbright students. While the rectangle indicates the Student Body of Fulbright, the three stripes are the main committees of Fulbright Student Council (Academic, Campus Life, and others). In addition, the stroke of the rectangle can also be separated into three letters F S C, the abbreviation for Fulbright Student Council."
          },
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "/assets/pictures/post/StudentCouncil-4.png",
            "Caption": "Logo"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Posters"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/StudentCouncil-5.png",
            "Caption": "Facebook avatar"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/StudentCouncil-6.png",
            "Caption": "Voting standee"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "/assets/pictures/post/StudentCouncil-7.png",
            "Caption": "Ballot votes"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/StudentCouncil-8.png",
            "Caption": "Core values"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/StudentCouncil-9.png",
            "Caption": "Core value 4"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/StudentCouncil-10.png",
            "Caption": "Core value 5"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/StudentCouncil-11.png",
            "Caption": "Core value 6"
          }
        ]
      ]
    },
    "momo-o2o": {
      "Link": "/momo-o2o",
      "Name": "MoMo: An O2O Solution Proposal",
      "Thumbnail": "/assets/pictures/post/MoMo-0.png",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/Momo.svg",
      "Duration": "1.5 months",
      "Date": "2022",
      "Tags": "Product, Prototypes, Figma, Illustrator",
      "Role": "Product developer, UX/UI designer",
      "Source": "https://www.figma.com/proto/LWDWMZu1KfNwq1zLM31AX5/MoMo-Mall-(Version-2)?page-id=0%3A1&type=design&node-id=2-2&viewport=68%2C337%2C0.16&t=sQGcH9bFQeeYPRbb-1&scaling=scale-down&starting-point-node-id=2%3A2&mode=design",
      "Highlight": true,
      "Similar": ["inquiry", "cheap-thrills", "copraise"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/MoMo-1.png",
            "Caption": "Thumbnail"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Overview"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "MoMo is a leading mobile payment platform in Vietnam that aims to provide convenient and secure financial services to millions of users. However, <span style='color: var(--illuminating-yellow);'>MoMo faces a challenge in expanding its merchant network to small and medium enterprises (SMEs) that operate outside the digital economy</span>. These SMEs, such as local shops, restaurants, and service providers, <span>do not have enough incentives to digitalize their business and accept mobile payments</span>. They also <span style='color: var(--illuminating-yellow);'>struggle to reach and retain online customers who prefer to shop from e-commerce platforms or social media channels</span>. <br><br> To address these questions, we propose MoMo Go - a <span style='color: var(--illuminating-yellow);'>store-based online-to-offline (O2O) solution</span> that helps SMEs engage in the digital economy and helps users discover and visit nearby stores. MoMo Go leverages MoMo's existing user base, location-based technology, and gamification features to create a seamless and rewarding O2O experience for both merchants and users."
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Design system"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": "With a huge customer base using Apple devices, the default typography system of Apple was used to provide a consistent look across mobile applications on iPhone."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/MoMo-2.png",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "MoMo Go is designed to be a mini app inside MoMo. Therefore, we adopted their signature color palette consisting of light and dark purple. In addition, we include a bright shade of red for ads and CTA buttons to attract potential merchants."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/MoMo-3.png",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "An UI kit was designed to provide consistency between screens."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/MoMo-4.png",
            "Caption": "UI kit"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "App interface"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/MoMo-5.png",
            "Caption": "Home screen"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/MoMo-7.png",
            "Caption": "Merchant register"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/MoMo-6.png",
            "Caption": "MoMo Go"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/MoMo-8.png",
            "Caption": "Browse local stores"
          }
        ]
      ]
    },
    "scribbles": {
      "Link": "/scribbles",
      "Name": "Scribbles: Social Media Posts",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/Scribbles.svg",
      "Duration": "2 years",
      "Date": "2019-2020",
      "Tags": "Design, Illustrator, Photoshop",
      "Role": "Creative director, graphic designer",
      "Source": false,
      "Highlight": false,
      "Similar": ["student-council", "fong", "high-school"],
      "Content": [
        [
          {
            "Type": ""
          }
        ]
      ]
    },
    "fulbright-posters": {
      "Link": "/fulbright-posters",
      "Name": "Fulbright: Event Posters",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/FulbrightEvents.svg",
      "Duration": "1 year",
      "Date": "2021",
      "Tags": "Design, Illustrator",
      "Role": "Graphic designer",
      "Source": false,
      "Highlight": false,
      "Similar": ["student-council", "fong", "scribbles"],
      "Content": [
        [
          {
            "Type": ""
          }
        ]
      ]
    },
    "high-school": {
      "Link": "/high-school",
      "Name": "High School: Artworks Collection",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/HighSchool.svg",
      "Duration": "2 years",
      "Date": "2019-2021",
      "Tags": "Design, Illustrator, Photoshop",
      "Role": "Creative director, graphic designer",
      "Source": false,
      "Highlight": false,
      "Similar": ["student-council", "fulbright-posters", "scribbles"],
      "Content": [
        [
          {
            "Type": ""
          }
        ]
      ]
    },
    "cheap-thrills": {
      "Link": "/cheap-thrills",
      "Name": "Cheap Thrills: Concert Ticket System",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/CheapThrills.svg",
      "Duration": "1 month",
      "Date": "2022",
      "Tags": "Prototypes, Product, Figma",
      "Role": "UX/UI designer, product developer",
      "Source": "https://www.figma.com/proto/R1SFnIbW6klwdVLubQJYEp/Version-1.0?page-id=323%3A3711&type=design&node-id=323-3712&viewport=123%2C399%2C0.13&t=KgVaUOGF5n9pYaQm-1&scaling=scale-down&starting-point-node-id=323%3A3712&mode=design",
      "Highlight": false,
      "Similar": ["inquiry", "momo-o2o", "high-school"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Thumbnail"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Overview"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": ""
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Design system"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": ""
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": ""
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "An UI kit was designed to provide consistency between screens."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "UI kit"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "App interface"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/",
            "Caption": ""
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/",
            "Caption": ""
          }
        ]
      ]
    },
    "project-gallery": {
      "Link": "/project-gallery",
      "Name": "Fulbright: Project Gallery",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/ProjectGallery.svg",
      "Duration": "3 months",
      "Date": "2021",
      "Tags": "Prototypes, Product, Figma",
      "Role": "UX/UI designer, product developer",
      "Source": "https://www.figma.com/proto/g7tO3qTH0laF2IsC5MTXZf/Redesign-1.0?page-id=0%3A1&type=design&node-id=474-1135&viewport=282%2C289%2C0.03&t=27tcqJ6XCtWdVVpM-1&scaling=scale-down&starting-point-node-id=914%3A3378&show-proto-sidebar=1&mode=design",
      "Highlight": false,
      "Similar": ["the-next-lap-web", "inquiry", "momo-o2o"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Thumbnail"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Overview"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": ""
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Design system"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": ""
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": ""
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "An UI kit was designed to provide consistency between screens."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "UI kit"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "App interface"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/",
            "Caption": ""
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/",
            "Caption": ""
          }
        ]
      ]
    },
    "copraise": {
      "Link": "/copraise",
      "Name": "COPRAISE: Grading System",
      "Thumbnail": "/assets/pictures/post/",
      "Format": [".png", ".apng"],
      "Title": "/assets/graphics/Copraise.svg",
      "Duration": "1 month",
      "Date": "2022",
      "Tags": "Prototypes, Product, Adobe XD",
      "Role": "UX/UI designer",
      "Source": "https://xd.adobe.com/view/25d1c5b8-1b12-447b-83ce-c9bf2c89b0b7-7082/",
      "Highlight": false,
      "Similar": ["the-next-lap-web", "inquiry", "momo-o2o"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Thumbnail"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Overview"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": ""
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "Design system"
          },
          {
            "Type": "p",
            "Style": "width-60",
            "Details": ""
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": ""
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "An UI kit was designed to provide consistency between screens."
          },
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "/assets/pictures/post/",
            "Caption": "UI kit"
          }
        ],
        [
          {
            "Type": ""
          },
          {
            "Type": "h1",
            "Style": "width-90",
            "Details": "App interface"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/",
            "Caption": ""
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "/assets/pictures/post/",
            "Caption": ""
          }
        ]
      ]
    }
  }
}

export default dbWork;
