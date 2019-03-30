import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public teste():void{
    alert('Bem-Vindo ao APP');
  }
  ionViewDidLoad(){
    this.teste();
  }
}

