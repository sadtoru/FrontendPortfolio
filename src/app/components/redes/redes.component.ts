import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/service/redes.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.scss']
})
export class RedesComponent implements OnInit {

  red: Redes[] = [];
  isLogged = false;

  constructor(private redesService: RedesService, private tokenService: TokenService) { }


  ngOnInit(): void {
    this.cargarRedes();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarRedes(): void{
    this.redesService.lista().subscribe(
      data => { this.red = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.redesService.delete(id).subscribe(data => {
        this.cargarRedes();
      })
    }
  }


}
