import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{
    //se pone como private para que no se pueda manipular en ningun lado
    private _personajes: Personaje[] = [
        {
          nombre: "Goku",
          poder: 20000
        }
      ];
      
      //con el spred operator ayuda a separar los elementos idependientes del arreglo y eso sirve para que no sea usada en otro lado
      get personajes(): Personaje[]{
          return [...this._personajes]
      }

    agregarPersonaje(personaje: Personaje){
       this._personajes.push(personaje); 
    }
}