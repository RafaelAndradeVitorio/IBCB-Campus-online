import { getDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import {addDoc, Firestore, collection, getDocs, doc, updateDoc,deleteDoc} from '@angular/fire/firestore';
import { databaseInstanceFactory } from '@angular/fire/database/database.module';

@Component({
  selector: 'app-pedidos-form',
  templateUrl: './pedidos-form.component.html',
  styleUrls: ['./pedidos-form.component.scss', '../../../cores.scss', '../../../app.component.scss']
})
export class PedidosFormComponent {
   myDate = new Date(Date.now()).toDateString()

  constructor(private firestore: Firestore ) {
  }

  criarPedido(value:any){
    const dbInstance = collection(this.firestore, `pedidos`);
    addDoc(dbInstance, value).then(()=> {
      alert('enviado')
    })
    .catch((err)=> {
      alert(err.message)
    })
    console.log(this.myDate);
  }


}
