import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: []
})

export class PromiseComponent implements OnInit {

  ngOnInit() {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });

    /* 
    const promesa = new Promise( (resolve, reject) => {
      if( false ) {
        resolve("Hola Mundo");
      }
      else {
        reject("Algo salio mal");
      }
      
    });

    promesa.then( (mensaje) => {
      console.log(mensaje);
    }).catch( error => console.log("Error en mi promesa", error ));

    console.log("Fin del Init");
    */

  }

  getUsuarios() {

    const promesa = new Promise( resolve => {
      fetch("https://reqres.in/api/users")
        .then( resp => resp.json() )
        .then( body => resolve( body.data ) );
    });

    return  promesa;

  };
}
