import { Item } from './item.interface';

export interface OrderDetail {
	item: Item;
	quantity: number;
	isChecked: boolean;
	isPaid: boolean;
	selectedNumber: number;

}