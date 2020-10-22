import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

describe('check class Cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(102, 'The Avengers', 398, 2012, 'USA', 'Avengers Assemble!', 'fantasy', '137 min'));

  test('check method sumAll', () => {
    expect(cart.sumAll()).toBe(3298);
  })

  test('check method sumAllWithDiscount', () => {
    expect(cart.sumAllWithDiscount(10)).toBe(2968.2);
  })

  test('check method productDelete', () => {
    cart.productDelete(102);
    const expected = [
      {id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225},
      {id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900}
    ];

    expect(cart.items).toEqual(expected);
  })
})
