import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import FeaturedProducts from "../components/FeaturedProducts";
import { useProductStore } from "../stores/useProductStore";
import { Link } from "react-router-dom";
import TrandingBarnds from "../components/TrandingBarnds";

const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "/categories/jeans.jpg" },
  { href: "/t-shirts", name: "T-shirts", imageUrl: "/categories/tshirts.jpeg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/categories/shoes.jpg" },
  { href: "/glasses", name: "Glasses", imageUrl: "/categories/glasses.webp" },
  { href: "/jackets", name: "Jackets", imageUrl: "/categories/jackets.jpg" },
  { href: "/suits", name: "Suits", imageUrl: "/categories/suits.jpeg" },
  { href: "/bags", name: "Bags", imageUrl: "/categories/bags.jpeg" },
  { href: "/shirts", name: "Shirts", imageUrl: "/categories/shirts.webp" },
  { href: "/socks", name: "Socks", imageUrl: "/categories/socks.png" },
  { href: "/hoodies", name: "Hoodies", imageUrl: "/categories/hoodies.jpg" },
  { href: "/trousers", name: "Trousers", imageUrl: "/categories/trousers.png" },
  { href: "/shorts", name: "Shorts", imageUrl: "/categories/shorts.webp" },
];

const brands = [
 
  { name: "nike", imageUrl: "/brands/nike.jpg" },
  { name: "tommyHilfigher", imageUrl: "/brands/tommyhilfigher.jpeg" },
  { name: "reebok", imageUrl: "/brands/reebook.png" },
  { name: "ea", imageUrl: "/brands/ea.png" },
  { name: "luisVuiton", imageUrl: "/brands/luisvuiton.webp" }, 
  { name: "adidas", imageUrl: "/brands/adidas.png" },
  { name: "gucci", imageUrl: "/brands/gucci.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, featuredProducts, isLoading } =
    useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-gray-900 overflow-hidden bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-opacity-90">
      {/* Promo banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 text-white py-8 px-4 text-center font-extrabold text-3xl shadow-2xl flex flex-col justify-center items-center space-y-2">
        <p className="animate-bounce">🌟 **BIG SALE!** 🌟</p>
        <p>
          Get 20% off on all eco-friendly products. **Use code ECO20** at
          checkout.
        </p>
        <p className="text-lg font-semibold">
          **Free shipping** on orders over $50!
        </p>
        <p className="italic">Hurry! Offer valid until the end of the month.</p>

        <div className="flex space-x-4 mt-4">
          <Link className="bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
            Shop Now
          </Link>
          <Link
            to="/learn-more"
            className="bg-transparent border-2 border-yellow-400 text-white font-semibold py-2 px-6 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-500 mb-4 drop-shadow-lg">
          Categories
        </h1>
        <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the latest trends in eco-friendly fashion
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="transform transition-transform hover:scale-105 duration-300"
            >
              <CategoryItem
                category={category}
                key={category.name}
                className="shadow-lg rounded-lg overflow-hidden bg-white"
              />
            </div>
          ))}
        </div>

        {!isLoading && featuredProducts.length > 0 && (
          <div className="mt-16">
            <FeaturedProducts featuredProducts={featuredProducts} />
          </div>
        )}

        {!isLoading && featuredProducts.length > 0 && (
          <div className="mt-16">
            <TrandingBarnds brands={brands} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
