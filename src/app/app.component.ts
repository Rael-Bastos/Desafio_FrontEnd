import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ativos } from './Ativos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  result: any;
  ativos: Ativos[] = [];
  urlToJson = 'assets/stocks.json';

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Ativos[]>(this.urlToJson).subscribe(response => {
      this.ativos = response;
    });
  }
  title = 'Desafio-FrontEnd-Matheus';
}
