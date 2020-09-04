import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NbIconLibraries } from '@nebular/theme';
@Component({
  selector: "ngx-addproduct",
  templateUrl: "./addproduct.component.html",
  styleUrls: ["./addproduct.component.scss"],
})
export class AddproductComponent implements OnInit {
  familles: any[] = [
    {
      id: 1,
      name: "Gâteau morceau",
      description: "Gâteau en morceau",
      prodSaison: 200,
      prodSaisonAttein: 140,
      nbrProd: null,
    },
    {
      id: 2,
      name: "Gâteau",
      description: "Gâteau",
      prodSaison: 100,
      prodSaisonAttein: 50,
      nbrProd: null,
    },
    {
      id: 3,
      name: "morceau",
      description: "morceau",
      prodSaison: 150,
      prodSaisonAttein: 60,
      nbrProd: null,
    },
  ];
  matierePremier: any[] = [
    {
      id: 9,
      name: "Maisene",
      unit: "KG",
      quantity: 49.0,
      stockLimit: 10.0,
      purchaseUnitPrice: 5.0,
      depot: null,
      famille: null,
    },
    {
      id: 7,
      name: "sucre poudre",
      unit: "KG",
      quantity: 99.66,
      stockLimit: 50.0,
      purchaseUnitPrice: 1.2,
      depot: null,
      famille: null,
    },
    {
      id: 6,
      name: "farine",
      unit: "KG",
      quantity: 198.33,
      stockLimit: 1.0,
      purchaseUnitPrice: 0.5,
      depot: {
        id: 4,
        name: "Etagere produit sec",
        details: "detiner pour les produit emballe",
        location: "local Production",
        capacity: 300.0,
        actualCharge: 0.0,
      },
      famille: {
        id: 3,
        name: "Farines",
        description: null,
      },
    },
  ];
  units:any[]=[
    { value:"NONE",label:"Aucun"},
    { value:"METER",label:"Par mètre"},
    { value:"KG",label:"En kilogramme"},
    { value:"LITER",label:"En litre"},
    { value:"PIECE",label:"Par piece"},
    { value:"UNIT",label:"Par Unité"}
  ]
  produit: any = { name: "", stocklm: "", SelectedFamily: {}, unit: "" ,unitPrice: ""};
  recette: any = {designation: "", recettePour: "", dateCreation: "", lignesRecettes: [{ consommation: "", matierepremier: {} }] };
  ligneRecetteNumber:number =1;
  ligneRecette: any = { consommation: "", matierepremier: {} };
  evaIcons = [];
  chevronR = "chevron-right";
  chevronL = "chevron-left";
  constructor(iconsLibrary: NbIconLibraries) {
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
    .filter(icon => icon.indexOf('outline') === -1);

    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }

  ngOnInit(): void {}
  addHandler() {
    console.log("Forms", this.produit);
  }
  addNewLineHandler(){
this.recette.lignesRecettes.push(this.ligneRecette);
console.log(this.recette.lignesRecettes)
  }
  removeLineHandler(){
    this.recette.lignesRecettes.splice(-1,1)
    console.log(this.recette.lignesRecettes)
  }

}
