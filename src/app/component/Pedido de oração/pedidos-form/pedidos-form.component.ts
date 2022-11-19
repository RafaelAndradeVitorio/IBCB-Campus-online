import { Component, OnInit } from '@angular/core';
import {addDoc, Firestore, collection, getDocs, doc, updateDoc,deleteDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-pedidos-form',
  templateUrl: './pedidos-form.component.html',
  styleUrls: ['./pedidos-form.component.scss']
})
export class PedidosFormComponent {

  constructor(private firestore: Firestore ) {
  }

  criarPedido(value:any){
    const dbInstance = collection(this.firestore, 'pedidos');
    addDoc(dbInstance, value).then(()=> {
      alert('enviado')
    })
    .catch((err)=> {
      alert(err.message)
    })
  }


}
