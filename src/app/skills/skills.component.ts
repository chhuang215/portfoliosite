import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills:any = {};
  public skillIcons={};
  constructor() { 
    this.skills={
      progLang:["Java","C/C++","C#","Python","Haskell","VB/VBA"],
      db:["MySQL", "MS Access", "MongoDB / NoSQL"],
      web:{
        "main":["HTML", "Javascript","CSS", "PHP"],
        "frameworks":["JQuery", "Node.js", "Angular", "Ionic",
                      "ReactJS","MeteorJS", "Twitter Bootstrap",
                      "Material Design","Flask"
        ],
        "architecture":["REST", "SOAP"],
        "other":["AJAX", "JSON","ECMA","Webpack","Gulp" ,"Drupal"],
      },
      vcs:["Github", "SVN", "Bitbucket"],
      other:["Virtualization", 
        "Shell script", "Docker",".NET Framework",
        "AWS","Unix","Unit Testing", "IIS", "Arduino"
      ],
    }
    this.skillIcons={
      "Java": "devicon-java-plain-wordmark colored",
      "C/C++": "devicon-c-plain-wordmark colored",
      "C#":"devicon-csharp-plain colored",
      "Python":"devicon-python-plain-wordmark colored",
      "MySQL":"devicon-mysql-plain-wordmark colored",
      "MongoDB / NoSQL":"devicon-mongodb-plain-wordmark colored",
      "HTML": "devicon-html5-plain-wordmark colored",
      "Javascript":"devicon-javascript-plain colored",
      "CSS":"devicon-css3-plain-wordmark colored",
      "PHP":"devicon-php-plain colored",
      "JQuery":"devicon-jquery-plain-wordmark colored",
      "Node.js":"devicon-nodejs-plain-wordmark colored",
      

    }

  }

  ngOnInit() {
  }

}
