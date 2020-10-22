import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumAll(): number {
      let init: number = 0;
      let sum = this._items.reduce((value, current) => value + current.price, init);
      return sum;
    }

    sumAllWithDiscount(discount: number): number {
      const sum: number = this.sumAll();
      const result: number = sum - (sum * (discount / 100));
      return +result.toFixed(1);
    }

    productDelete(id: number): void {
      this._items.forEach((elem, index) => {
        if (elem.id === id) {
          this._items.splice(index, 1);
        }
      })
    }
}
