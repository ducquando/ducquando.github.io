// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { ImgFormatEnum } from "./work"

export interface SkillAboutType {
    Image: string,
    Format: ImgFormatEnum,
    SkillName: string,
  }

export interface JourneyAboutType {
  Year: string,
  Description: string,
  Image: string,
  Format: ImgFormatEnum,
  Landspace: boolean,
  HorizontalOffset: string,
  VerticalOffset: string,
}

export interface GeneralAboutType {
  Overview: string,
  Years: string,
  Project: string,
  Stakeholders: string,
}

export interface OtherAboutType {
  Primary: string,
  Secondary: string,
}

export interface ExperienceAboutType {
  Name: string,
  Description: string,
  CTA: string,
  Thumbnail: string,
  Format: ImgFormatEnum,
  Years: string,
  Project: string,
  Stakeholders: string,
  Skills: SkillAboutType[],
}[]

const dbJourneyAbout: JourneyAboutType[] = [
  {
    Year: "2012",
    Description: "I learned to use computer by playing with different desktop applications. My first mastered tool was Adobe Photoshop.",
    Image: "./pictures/about/2012",
    Format: ".png",
    Landspace: false,
    HorizontalOffset: "4",
    VerticalOffset: "-1"
  },
  {
    Year: "2017",
    Description: "During high school, I developed visual communication and leadership skills through design roles in student clubs and non-profit projects.",
    Image: "./pictures/about/2017",
    Format: ".png",
    Landspace: false,
    HorizontalOffset: "7",
    VerticalOffset: "-1"
  },
  {
    Year: "2020",
    Description: "I began my undergraduate studies at Fulbright University Vietnam and discovered my passion for building interactive, human-centered computational systems.",
    Image: "./pictures/about/2020",
    Format: ".png",
    Landspace: true,
    HorizontalOffset: "7",
    VerticalOffset: "0"
  },
  {
    Year: "2021",
    Description: "I interned as a graphic designer at TBWA and had the best opportunity to sharpen my creative direction, visual reasoning, and product communication skills.",
    Image: "./pictures/about/2021",
    Format: ".png",
    Landspace: true,
    HorizontalOffset: "6",
    VerticalOffset: "0"
  },
  {
    Year: "2023",
    Description: "I expanded into full-stack development, simulations, and applied ML. I built products involving navigation, agent-based models, and time-series prediction.",
    Image: "./pictures/about/2023",
    Format: ".png",
    Landspace: false,
    HorizontalOffset: "6",
    VerticalOffset: "-1"
  },
  {
    Year: "2024",
    Description: "I joined KMS Technology and developed automated testing frameworks for web and mobile apps. This experience shaped my interest in making reliable softwares and human-in-the-loop systems.",
    Image: "./pictures/about/2024",
    Format: ".png",
    Landspace: false,
    HorizontalOffset: "7",
    VerticalOffset: "-1"
  },
  {
    Year: "Now",
    Description: "I focus on software engineering and machine learning research, currently pursuing an M.S. in Computer Science and working on physics-informed neural networks and computer simulations.",
    Image: "./pictures/about/2025",
    Format: ".png",
    Landspace: true,
    HorizontalOffset: "9",
    VerticalOffset: "0"
  }
]

const dbGeneralAbout: GeneralAboutType = {
  Overview: "Quan is a software engineer and applied ML researcher with a background in user-centric design.",
  Years: "5+",
  Project: "30+",
  Stakeholders: "20+"
}

const dbDetailAbout: OtherAboutType = {
  Primary: "I'm Quan, a software engineer with strong applied machine learning experience.",
  Secondary: "I build end-to-end intelligent systems that combine engineering rigor, human-centered design, and creative problem-solving. I enjoy making arts in my free time."
}

const dbFutureAbout: OtherAboutType = {
  Primary: "I aim to deepen my expertise in software engineering and applied machine learning by contributing to projects that solve real-world challenges through intelligent, human-centered systems.",
  Secondary: "Long term, I hope to pursue an academic path where I can work on research at the intersection of ML, simulations, and interactive technologies. I'm especially fascinated by AI-augmented workflows, especially about how tools like LLMs can support creativity, design, and everyday problem-solving.",
}

