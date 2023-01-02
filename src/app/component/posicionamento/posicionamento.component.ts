import { Component, OnInit } from '@angular/core';
import {addDoc, Firestore, collection, getDocs, doc, updateDoc,deleteDoc} from '@angular/fire/firestore';
import { reload } from '@firebase/auth';

@Component({
  selector: 'app-posicionamento',
  templateUrl: './posicionamento.component.html',
  styleUrls: ['./posicionamento.component.scss','../../app.component.scss']
})
export class PosicionamentoComponent implements OnInit {

  myDate = new Date(Date.now()).toDateString();
  banco = "posicionamentos";

  constructor(private firestore: Firestore ) {
  }
  ngOnInit(): void {
  }
  criarPosicionamento(value:any){
    const dbInstance = collection(this.firestore, `posicionamentos`);
    addDoc(dbInstance, value).then(()=> {
      alert('enviado')

    })
    .catch((err)=> {
      alert(err.message)
    })
    console.log(this.myDate);
  }


}
