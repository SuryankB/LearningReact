import { useEffect, useState } from "react";
import GBA from "../GBA";
import Hero from "../Hero";


function Home() {
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  const morebooks = () => {
    setShowAll((prev) => !prev);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="px-10 mt-10 font-inter">
      <Hero />

      <section>
        <h2 className="flex justify-center text-3xl font-playfair mb-6">
          Some Great Fiction Works
        </h2>

        <GBA showAll={showAll} />

        <div className="flex justify-end font-jakarta">
          <button
            onClick={morebooks}
            className="bg-black text-white px-4 py-2 rounded-full mt-4"
          >
            {showAll ? "Show Less" : "More"}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
