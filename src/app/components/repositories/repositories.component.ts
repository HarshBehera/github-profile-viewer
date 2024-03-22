import { Component, Injectable, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Repo } from 'src/app/models/repo';
import { GithubServiceService } from 'src/app/services/github-service.service';





@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit{
  repos:Repo[] =[]
  pageSlice:Repo[]=[];
  
  constructor(private gitHubService: GithubServiceService){

  }
  OnPageChange(event: PageEvent){
    const startIndex= event.pageIndex*event.pageSize;
    let endIndex = startIndex+event.pageSize;
    if(endIndex>this.repos.length){
      endIndex=this.repos.length;
    }
    this.pageSlice=this.repos.slice(startIndex,endIndex)
  }
  ngOnInit(): void {
    this.gitHubService.currentRepos.subscribe(repositories => {
      this.repos = repositories
      if(this.repos.length>0){
        if(this.repos.length>=3){
          this.pageSlice=this.repos.slice(0,10)  
        }
        else{
          this.pageSlice=this.repos.slice(0,this.repos.length)  
        }
      }
    });

    
  }
}
