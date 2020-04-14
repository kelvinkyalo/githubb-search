import { Component, OnInit } from '@angular/core';
import { BioService } from '../../services/bio.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  bio:any[];

  constructor(private bioService:BioService) { 
    this.bioService.getBioInfo().subscribe(bio =>{
      console.log(bio);
      this.bio = bio;
    });
  }

  ngOnInit() {
  }
}
