export class Profile{
    name: string;
    imageUrl:string;
    bio:string;
    reposCount:number;
    constructor(
        name:string ="",
        imageUrl:string="",
        bio:string="",
        reposCount:number=0
    ){
        this.name=name;
        this.imageUrl=imageUrl;
        this.bio=bio;
        this.reposCount=reposCount;
    }

}