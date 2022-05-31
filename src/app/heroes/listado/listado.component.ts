import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] =['Superman','Spide', 'Batman', 'Goku', 'Thor']
  heroeBorrado: string=""

  borrarHeroe():void{
    console.log('Borrando...');
    //this.heroes.shift() //remueve el primer elemento
    this.heroeBorrado=this.heroes.pop()||"" //borra el ultimo elemento // ||"" sirve para que no de error al ejecutar la primera vez
    //const heroeBorrado=this.heroes.splice(-1,1)
    
  }
}
