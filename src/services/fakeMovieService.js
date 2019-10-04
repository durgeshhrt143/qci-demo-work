const movies = [
  {
    id: 1,
    title: "abc",
    genre: { id: 1, name: "Action" },
    numberInStock: 1,
    dailyRentalRate: 17,
    publiceDate: "10/11/2018"
  },
  {
    id: 2,
    title: "Terminator",
    genre: { id: 1, name: "Action" },
    numberInStock: 2,
    dailyRentalRate: 15,
    publiceDate: "10/11/2018"
  },
  {
    id: 3,
    title: "Terminator",
    genre: { id: 1, name: "Action" },
    numberInStock: 3,
    dailyRentalRate: 15,
    publiceDate: "10/11/2018"
  },
  {
    id: 4,
    title: "Terminator",
    genre: { id: 1, name: "Action" },
    numberInStock: 4,
    dailyRentalRate: 14,
    publiceDate: "10/11/2018"
  },
  {
    id: 5,
    title: "Terminator",
    genre: { id: 1, name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 13,
    publiceDate: "10/11/2018"
  },
  {
    id: 6,
    title: "Terminator",
    genre: { id: 1, name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 12,
    publiceDate: "10/11/2018"
  },
  {
    id: 7,
    title: "Terminator",
    genre: { id: 1, name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 11,
    publiceDate: "10/11/2018"
  },
  {
    id: 8,
    title: "Terminator",
    genre: { id: 2, name: "Comedy" },
    numberInStock: 8,
    dailyRentalRate: 10,
    publiceDate: "10/11/2018"
  },
  {
    id: 9,
    title: "Terminator",
    genre: { id: 2, name: "Comedy" },
    numberInStock: 9,
    dailyRentalRate: 9,
    publiceDate: "10/11/2018"
  },
  {
    id: 10,
    title: "Terminator",
    genre: { id: 2, name: "Comedy" },
    numberInStock: 10,
    dailyRentalRate: 8,
    publiceDate: "10/11/2018"
  },
  {
    id: 11,
    title: "Terminator",
    genre: { id: 2, name: "Comedy" },
    numberInStock: 11,
    dailyRentalRate: 7,
    publiceDate: "10/11/2018"
  },
  {
    id: 12,
    title: "Terminator",
    genre: { id: 2, name: "Comedy" },
    numberInStock: 12,
    dailyRentalRate: 6,
    publiceDate: "10/11/2018"
  },
  {
    id: 13,
    title: "Terminator",
    genre: { id: 2, name: "Comedy" },
    numberInStock: 13,
    dailyRentalRate: 5,
    publiceDate: "10/11/2018"
  },
  {
    id: 14,
    title: "Terminator",
    genre: { id: 3, name: "Thiller" },
    numberInStock: 14,
    dailyRentalRate: 4,
    publiceDate: "10/11/2018"
  },
  {
    id: 15,
    title: "Terminator",
    genre: { id: 3, name: "Thiller" },
    numberInStock: 15,
    dailyRentalRate: 3,
    publiceDate: "10/11/2018"
  },
  {
    id: 16,
    title: "Terminator",
    genre: { id: 3, name: "Thiller" },
    numberInStock: 16,
    dailyRentalRate: 2,
    publiceDate: "1/11/2018"
  },
  {
    id: 17,
    title: "Terminator",
    genre: { id: 3, name: "Thiller" },
    numberInStock: 17,
    dailyRentalRate: 1,
    publiceDate: "20/11/2018"
  }
];
export function getMovies() {
  return movies;
}
export function getMovie(id) {
  return movies.filter(m => m.id === id);
}
