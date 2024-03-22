import { Component, OnInit } from '@angular/core';
import { GitHubUser } from 'src/app/models/gitHubUser';
import { Profile } from 'src/app/models/profile';
import { Repo } from 'src/app/models/repo';
import { Repos } from 'src/app/models/repos';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm: string = '';
  repos: Repo[] = [];
  gitHubUser: GitHubUser | undefined;

  constructor(private githubServiceService: GithubServiceService) {}

  Search() {

      this.githubServiceService.getGitHubUser(this.searchTerm).subscribe((response) => {
        this.gitHubUser=response;
        console.log(this.gitHubUser)

        this.sendProfile(new Profile(this.gitHubUser.name,this.gitHubUser.avatar_url,this.gitHubUser.bio,this.gitHubUser.public_repos))
        this.getAllUserRepo();
      },
      (error) => {
        console.log("workingg")
      })

    
  }

  getAllUserRepo(){
    this.githubServiceService.allUserRepos(this.searchTerm).subscribe((response) => {
      this.repos=response;
      this.sendRepos(this.repos);
    },
    (error) => {
      console.log("error repositaries not getting")
    })
    this.searchTerm = '';
  }
  sendProfile(profile: Profile){
    this.githubServiceService.updateProfile(profile);
  }
  sendRepos(repos: Repo[]){
    this.githubServiceService.updateRepos(repos);
  }
  ngOnInit(): void {}
}