const dbExperienceAbout: ExperienceAboutType[] = [
  {
    Name: "Machine Learning & Applied AI",
    Description: "My machine learning work focuses on building applied, end-to-end intelligent systems. I have experience with neural networks, simulations, agent-based modeling, and computer vision. My recent research includes developing Physics-Informed Neural Networks (PINNs) for scientific modeling and designing network simulations for social influence dynamics.",
    CTA: "/works?se=false&pd=false&gd=false",
    Thumbnail: "./pictures/about/Journey3",
    Format: ".png",
    Years: "2+",
    Project: "4+",
    Stakeholders: "3+",
    Skills: [
      {
        Image: "./pictures/tools/Python",
        Format: ".png",
        SkillName: "Python"
      },
      {
        Image: "./pictures/tools/PyTorch",
        Format: ".png",
        SkillName: "PyTorch"
      },
      {
        Image: "./pictures/tools/ScikitLearn",
        Format: ".png",
        SkillName: "Scikit-learn"
      },
      {
        Image: "./pictures/tools/TensorFlow",
        Format: ".png",
        SkillName: "TensorFlow"
      },
      {
        Image: "/pictures/tools/R",
        Format: ".png",
        SkillName: "R"
      },
    ]
  },
  {
    Name: "Software Engineering",
    Description: "I specialize in building full-stack applications, automation systems, and computational tools. I enjoy designing architectures, optimizing performance, and creating interactive experiences. My engineering work spans frontend development, backend APIs, cloud deployment, and scalable automation frameworks.",
    CTA: "/works?pd=false&ds=false&gd=false",
    Thumbnail: "./pictures/about/Journey2",
    Format: ".png",
    Years: "3+",
    Project: "10+",
    Stakeholders: "5+",
    Skills: [
      {
        Image: "./pictures/tools/Python",
        Format: ".png",
        SkillName: "Python"
      },
      {
        Image: "./pictures/tools/TypeScript",
        Format: ".png",
        SkillName: "TypeScript"
      },
      {
        Image: "./pictures/tools/JavaScript",
        Format: ".png",
        SkillName: "JavaScript"
      },
      {
        Image: "./pictures/tools/Java",
        Format: ".png",
        SkillName: "Java"
      },
      {
        Image: "./pictures/tools/Swift",
        Format: ".png",
        SkillName: "Swift"
      },
      {
        Image: "./pictures/tools/React",
        Format: ".png",
        SkillName: "React"
      },
      {
        Image: "./pictures/tools/NodeJS",
        Format: ".png",
        SkillName: "NodeJS"
      },
      {
        Image: "./pictures/tools/SQL",
        Format: ".png",
        SkillName: "SQL"
      },
      {
        Image: "./pictures/tools/Docker",
        Format: ".png",
        SkillName: "Docker"
      },
      {
        Image: "./pictures/tools/AmazonEC2",
        Format: ".png",
        SkillName: "Amazon EC2"
      },
      {
        Image: "./pictures/tools/Playwright",
        Format: ".png",
        SkillName: "Playwright"
      },
      {
        Image: "./pictures/tools/Appium",
        Format: ".png",
        SkillName: "Appium"
      },
    ]
  },
  {
    Name: "Product & Human-Centered Engineering",
    Description: "With a foundation in Computer Science and Psychology, I design and build human-centered digital systems. I combine UX reasoning with engineering execution to deliver intuitive, performant, and data-driven products. I have experience conducting user research, prototyping, and deploying full-featured applications in academic and industry settings.",
    CTA: "/works?se=false&ds=false&gd=false",
    Thumbnail: "./pictures/about/Journey1",
    Format: ".png",
    Years: "3+",
    Project: "10+",
    Stakeholders: "5+",
    Skills: [
      {
        Image: "./pictures/tools/Figma",
        Format: ".png",
        SkillName: "Figma"
      },
      {
        Image: "./pictures/tools/XD",
        Format: ".png",
        SkillName: "XD"
      },
      {
        Image: "./pictures/tools/Agile",
        Format: ".png",
        SkillName: "Agile"
      }
    ]
  },
  {
    Name: "Visual Design",
    Description: "I have professional experience in branding, visual communication, and digital media. Although my focus is now on engineering and machine learning, my design background continues to influence my approach to product thinking and user experience.",
    CTA: "/works?se=false&pd=false&ds=false",
    Thumbnail: "./pictures/about/Journey4",
    Format: ".png",
    Years: "5",
    Project: "15+",
    Stakeholders: "10+",
    Skills: [
      {
        Image: "./pictures/tools/Illustrator",
        Format: ".png",
        SkillName: "Illustrator"
      },
      {
        Image: "./pictures/tools/Photoshop",
        Format: ".png",
        SkillName: "Photoshop"
      },
      {
        Image: "./pictures/tools/AfterEffects",
        Format: ".png",
        SkillName: "After Effects"
      },
      {
        Image: "./pictures/tools/Canva",
        Format: ".png",
        SkillName: "Canva"
      }
    ]
  }
]

export const dbAbout = {
  Journey: dbJourneyAbout,
  General: dbGeneralAbout,
  Details: dbDetailAbout,
  Future: dbFutureAbout,
  Experience: dbExperienceAbout,
};
