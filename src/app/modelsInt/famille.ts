import { MatierePremiere } from './matierePrem';

export interface IFamille{
    id: number;
    name?: string;
    details?:string;
    description?:string;
  
}

export class Famille{
    id?: number;
    name?: string;
    details?:string;
    description?:string;
    imageUrl? : string;
    nbrProd?:number;

}