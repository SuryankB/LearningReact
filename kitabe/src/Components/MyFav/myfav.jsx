import { useEffect, useState } from "react";
import BookCard from "../BookCard";

function MyFav() {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = () => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  if (favorites.length === 0) {
    return (
      <p className="text-center mt-20 text-gray-500">
        No favorite books yet 
      </p>
    );
  }

  return (
    <div className="px-10 mt-10">
      <h2 className="text-3xl font-playfair mb-6 text-center">
        My Favorite Books
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {favorites.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onChange={loadFavorites} 
          />
        ))}
      </div>
    </div>
  );
}

export default MyFav;
