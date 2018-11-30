import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';
import { Observable } from 'rxjs';
import { Person } from './../interfaces/person.interface';

@Component({
	selector: 'app-person',
	templateUrl: './person.component.html',
	styleUrls: [ './person.component.scss' ],
})
export class PersonComponent implements OnInit {
	imageSource: string = '';
	personApiUrl: string = 'https://uinames.com/api/?ext';

	person$: Observable<Person>;

	constructor(private core: CoreService) {
		this.getData();
	}

	onReloadData() {
		this.getData();
	}

	private getData() {
		//forma 1
		/*this.core.getPersonData().subscribe((data: Person) => {
			this.imageSource = data.photo;
		});*/

		//forma 2
		this.core
			.getData<Person>(this.personApiUrl)
			.subscribe((data: Person) => {
				this.imageSource = data.photo;
			});

		this.getDataAsync();
	}

	getDataAsync() {
		this.person$ = this.core.getData<Person>(this.personApiUrl);
	}

	ngOnInit() {}
}
