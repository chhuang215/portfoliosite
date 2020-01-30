import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = {};
  skillIcons={};
  constructor() { 
    this.skills={
      progLang:["Java","C/C++","C#","Python","Haskell","VB/VBA"],
    }
    this.skillIcons={
      Java: "devicon-java-plain-wordmark colored"
    }
  }

  ngOnInit() {
  }

}
