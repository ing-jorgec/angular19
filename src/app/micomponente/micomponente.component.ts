import { Component } from "@angular/core";

@Component({

    selector: 'mi-componente',
    template: `
        <h2>{{nombre_componente}}</h2>
        <p>{{listado_componente}}`
    })

export class MiComponenteComponent{
    public nombre_componente = 'Mi componente inline';
    public listado_componente = 'angular,Ts,net core';
} 