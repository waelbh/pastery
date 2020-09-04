import { Famille } from './famille';

export class Produit{
    id?: number;
    name?:string;
    unit?:string;
    quantity?:number;
    stockLimit?:number;
    unitPrice?:number;
    percentageMargin?:number;
    unitPriceValidation?:boolean;
    prodCoast?:number;
    famille? :Famille;
    photo?: any;





    // "id": 4,
    // "name": "Gateau Anniversaire",
    // "unit": "UNIT",
    // "quantity": null,
    // "stockLimit": 10.00,
    // "percentageMargin": 75,
    // "unitPrice": 35.00,
    // "unitPriceValidation": false,
    // "prodCoast": 8.460,
    // "photo": null,
    // "famille": null
}