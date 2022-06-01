import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';


//para cualquier componente, se debe importar y declararlo aqui abajo
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  //aqui va los modulos
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  //servicios especificos de un modulo
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
