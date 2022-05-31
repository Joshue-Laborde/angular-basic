import {Component} from '@angular/core';

@Component({
    selector: 'app-contador', //como va a ser llamado
    //contenido del compomente en html
    template: ` 
        <h1>{{title}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(-base)">-{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(base)">+{{base}}</button>
    `
})
//la logica 
export class ContadorComponent {
    public title: string = 'Contador App';
    numero:number =10;
    base:number = 3;
    acumular(valor:number){
        this.numero +=valor
    }
} 