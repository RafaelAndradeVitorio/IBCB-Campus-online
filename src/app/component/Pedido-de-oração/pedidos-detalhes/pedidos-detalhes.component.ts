import { Component, OnInit } from '@angular/core';
import {addDoc, Firestore, collection, getDocs, doc, updateDoc,deleteDoc} from '@angular/fire/firestore'

@Component({
  selector: 'app-pedidos-detalhes',
  templateUrl: './pedidos-detalhes.component.html',
  styleUrls: ['./pedidos-detalhes.component.scss']
})
export class PedidosDetalhesComponent implements OnInit {


  ngOnInit(): void {
  }

}
