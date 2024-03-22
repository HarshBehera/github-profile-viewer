import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  name:string="Harsh";
  imageUrl:string="https://avatars.githubusercontent.com/u/2009725?v=4";
  bio:string="Passionate Angular and Spring Boot developer looking for oppurtunity."
  reposCount:number=3;
  profile: Profile= new Profile()
  constructor(private gitHubService: GithubServiceService){

  }
  ngOnInit() {
    this.gitHubService.currentProfile.subscribe(profileData => {
      this.profile=profileData;
      this.name=this.profile.name;
      this.imageUrl=this.profile.imageUrl
      this.bio=this.profile.bio;
      this.reposCount=this.profile.reposCount;
      if(typeof this.name==='object'){
        this.name='username not given';
      }
      if(typeof this.imageUrl==='object'){
        this.imageUrl='https://i.stack.imgur.com/l60Hf.png';
      }
      if(typeof this.bio==='object'){
        this.bio='bio is emptyy'
      }

    })
  }
}
