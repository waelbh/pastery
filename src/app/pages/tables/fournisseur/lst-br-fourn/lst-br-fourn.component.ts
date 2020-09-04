import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../../../../stockServices/fournisseur.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { BonReception } from '../../../../modelsInt/bonReception';

@Component({
  selector: 'ngx-lst-br-fourn',
  templateUrl: './lst-br-fourn.component.html',
  styleUrls: ['./lst-br-fourn.component.scss']
})
export class LstBrFournComponent implements OnInit {
sub:any;
id:number;
Brs: BonReception[]=[]
  constructor(private fourService: FournisseurService,
              private route :ActivatedRoute,
              private _location : Location) { }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe(param=>{
      this.id=param['id'];
    })
    this.getAllBrFromFr();
    
  }

onBack(){
  this._location.back();
}

getAllBrFromFr(){
  this.fourService.getFourBrList(this.id).subscribe(data=>{
    this.Brs=data},
    error=>console.error("list mat failed to load"),
    ()=>console.log(" list matiere loaded")
  );

}

}
