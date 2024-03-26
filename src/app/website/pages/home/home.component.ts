import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tech_partner_count:number = 0;
  experience:number = 0;
  country:number = 0;
  Professionals:number = 0;
  project:number = 0;



  tech_partner_countstop:any = setInterval(()=>{
    this.tech_partner_count++;

    if(this.tech_partner_count == 100){
      clearInterval(this.tech_partner_countstop)
    }
  },50)


  experiencestop:any = setInterval(()=>{
    this.experience++;

    if(this.experience == 5){
      clearInterval(this.experiencestop)
    }
  },50)

  countrystop:any = setInterval(()=>{
    this.country++;

    if(this.country == 20){
      clearInterval(this.countrystop)
    }
  },50)

  Professionalsstop:any = setInterval(()=>{
    this.Professionals++;

    if(this.Professionals == 150){
      clearInterval(this.Professionalsstop)
    }
  },50)


  projectstop:any = setInterval(()=>{
    this.project++;

    if(this.project == 100){
      clearInterval(this.projectstop)
    }
  },50)

}
