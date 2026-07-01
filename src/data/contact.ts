// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { IconEnum } from "./icon"

export interface OtherContactType {
  Details: string,
  SVG: IconEnum,
}

export interface EmailContactType extends OtherContactType {
  Link: string,
  ViewBox: string,
  Size: string,
}

export interface ConnectContactType extends EmailContactType {
  Name: string,
}

interface ContactContactType {
  Name: OtherContactType,
  Location: OtherContactType,
}

const dbContactContact: ContactContactType = {
  Name: {
    Details: "Quan Do (he/him)",
    SVG: "Person"
  },
  Location: {
    Details: "Atlanta, Georgia, USA",
    SVG: "Location"
  }
}

const dbEmailContact: EmailContactType = {
  Details: "contact@dodquan.com",
  Link: "contact@dodquan.com",
  ViewBox: "0 0 20 20",
  Size: "16",
  SVG: "Email"
}

const dbConnectContact: ConnectContactType[] = [
  {
    Name: "LinkedIn",
    Details: "Duc Quan Do (@dodquan)",
    Link: "https://www.linkedin.com/in/dodquan/",
    ViewBox: "0 0 150.4 155.83",
    Size: "12",
    SVG: "LinkedIn"
  },
  {
    Name: "GitHub",
    Details: "Duc-Quan Do (@ducquando)",
    Link: "https://github.com/ducquando",
    ViewBox: "0 0 172.36 167.82",
    Size: "16",
    SVG: "GitHub"
  },
  {
    Name: "Behance",
    Details: "Duc Quan Do (@quannz)",
    Link: "https://www.behance.net/quannz",
    ViewBox: "0 0 210.4 132.42",
    Size: "16",
    SVG: "Behance"
  },
]

export const dbContact = {
  Contact: dbContactContact,
  Email: dbEmailContact,
  Connect: dbConnectContact,
}
