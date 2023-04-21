import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { About } from 'src/app/shared/about';
import { AboutService } from 'src/app/shared/about.service';
import { Skills } from 'src/app/shared/skills';
import { Timeline } from 'src/app/shared/timeline';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  
  @ViewChild('f') blogsInfo: NgForm | undefined;
  about: About[];
  skills: Skills[];
  timeLine: Timeline[];
  display: boolean = false;
  skill: Skills;
  mode: string = 'add';
  id: string;
  switchButton: string = 'ADD';
  
  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    const data = this.aboutService.getAboutData();
    const skills = this.aboutService.getSkills();
    const timeLine = this.aboutService.getTimeLine();
    this.about = data;
    this.skills = skills;
    this.timeLine = timeLine;
  }

  onDelete(id: string) {
    const updatedSkills = this.skills.filter(blog => blog.id !== id);
    this.skills = updatedSkills;
  }

  onEdit(id: string) {
    this.skill = {...this.skills.find(skill => skill.id === id)};
    this.display = true;
    this.id = id;
    console.log('display edit');
    this.mode = 'edit';
    this.switchButton = 'EDIT';
  }

  displayForm() {
    this.display = true;
    console.log("somenthing");
  }

  onSubmit() {
    const newSkill = {
      id: uuidv4(),
      title: this.blogsInfo?.value.name,
      percentage: this.blogsInfo?.value.percentage
    }
    if(this.mode === 'edit') {
      for(let val of this.skills) {
        if(val.id === this.id) {
          val.percentage = this.blogsInfo?.value.percentage;
          val.title = this.blogsInfo?.value.name;
          this.mode = 'add';
          this.switchButton = 'ADD';
          break;
        }
      }
    } else if(this.mode === 'add'){  
      this.skills.push(newSkill);
    }
    this.display = false;
    this.blogsInfo?.reset();
  }

  hideForm() {
    this.display = false;
    this.blogsInfo?.reset();
  }
}


