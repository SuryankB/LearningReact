import { greatestBooks } from "../data/greatestBooks";
import BookCard from "./BookCard";

function GBA({ showAll }) {
  const booksToShow = showAll
    ? greatestBooks
    : greatestBooks.slice(0, 7);

  return (
    <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
      {booksToShow.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default GBA;
