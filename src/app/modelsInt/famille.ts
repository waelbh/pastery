import { MatierePremiere } from './matierePrem';

export interface IFamille{
    id: number;
    name?: string;
    details?:string;
    description?:string;
  
}

export class Famille implements IFamille{
    id: number;
    name?: string;
    details?:string;
    description?:string;

}