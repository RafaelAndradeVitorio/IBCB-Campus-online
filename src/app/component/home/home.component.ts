import { PedidosFormComponent } from './../Pedido-de-oração/pedidos-form/pedidos-form.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialogRef: MatDialog) { }

  ngOnInit(): void {
  }
  abrirPedido(){
    this.dialogRef.open(PedidosFormComponent, {width: '500px', height: '450px'})
    console.log("Teste")
  }
}
