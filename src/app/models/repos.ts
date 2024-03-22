import { Repo } from "./repo";

export class Repos{
    repositaries:Repo[];
    constructor(repositaries: Repo[]=[]){
        this.repositaries=repositaries;
    }
}