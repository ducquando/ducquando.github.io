// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

const dbWork = {
  "Filter": {
    "default": {
      "Sort": "default",
      "Index": [
        "inquiry",
        "momo-o2o",
        "the-next-lap-web",
        "student-council",
        "lane-detection",
      ]
    },
    "name": {
      "Sort": "name",
      "Index": [
        "lane-detection",
        "student-council",
        "momo-o2o",
        "inquiry",
        "the-next-lap-web"
      ]
    },
    "date": {
      "Sort": "date",
      "Index": [
        "the-next-lap-web",
        "lane-detection",
        "momo-o2o",
        "inquiry",
        "student-council"
      ]
    }
  },

  "Field": {
    "ds": {
      "ID": "ds",
      "Name": "Machine Learning & Applied AI",
      "Alias": "Machine Learning",
      "PostID": ["lane-detection"]
    },
    "se": {
      "ID": "se",
      "Name": "Software engineering",
      "Alias": "Software",
      "PostID": ["the-next-lap-web", "lane-detection"]
    },
    "pd": {
      "ID": "pd",
      "Name": "Product & Human-Centered Engineering",
      "Alias": "Product",
      "PostID": ["the-next-lap-web", "inquiry", "momo-o2o"]
    },
    "gd": {
      "ID": "gd",
      "Name": "Visual design",
      "Alias": "Design",
      "PostID": ["student-council"]
    }
  },

  "Post": {
    "the-next-lap-web": {
      "Link": "/the-next-lap-web",
      "Name": "The Next Lap: Business Web",
      "Thumbnail": "/assets/pictures/post/NextLap-0",
      "Format": ".png",
      "Title": "TheNextLap",
      "Duration": "1.5 months",
      "Date": "2023",
      "Tags": "Full-stack, Figma, NodeJS, MySQL, Azure",
      "Role": "UX/UI designer, web developer",
      "Source": false,
      "Highlight": true,
      "Similar": ["momo-o2o", "inquiry"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "NextLap-1",
            'Format': ".png",
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
            "Type": "img-responsive",
            "Style": "width-90",
            "Source": "NextLap-2",
            'Format': ".png",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "The color palette is derived from the 3 The Next Lap's identified colors: bright red, sky blue, and honey yellow. Alongside, we add in neutral colors such as white and dark to display text better."
          },
          {
            "Type": "img-responsive",
            "Style": "width-90",
            "Source": "NextLap-3",
            'Format': ".png",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "An UI kit was designed to provide consistency between screens."
          },
          {
            "Type": "img-responsive",
            "Style": "width-90",
            "Source": "NextLap-4",
            'Format': ".png",
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
            "Style": "width-60",
            "Source": "NextLap-5",
            'Format': ".png",
            "Caption": "Homepage: desktop"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "NextLap-6",
            'Format': ".png",
            "Caption": "About: desktop"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "NextLap-7",
            'Format': ".png",
            "Caption": "Services: desktop"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "NextLap-8",
            'Format': ".png",
            "Caption": "Tuition: desktop"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "NextLap-9",
            'Format': ".png",
            "Caption": "Enrichment: desktop"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "NextLap-10",
            'Format': ".png",
            "Caption": "Franchise: desktop"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "NextLap-11",
            'Format': ".png",
            "Caption": "Career: desktop"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "NextLap-12",
            'Format': ".png",
            "Caption": "Contact: desktop"
          }
        ]
      ]
    },
    "lane-detection": {
      "Link": "/lane-detection",
      "Name": "Computer Vision: Lane Detection",
      "Thumbnail": "/assets/pictures/post/LaneDetection-0",
      "Format": ".png",
      "Title": "LaneDetection",
      "Date": "2022",
      "Duration": "2 weeks",
      "Tags": "Python",
      "Role": "Algorithm architecture, software engineer",
      "Source": "https://github.com/ducquando/lane-detection",
      "Highlight": false,
      "Similar": ["the-next-lap-web", "momo-o2o"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "LaneDetection-1",
            'Format': ".png",
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
            "Source": "LaneDetection-2",
            'Format': ".gif"
          }
        ]
      ]
    },
    "inquiry": {
      "Link": "/inquiry",
      "Name": "Reimagined One-Stop: Inquiry",
      "Thumbnail": "/assets/pictures/post/Inquiry-0",
      "Format": ".png",
      "Title": "Inquiry",
      "Duration": "1 week",
      "Date": "2022",
      "Tags": "Prototypes, Figma",
      "Role": "UX/UI designer",
      "Source": "https://www.behance.net/gallery/168780193/ReImagined-OneStop-Inquiry-Site",
      "Highlight": true,
      "Similar": ["momo-o2o", "the-next-lap-web"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "Inquiry-1",
            'Format': ".png",
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
            "Type": "img-responsive",
            "Style": "width-90",
            "Source": "Inquiry-2",
            'Format': ".png",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "For coloring, we extended Fulbright color palette to include dark and white color for text. This helped the original color range more diverse, flexible and easy-to-read."
          },
          {
            "Type": "img-responsive",
            "Style": "width-90",
            "Source": "Inquiry-3",
            'Format': ".png",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "Based on the definied color palette and font guideline, we designed an UI kit for the high-fidelity prototype."
          },
          {
            "Type": "img-responsive",
            "Style": "width-90",
            "Source": "Inquiry-4",
            'Format': ".png",
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
            "Source": "Inquiry-5",
            'Format': ".png",
            "Caption": "Inquiry site"
          },
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "Inquiry-6",
            'Format': ".png",
            "Caption": "Inquiry site"
          },
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "Inquiry-7",
            'Format': ".png",
            "Caption": "Submit inquiry"
          },
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "Inquiry-8",
            'Format': ".png",
            "Caption": "Manage inquiry"
          }
        ]
      ]
    },
    "student-council": {
      "Link": "/student-council",
      "Name": "Fulbright Student Council: Branding and Posts",
      "Thumbnail": "/assets/pictures/post/StudentCouncil-0",
      "Format": ".png",
      "Title": "StudentCouncil",
      "Duration": "3 months",
      "Date": "2020",
      "Tags": "Design, Illustrator",
      "Role": "Creative director, graphic designer",
      "Source": false,
      "Highlight": false,
      "Similar": [],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "StudentCouncil-1",
            'Format': ".png",
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
            "Type": "img-responsive",
            "Style": "width-90",
            "Source": "StudentCouncil-2",
            'Format': ".png",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "Student Council is proud to have dark blue and gold as its representative colors. Characterized by simplicity, those two colors outstandingly reflect the youthfulness and professionality of the undergraduates.."
          },
          {
            "Type": "img-responsive",
            "Style": "width-90",
            "Source": "StudentCouncil-3",
            'Format': ".png",
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
            "Source": "StudentCouncil-4",
            'Format': ".png",
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
            "Source": "StudentCouncil-5",
            'Format': ".png",
            "Caption": "Facebook avatar"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "StudentCouncil-6",
            'Format': ".png",
            "Caption": "Voting standee"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-60",
            "Source": "StudentCouncil-7",
            'Format': ".png",
            "Caption": "Ballot votes"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "StudentCouncil-8",
            'Format': ".png",
            "Caption": "Core values"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "StudentCouncil-9",
            'Format': ".png",
            "Caption": "Core value 4"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "StudentCouncil-10",
            'Format': ".png",
            "Caption": "Core value 5"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "StudentCouncil-11",
            'Format': ".png",
            "Caption": "Core value 6"
          }
        ]
      ]
    },
    "momo-o2o": {
      "Link": "/momo-o2o",
      "Name": "MoMo: O2O Proposal",
      "Thumbnail": "/assets/pictures/post/MoMo-0",
      "Format": ".png",
      "Title": "Momo",
      "Duration": "1.5 months",
      "Date": "2022",
      "Tags": "Product, Prototypes, Figma, Illustrator",
      "Role": "Product developer, UX/UI designer",
      "Source": "https://www.behance.net/gallery/168781019/MoMo-O2O",
      "Highlight": true,
      "Similar": ["inquiry", "the-next-lap-web"],
      "Content": [
        [
          {
            "Type": "img",
            "Style": "width-90",
            "Source": "MoMo-1",
            'Format': ".png",
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
            "Type": "img-responsive",
            "Style": "width-90",
            "Source": "MoMo-2",
            'Format': ".png",
            "Caption": "Typography"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "MoMo Go is designed to be a mini app inside MoMo. Therefore, we adopted their signature color palette consisting of light and dark purple. In addition, we include a bright shade of red for ads and CTA buttons to attract potential merchants."
          },
          {
            "Type": "img-responsive",
            "Style": "width-90",
            "Source": "MoMo-3",
            'Format': ".png",
            "Caption": "Colors"
          },
          {
            "Type": "p",
            "Style": "width-60 top-padding",
            "Details": "An UI kit was designed to provide consistency between screens."
          },
          {
            "Type": "img-responsive",
            "Style": "width-90",
            "Source": "MoMo-4",
            'Format': ".png",
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
            "Source": "MoMo-5",
            'Format': ".png",
            "Caption": "Home screen"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "MoMo-7",
            'Format': ".png",
            "Caption": "Merchant register"
          }
        ],
        [
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "MoMo-6",
            'Format': ".png",
            "Caption": "MoMo Go"
          },
          {
            "Type": "img",
            "Style": "width-30",
            "Source": "MoMo-8",
            'Format': ".png",
            "Caption": "Browse local stores"
          }
        ]
      ]
    }
  }
}

export default dbWork;