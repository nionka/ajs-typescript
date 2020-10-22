import Movie from '../domain/Movie';

test('check class Movie', () => {
  const movie = new Movie(102, 'The Avengers', 399, 2012, 'USA', 'Avengers Assemble!', 'fantasy', '137 min');
  const expected = {
    id: 102,
    name: 'The Avengers',
    price: 399,
    year: 2012,
    country: 'USA',
    tagline: 'Avengers Assemble!',
    genre: 'fantasy',
    time: '137 min'
  }

  expect(movie).toEqual(expected);
})
