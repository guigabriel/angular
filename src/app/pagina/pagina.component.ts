import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  public hello = '';
  public inputGet = '';
  public dataAtual = '';

  constructor(
    private apiService: ApiService
  ) { }


  ngOnInit(): void {
    this.getDataAtual();
    this.getHello();
  }

  getDataAtual() {
    this.apiService.getData().pipe(
      catchError((err) => {
        this.dataAtual = 'Falha na comunicação com o servidor.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.dataAtual = response;
      }
    });
  }

  getHello() {
    this.apiService.getHello().pipe(
      catchError((err) => {
        this.hello = 'Falha na comunicação com o servidor.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.hello = response.mensagem;
      }
    });
  }

  resposta() {
    this.apiService.postData(this.inputGet)
    console.log(this.inputGet)
  }

}
