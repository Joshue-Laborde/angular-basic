import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //visibles afuera del modulo, componentes publicos
    exports: [
        ListadoComponent
    ],
    //Van modulos
    imports:[
        CommonModule //cuando se usa ngfor, ngif, etc (directivas)
    ]
})
export class HeroesModule{}