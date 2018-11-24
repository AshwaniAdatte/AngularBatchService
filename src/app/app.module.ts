import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { BatchService } from './batch.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BatchComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
