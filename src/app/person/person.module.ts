import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonComponent } from './person.component';

@NgModule({
	declarations: [ PersonComponent ],
	imports: [ CommonModule ],
	exports: [ PersonComponent ],
})
export class PersonModule {}
