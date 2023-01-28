import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/service/redes.service';

@Component({
  selector: 'app-nueva-red',
  templateUrl: './nueva-red.component.html',
  styleUrls: ['./nueva-red.component.scss']
})
export class NuevaRedComponent implements OnInit {
  nombre: string = '';
  url: string = '';
  iconRed: string = '';

  constructor(private redesService: RedesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const red = new Redes(this.nombre, this.url, this.iconRed);
    this.redesService.save(red).subscribe( data => {
      alert ("Red añadida")
      this.router.navigate([""]);
    })
  }

}
