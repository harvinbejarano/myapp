import { Component, OnInit } from '@angular/core';
import { CoreService } from './../core.service';
import { Dog } from '../interfaces/dog.interface';

@Component({
	selector: 'app-dog',
	templateUrl: './dog.component.html',
	styleUrls: [ './dog.component.scss' ],
})
export class DogComponent implements OnInit {
	imageSource: string = '';
	dogApiUrl: string = 'https://dog.ceo/api/breeds/image/random';

	constructor(private core: CoreService) {
		this.getData();
	}

	onReloadImage() {
		this.getData();
	}

	private getData() {
		//forma 1

		/*this.core.getDogData().subscribe((data: Dog) => {
			this.imageSource = data.message;
		});*/

		//forma 2
		this.core
			.getData<Dog>(this.dogApiUrl)
			.subscribe((data: Dog) => {
				this.imageSource = data.message;
			});
	}

	ngOnInit() {}
}
