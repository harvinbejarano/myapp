import { CommonModule } from '@angular/common';
import { DogComponent } from './dog.component';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [ DogComponent ],
	imports: [ CommonModule ],
	exports: [ DogComponent ],
})
export class DogModule {}
