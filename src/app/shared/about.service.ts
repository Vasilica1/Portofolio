import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  getAboutData() {
    return [
      {
        numberExperince: 650,
        firstW: "Projects",
        secondW: "Completed"
      },
      {
        numberExperince: 10,
        firstW: "Years of",
        secondW: "experience"
      },
      {
        numberExperince: 30,
        firstW: "Happy",
        secondW: "Clients"
      },
      {
        numberExperince: 10,
        firstW: "Customer",
        secondW: "reviews"
      }
    ]
  }

  getSkills() {
    return [
      {
        id: uuidv4(),
        title: "html5",
        percentage: 80
      },
      {
        id: uuidv4(),
        title: "css",
        percentage: 90
      },
      {
        id: uuidv4(),
        title: "javascript",
        percentage: 90
      },
      {
        id: uuidv4(),
        title: "angularJS",
        percentage: 100
      },
      {
        id: uuidv4(),
        title: "nodeJS",
        percentage: 30
      }
    ]
  }

  getTimeLine() {
    return [
      {
        time: "2010 - present",
        position: "Web Developer",
        location: "- Vircrosoft",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit."
      },
      {
        time: "2008 - 2011",
        position: "Software Engineer",
        location: "- Boogle, Inc.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit."
      },
      {
        time: "2003 - 2011",
        position: "Web Design",
        location: "- Romania.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit."
      }
    ]
  }

  getPortofolioImges() {
    return [
      {
        imgSrc: "../../../assets/img/port2.jpg"
      },
      {
        imgSrc: "../../../assets/img/port3.jpg"
      },
      {
        imgSrc: "../../../assets/img/port5.jpg"
      },
      {
        imgSrc: "../../../assets/img/port6.jpg"
      },
      {
        imgSrc: "../../../assets/img/port7.jpg"
      }
    ]
  }
  constructor() { }
}
