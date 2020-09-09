import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../../modelsInt/Produit';
import { BonCommandeService } from '../../../../venteSrvices/bon-commande.service';
import { BonCommande, LigneBonCommande } from '../../../../modelsInt/fact-clt-bc';
import { Router } from '@angular/router';
import { ProduitService } from '../../../../venteSrvices/produit.service';
import { LigneBonReception } from '../../../../modelsInt/ligneBonReception';
import { NbIconLibraries } from '@nebular/theme';

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

evaIcons = [];
  chevronR = "chevron-right";
  chevronL = "chevron-left";



  constructor(private route: Router,
              private prodServivce: ProduitService,
              iconsLibrary: NbIconLibraries) { 
                this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
    .filter(icon => icon.indexOf('outline') === -1);

    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
              }

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


  removeLineHandler(){
    console.log("chveron de suppression cliquer")
  }

  addNewLineHandler(){
    console.log("ajout de ligne activer")
  }

  
 
}
