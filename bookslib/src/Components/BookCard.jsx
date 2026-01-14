import { useEffect, useState } from "react";

function BookCard({ book, onChange }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setLiked(saved.some((b) => b.id === book.id));
  }, [book.id]);

  const toggleLike = () => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = saved.some((b) => b.id === book.id);

    const updated = exists
      ? saved.filter((b) => b.id !== book.id)
      : [...saved, book];

    localStorage.setItem("favorites", JSON.stringify(updated));
    setLiked(!exists);

    if (onChange) onChange();
  };

  return (
    <div className="border rounded-lg p-3 shadow hover:shadow-lg transition relative">
      <button
        onClick={toggleLike}
        className="absolute bottom-2 right-2 text-lg"
      >
        {liked ? "❤️" : "🤍"}
      </button>

      <img
        src={book.cover}
        alt={book.title}
        className="h-64 w-full object-cover mb-2 rounded"
      />

      <h3 className="font-playfair text-sm font-semibold line-clamp-2">
        {book.title}
      </h3>

      <p className="text-xs text-gray-600">{book.author}</p>
    </div>
  );
}

export default BookCard;
