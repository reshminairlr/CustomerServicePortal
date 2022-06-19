import { Component, OnInit } from '@angular/core';
import { CustomerviewServiceService } from '../customerview-service.service';
import { CustomerModel } from './customer.model';


@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})




export class CustomerviewComponent implements OnInit {

CustomerDetails=CustomerModel[];
    constructor(private custmrviewService:CustomerviewServiceService) { }
// customerviewArray=[]

  ngOnInit(): void {
    this.custmrviewService.getCustomerview().subscribe((data)=>{
      this.CustomerDetails=JSON.parse(JSON.stringify(data));
  })





  }

}
