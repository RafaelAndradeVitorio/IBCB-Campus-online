import { getDatabase, provideDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import {addDoc, Firestore, collection, getDocs, doc, updateDoc,deleteDoc} from '@angular/fire/firestore';
import { databaseInstanceFactory } from '@angular/fire/database/database.module';
import { Database, ref, set } from '@angular/fire/database';

@Component({
  selector: 'app-pedidos-form',
  templateUrl: './pedidos-form.component.html',
  styleUrls: ['./pedidos-form.component.scss', '../../../cores.scss', '../../../app.component.scss']
})
export class PedidosFormComponent {
   myDate = new Date(Date.now()).toDateString();
   banco = "pedidos";

  constructor(private firestore: Firestore, private database: Database) {
  }
  //  Usando firestore

  // criarPedido(value:any){
  //   const dbInstance = collection(this.firestore, `pedidos`);
  //   addDoc(dbInstance, value).then(()=> {
  //     alert('enviado')
  //   })
  //   .catch((err)=> {
  //     alert(err.message)
  //   })
  //   console.log(this.myDate);
  // }

   //  Usando realdatabase

  criar(value : any){

    // const database = getDatabase();
    set(ref(this.database, 'pedidos/' + value.name), {
      nome: value.name,
      categoria: value.categoria,
      pedido : value.pedido,
      data : value.data,
      banco : value.banco,
      numero : value.numero
    });
  }


}
