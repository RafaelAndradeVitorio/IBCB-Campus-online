import { Firestore, provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirestoreModule } from '@angular/fire/firestore';
// import { Database } from '@angular/fire/database';
// import { AngularFireModule} from '@angular/fire/compat'
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { PedidosFormComponent } from './component/Pedido-de-oração/pedidos-form/pedidos-form.component';
import { FormsModule } from '@angular/forms';
import { PedidosDetalhesComponent } from './component/Pedido-de-oração/pedidos-detalhes/pedidos-detalhes.component';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { HomeComponent } from './component/home/home.component';
import { AconselhamentoComponent } from './component/aconselhamento/aconselhamento.component';
import { NossasCelulasComponent } from './component/nossas-celulas/nossas-celulas.component';
import { HeaderComponent } from './component/header/header.component';
import { PosicionamentoComponent } from './component/posicionamento/posicionamento.component';
import { FooterComponent } from './component/footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    PedidosFormComponent,
    PedidosDetalhesComponent,
    HomeComponent,
    AconselhamentoComponent,
    NossasCelulasComponent,
    HeaderComponent,
    PosicionamentoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FirestoreModule,
    MatDialogModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    // Database,
    // AngularFireDatabaseModule,
    // AngularFireModule
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[
   PosicionamentoComponent,
   PedidosFormComponent,
   AconselhamentoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
