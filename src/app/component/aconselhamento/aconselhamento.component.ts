import { Component, OnInit } from '@angular/core';
import {addDoc, Firestore, collection, getDocs, doc, updateDoc,deleteDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-aconselhamento',
  templateUrl: './aconselhamento.component.html',
  styleUrls: ['./aconselhamento.component.scss', '../../app.component.scss']
})
export class AconselhamentoComponent implements OnInit {
  myDate = new Date(Date.now()).toDateString();
  banco = "aconselhamento"

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
  }
  PedirAconselhamento(value:any){
    const dbInstance = collection(this.firestore, `aconselhamento`);
    addDoc(dbInstance, value).then(()=> {
      alert('enviado')
    })
    .catch((err)=> {
      alert(err.message)
    })
    console.log(this.myDate);
  }

}
