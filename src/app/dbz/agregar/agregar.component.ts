import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

  @Input() nuevo:Personaje = {
    nombre:"",
    poder: 0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  // @Input() personajes: Personaje[] = []

  constructor(private dbzService: DbzService){}

  agregar(){
    //event.preventDefault();
    if(this.nuevo.nombre.trim().length ===0) return
    //console.log(this.nuevo)
    //this.personajes.push(this.nuevo)
    
    //this.onNuevoPersonaje.emit(this.nuevo) //debe de ser de tipo personaje

    this.dbzService.agregarPersonaje(this.nuevo);

    //limpiar los valores
    this.nuevo = {
      nombre: "",
      poder:0
    }
    //console.log(this.personajes)
  }

}
