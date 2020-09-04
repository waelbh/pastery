import { Component, OnInit } from '@angular/core';
import { NbThemeService, NbComponentStatus, NbComponentShape, NbComponentSize } from '@nebular/theme';

@Component({
  selector: 'ngx-order-production',
  templateUrl: './order-production.component.html',
  styleUrls: ['./order-production.component.scss']
})
export class OrderProductionComponent implements OnInit {
  currentTheme: string;
  themeSubscription: any;
  statuses: NbComponentStatus ='info';
  closeStatus:NbComponentStatus ='danger';
  btnStartStatus: NbComponentStatus ='success';
  btnStartShape: NbComponentShape ='round';
  btnStartSize: NbComponentSize = 'small';
  btnEndStatus: NbComponentStatus ='danger';
  btnEndShape: NbComponentShape ='round';
  btnEndSize: NbComponentSize = 'small';
  showHistory:boolean = false;
orderProduction :any[]=[
  {
      "id": 2,
      "created": "2020-06-12T18:38:03.62552",
      "debutProd": false,
      "stockupdate": true,
      "dateLancement": "2020-06-12T18:41:03.570247",
      "prodFinish": false,
      "sortieProd": "2020-06-12T20:54:06.151581",
      "tempsPrd": 133,
      "quantity": 20.00,
      "qtSortieProd": 18.00,
      "SortiePrevisionnel": null,
      "recette": {
          "id": 1,
          "designation": "Creme patissiere Vanille",
          "recettePour": 12,
          "dateCreation": "2020-06-11T08:55:59.41235",
          "recetteCoast": 7.650,
          "produit": {
              "id": 2,
              "name": "Creme Vanille Au Amandes",
              "unit": "UNIT",
              "quantity": 34.00,
              "stockLimit": 12.00,
              "percentageMargin": 36,
              "unitPrice": 1.00,
              "unitPriceValidation": false,
              "prodCoast": 0.638,
              "photo": "https://files.meilleurduchef.com/mdc/photo/recette/gateau-anges-surprise/gateau-anges-surprise-640.jpg"
          }
      },
      "sortiePrevisionnel": null
  },
  {
      "id": 3,
      "created": "2020-06-12T20:28:30.203879",
      "debutProd": true,
      "stockupdate": true,
      "dateLancement": "2020-06-12T20:35:20.221382",
      "prodFinish": false,
      "sortieProd": "2020-06-12T23:24:49.926797",
      "tempsPrd": 169,
      "quantity": 40.00,
      "qtSortieProd": 40.00,
      "SortiePrevisionnel": null,
      "recette": {
          "id": 3,
          "designation": "Mille Feuille classique",
          "recettePour": 24,
          "dateCreation": "2020-06-11T09:15:07.057497",
          "recetteCoast": 13.411,
          "produit": {
              "id": 1,
              "name": "Mille Feuille",
              "unit": "UNIT",
              "quantity": 96.00,
              "stockLimit": 10.00,
              "percentageMargin": 60,
              "unitPrice": 1.40,
              "unitPriceValidation": false,
              "prodCoast": 0.559,
              "photo":  "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2Fa31fa99c-b47d-4833-9546-05ff95d3bba1.2Ejpeg/850x478/quality/90/crop-from/center/mille-feuille-a-la-vanille.jpeg"
          }
      },
      "sortiePrevisionnel": null
  }
]
historyOrderProduction : any[]=[
  {
    "id": 2,
    "created": "2020-06-12T18:38:03.62552",
    "debutProd": true,
    "stockupdate": true,
    "dateLancement": "2020-06-12T18:41:03.570247",
    "prodFinish": true,
    "sortieProd": "2020-06-12T20:54:06.151581",
    "tempsPrd": 133,
    "quantity": 20.00,
    "qtSortieProd": 18.00,
    "SortiePrevisionnel": null,
    "recette": {
        "id": 1,
        "designation": "Creme patissiere Vanille",
        "recettePour": 12,
        "dateCreation": "2020-06-11T08:55:59.41235",
        "recetteCoast": 7.650,
        "produit": {
            "id": 2,
            "name": "Creme Vanille Au Amandes",
            "unit": "UNIT",
            "quantity": 34.00,
            "stockLimit": 12.00,
            "percentageMargin": 36,
            "unitPrice": 1.00,
            "unitPriceValidation": false,
            "prodCoast": 0.638,
            "photo": "https://files.meilleurduchef.com/mdc/photo/recette/gateau-anges-surprise/gateau-anges-surprise-640.jpg"
        }
    },
    "sortiePrevisionnel": null
},
{
    "id": 3,
    "created": "2020-06-12T20:28:30.203879",
    "debutProd": true,
    "stockupdate": true,
    "dateLancement": "2020-06-12T20:35:20.221382",
    "prodFinish": true,
    "sortieProd": "2020-06-12T23:24:49.926797",
    "tempsPrd": 169,
    "quantity": 40.00,
    "qtSortieProd": 40.00,
    "SortiePrevisionnel": null,
    "recette": {
        "id": 3,
        "designation": "Mille Feuille classique",
        "recettePour": 24,
        "dateCreation": "2020-06-11T09:15:07.057497",
        "recetteCoast": 13.411,
        "produit": {
            "id": 1,
            "name": "Mille Feuille",
            "unit": "UNIT",
            "quantity": 96.00,
            "stockLimit": 10.00,
            "percentageMargin": 60,
            "unitPrice": 1.40,
            "unitPriceValidation": false,
            "prodCoast": 0.559,
            "photo":  "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2Fa31fa99c-b47d-4833-9546-05ff95d3bba1.2Ejpeg/850x478/quality/90/crop-from/center/mille-feuille-a-la-vanille.jpeg"
        }
    },
    "sortiePrevisionnel": null
}
]
  constructor(private themeService: NbThemeService) { 
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnInit(): void {
  }
  openHistoryHandler(){
    this.showHistory = true
  }
  closeHistoryHandler(){
    this.showHistory = false
  }
  startOrder(orderP){
    this.orderProduction.map(op => {
      op.id === orderP.id ? op.debutProd = true : null ;
    })
  }
  finishOrder(orderP){
    this.orderProduction.map(op => {
      op.id === orderP.id ? op.prodFinish = true  : null ;
    })
  }

}
