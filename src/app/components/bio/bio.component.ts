import { Component, OnInit } from '@angular/core';
import { BioService } from '../../services/bio.service';
@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor(private bioService:BioService) { 
    this.bioService.getBioInfo().subscribe(bio =>{
      console.log(bio);
    })
  }

  ngOnInit() {
  }

}
