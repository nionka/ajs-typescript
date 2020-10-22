import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(102, 'The Avengers', 398, 2012, 'USA', 'Avengers Assemble!', 'fantasy', '137 min'));

console.log(cart.items);
console.log(cart.sumAll());
console.log(cart.sumAllWithDiscount(1));
console.log(cart.productDelete(102));
console.log(cart.items);
