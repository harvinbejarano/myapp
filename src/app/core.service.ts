import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CoreService {
	dogApiUrl: string = 'https://dog.ceo/api/breeds/image/random';
	personApiUrl: string = 'https://uinames.com/api/?ext';

	constructor(private http: HttpClient) {}

	getDogData() {
		return this.http.get(this.dogApiUrl);
	}

	getPersonData() {
		return this.http.get(this.personApiUrl);
	}

	getData<T>(url: string): Observable<T> {
		return this.http.get<T>(url);
	}
}
