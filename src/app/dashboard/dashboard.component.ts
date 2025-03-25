import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // importer pour utiliser *ngFor

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // DECLARATIONS DES VARIABLES UTILISEES
  tableauDesInfoDash : any[] = [
    {image: "1.png", description: "" , nomPoste: "" , experience: "" , date_pub: "" },
    {image: "5.png", description: "" , nomPoste: "" , experience: "" , date_pub: "" },
    {image: "6.png", description: "" , nomPoste: "" , experience: "" , date_pub: "" },
    {image: "8.png", description: "" , nomPoste: "" , experience: "" , date_pub: "" },
    {image: "10.png", description: "" , nomPoste: "" , experience: "" , date_pub: "" }
  ];

  index1 : number = 0;
  index2 : number = 1;
  index3 : number = 2;

  v1 = this.tableauDesInfoDash[this.index1];
  v2 = this.tableauDesInfoDash[this.index2];
  v3 = this.tableauDesInfoDash[this.index3];

  tab : any[] = [this.v1, this.v2, this.v3];

  currentVariable : any; 

  changement : any ;


  constructor() { }
  
  ngOnInit() {
    console.log(this.tab.length)
  }

  previous(){
    this.currentVariable = this.tab.length - 1;
    if(this.index1 == 0){
      this.changement = "atteint-pre";
      return
    }
    this.index1--;
    this.index2--;
    this.index3--;
    this.v1 = this.tableauDesInfoDash[this.index1];
    this.v2 = this.tableauDesInfoDash[this.index2];
    this.v3 = this.tableauDesInfoDash[this.index3];
  }

  next(){
    this.currentVariable = this.tab.length - 1;
    if(this.index3 == this.tableauDesInfoDash.length - 1){
      this.changement = "atteint";
      return
    }
    this.index1++;
    this.index2++;
    this.index3++;
    this.v1 = this.tableauDesInfoDash[this.index1];
    this.v2 = this.tableauDesInfoDash[this.index2];
    this.v3 = this.tableauDesInfoDash[this.index3];
 
  }

}
