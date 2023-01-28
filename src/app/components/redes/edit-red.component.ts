import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/service/redes.service';

@Component({
  selector: 'app-edit-red',
  templateUrl: './edit-red.component.html',
  styleUrls: ['./edit-red.component.scss']
})
export class EditRedComponent implements OnInit {

  red: Redes = null;

  constructor(private redesService: RedesService, private aRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   const id = this.aRouter.snapshot.params['id'];
   this.redesService.detail(id).subscribe( data => {
    this.red = data;
   }, err => {
    alert ("Error al modificar red")
    this.router.navigate(['']);
   })
  }

  onUpdate(): void{
    const id = this.aRouter.snapshot.params['id'];
    this.redesService.update(id, this.red).subscribe( data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al actualizar")
    this.router.navigate(['']);
    })

  }

}
