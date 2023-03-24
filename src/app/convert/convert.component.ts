import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent  {

alldata:any=[]
fcurrency='INR'
scurrency='INR'

output:string='1'



changecurr(c1:string){
  this.fcurrency=c1

}
tocurr(c2:string){
  this.scurrency=c2
}



constructor(private api:ApiService){}
  convert(){
    this.api.getDetails(this.fcurrency).subscribe((data)=>{
      this.alldata=JSON.stringify(data)
      console.log(this.alldata);
      
      this.alldata=JSON.parse(this.alldata)


      if(this.scurrency=='USD'){
        this.output=this.alldata.rates.USD
      }
      if(this.scurrency=='INR'){
        this.output=this.alldata.rates.INR
      }
      if(this.scurrency=='EUR'){
        this.output=this.alldata.rates.EUR
      }
      if(this.scurrency=='AED'){
        this.output=this.alldata.rates.AED
      }


    })
  }


}
