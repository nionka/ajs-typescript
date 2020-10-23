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
      let init = 0;
      return this._items.reduce((value, current) => value + current.price, init);
    }

    sumAllWithDiscount(discount: number): number {
      const sum = this.sumAll();
      return Number((sum - (sum * (discount / 100))).toFixed(1));
    }

    productDelete(id: number): void {
      this._items.forEach((elem, index) => {
        if (elem.id === id) {
          this._items.splice(index, 1);
        }
      })
    }
}
