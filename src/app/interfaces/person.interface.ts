import { BirthDay } from './birth-day.interface';
import { CreditCard } from './credit-card.interface';

export interface Person {
	name: string;
	surname: string;
	gender: string;
	region: string;
	age: number;
	title: string;
	phone: string;
	birthday: BirthDay;
	email: string;
	password: string;
	credit_card: CreditCard;
	photo: string;
}
