import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreService } from './core.service';
import { DogComponent } from './dog/dog.component';
import { DogModule } from './dog/dog.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PersonComponent } from './person/person.component';
import { PersonModule } from './person/person.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		PersonModule,
		DogModule,
	],
	providers: [ CoreService ],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
