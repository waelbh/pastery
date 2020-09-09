import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../../modelsInt/Produit';
import { BonCommandeService } from '../../../../venteSrvices/bon-commande.service';
import { BonCommande, LigneBonCommande } from '../../../../modelsInt/fact-clt-bc';
import { Router } from '@angular/router';
import { ProduitService } from '../../../../venteSrvices/produit.service';
import { LigneBonReception } from '../../../../modelsInt/ligneBonReception';

@Component({
  selector: 'ngx-ajout-bc',
  templateUrl: './ajout-bc.component.html',
  styleUrls: ['./ajout-bc.component.scss']
})
export class AjoutBcComponent implements OnInit {
prods: Produit[]=[]
bc: BonCommande={}
prd:Produit={}
prId:number=0
lc: LigneBonCommande={}
lstLign: LigneBonCommande[]=[]



  constructor(private route: Router,
              private prodServivce: ProduitService) { }

  ngOnInit(): void {
    this.retreiveAllProduit();
  }


  onSubmit(){
    console.log("submitted")
  }

  retreiveAllProduit(){
    this.prodServivce.retreiveAllProduit().subscribe(data=>{
      this.prods=data;
      console.log("la liste de produits: ", this.prods)
    })
  }

  
 
}
