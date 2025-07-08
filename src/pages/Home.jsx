import React, { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

const heroImages = [
  { id: 1, label: "Beach Wedding", url: "https://i.pinimg.com/736x/c3/47/20/c34720d8b5c44d19a2e6906f65fc34c3.jpg" },
  { id: 2, label: "Rustic Barn", url: "https://i.pinimg.com/736x/73/92/03/7392033bfe9d911244985a71b3c42963.jpg" },
  { id: 3, label: "Garden Ceremony", url: "https://i.pinimg.com/736x/8a/43/36/8a43369050b48f5be5f1cf165facda91.jpg" },
  { id: 4, label: "Luxury Hall", url: "https://i.pinimg.com/736x/a5/29/f4/a529f4ee187b5501b4439524c9dba8cf.jpg" },
];


 const topVenues = [
  {
    name: "Crystal Palace",
    location: "Cape Town",
    image: "https://i.pinimg.com/736x/f1/1a/76/f11a7623f97d7748e47da44483a0dd00.jpg",
  },
  {
    name: "Sunset Gardens",
    location: "Harare",
    image: "https://i.pinimg.com/736x/0f/8b/4a/0f8b4a520ed635bf6dd6272509612c98.jpg",
  },
  {
    name: "Golden Manor",
    location: "Lusaka",
    image: "https://i.pinimg.com/736x/14/45/08/144508c18034cbb20643f004c5b5bf7a.jpg",
  },
  {
    name: "Mafia Wedding Venue",
    location: "Johannesburg",
    image: "https://i.pinimg.com/736x/28/c8/f9/28c8f9cba068b6356814e81cf0f653bf.jpg",
  },
];

const inspirationItems = [
  {
    title: "Boho Theme",
    category: "Style",
    image: "https://i.pinimg.com/736x/39/08/ab/3908ab97f3d5e53cb552f57fa4ffdb97.jpg",
  },
  {
    title: "Pastel Palette",
    category: "Color",
    image: "https://i.pinimg.com/736x/d1/0d/89/d10d89a42a1fe99b1a369c744d7782f5.jpg",
  },
  {
    title: "Floral Arch",
    category: "Decor",
    image: "https://i.pinimg.com/736x/3b/77/41/3b774104f9867efb483fa3640be65ffb.jpg",
  },
  {
    title: "Outdoor Dinner",
    category: "Reception",
    image: "https://i.pinimg.com/736x/0d/16/96/0d169664a112af40ea007135240b05d4.jpg",
  },
  {
    title: "DIY Centerpieces",
    category: "Budget",
    image: "https://i.pinimg.com/736x/1e/19/aa/1e19aafef517857ef35346436c7ad8ba.jpg",
  },
  {
    title: "Fairy Lights",
    category: "Ambience",
    image: "https://i.pinimg.com/736x/1a/f6/b1/1af6b16c7ce599b100d50fd61c9e9eb3.jpg",
  },
];

const storyList = [
  {
    title: "Dreamy Garden Wedding",
    category: "Real Wedding",
    date: "July 2025",
    image: "https://i.pinimg.com/736x/ec/93/eb/ec93ebead8884a09372859f0af8a9fb8.jpg",
  },
  {
    title: "Top 5 Bridal Trends",
    category: "Trends",
    date: "June 2025",
    image: "https://i.pinimg.com/736x/b8/a2/75/b8a275ddeb7bf99559f731ab16d96650.jpg",
  },
  {
    title: "Groom Style Guide",
    category: "Fashion",
    date: "May 2025",
    image: "https://i.pinimg.com/736x/ae/0a/51/ae0a5169f6aa3f21897987092331a713.jpg",
  },
];


  const testimonials = [
    {
      name: "Maria Angelica",
      review: "An unforgettable wedding planning experience! Everything was seamless and magical.",
    },
    {
      name: "John & Lindiwe",
      review: "From the venue to the DJ — Wedding App handled it all beautifully!",
    },
    {
      name: "Chipo & Tawanda",
      review: "Our dream wedding came to life thanks to the inspiration and planning tools here!",
    },
  ];

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b bg-white relative">
        <div className="flex items-center space-x-2">
          <img src="public/images/weddinglogo.png" alt="Wedding Bells Logo" className="w-20 h-20" />

          <div className="text-xl font-bold text-pink-600">Wedding Bells</div>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li>Venues</li>
          <li>Services</li>
          <li>Inspiration</li>
          <li>About</li>
          <li>Help</li>
        </ul>

        

        {/* Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-pink-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>

        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white border-t py-4 px-6 z-10 md:hidden space-y-2">
            <li>Venues</li>
            <li>Services</li>
            <li>Inspiration</li>
            <li>About</li>
            <li>Help</li>
            <li>
              <button className="text-pink-600">Sign In</button>
            </li>
          </ul>
        )}
      </nav>

      {/* Hero */}
      <section className="text-center py-12 px-4 bg-pink-50">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Plan Your <span className="text-pink-600">Dream Wedding</span> With Us
        </h1>
        <p className="max-w-xl mx-auto text-gray-600 mb-6">
          From venues to vendors, everything you need to create your perfect day.
        </p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-full">
          Start Planning
        </button>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
{heroImages.map((img) => (
  <div
    key={img.id}
    className="h-40 rounded-lg bg-cover bg-center flex items-center justify-center text-white font-semibold transition duration-300 transform hover:scale-105 hover:shadow-lg"
    style={{ backgroundImage: `url(${img.url})` }}
  >
    {img.label}
  </div>
))}

      </div>
    </section>

      {/* Top Venues */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">Top Venues</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
     {topVenues.map((venue, i) => (
  <div
    key={i}
    className="min-w-[200px] rounded-lg h-56 flex-shrink-0 p-4 bg-white shadow hover:shadow-lg transition duration-300"
  >
    <div
      className="h-32 rounded bg-cover bg-center mb-2 transition-transform duration-300 transform hover:scale-105"
      style={{ backgroundImage: `url(${venue.image})` }}
    ></div>
    <p className="font-semibold text-sm">{venue.name}</p>
    <p className="text-xs text-pink-600">{venue.location}</p>
  </div>
))}

        </div>
      </section>

      {/* Inspiration Library */}
      <section className="py-12 px-6 bg-pink-50">
        <h2 className="text-2xl font-bold mb-6">Inspiration Library</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
       {inspirationItems.map((item, i) => (
  <div
    key={i}
    className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
  >
    <div
      className="h-32 rounded bg-cover bg-center mb-4 transition-transform duration-300 transform hover:scale-105"
      style={{ backgroundImage: `url(${item.image})` }}
    ></div>
    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
    <p className="text-sm text-pink-600">{item.category}</p>
  </div>
))}

        </div>
      </section>

      {/* Wedding Stories */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Wedding Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow">
        <div
        className="h-40 rounded mb-4 bg-cover bg-center transition-transform duration-300 transform hover:scale-105"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/bd/42/06/bd42066d64b61d3226ebf831c028f13a.jpg')`,
        }}
      ></div>
            <h3 className="font-bold text-lg mb-2">Fairytale Wedding in Italy</h3>
            <p className="text-sm text-pink-600">Destination - July 2025 - 4 min read</p>
          </div>
          <div className="space-y-4">
          <section className="py-12 px-6 bg-pink-50">
  <h2 className="text-2xl font-bold mb-6">Latest Stories</h2>
  <div className="grid md:grid-cols-2 gap-6">
    {/* Main Story (big card) */}
    <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      <div
        className="bg-cover bg-center h-40 rounded mb-4 transition-transform transform hover:scale-105 duration-300"
        style={{ backgroundImage: `url(${storyList[0].image})` }}
      ></div>
      <h3 className="font-bold text-lg mb-2">{storyList[0].title}</h3>
      <p className="text-sm text-gray-500">{`${storyList[0].category} - ${storyList[0].date}`}</p>
    </div>

    {/* Smaller stories (vertical list) */}
    <div className="space-y-4">
      {storyList.slice(1).map((story, i) => (
        <div key={i} className="flex items-center space-x-4 hover:shadow-md p-2 rounded transition duration-300 bg-white">
          <div
            className="w-16 h-16 bg-cover bg-center rounded transition-transform transform hover:scale-105"
            style={{ backgroundImage: `url(${story.image})` }}
          ></div>
          <div>
            <h4 className="font-semibold">{story.title}</h4>
            <p className="text-xs text-gray-500">{`${story.category} - ${story.date}`}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  <button className="mt-6 border px-4 py-2 rounded-full">Read more articles</button>
</section>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">What Our Couples Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((person, i) => (
            <div key={i} className="bg-pink-100 rounded-lg p-4">
              <h3 className="font-semibold">{person.name}</h3>
              <p className="text-sm text-gray-700 mt-2">{person.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-pink-600 text-white py-12 px-6 text-center">
        <h2 className="text-xl font-bold mb-2">
          Get Wedding Tips & Offers Straight to Your Inbox
        </h2>
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded text-pink-600 w-full sm:w-2/3"
          />
          <button className="bg-pink-800 hover:bg-pink-900 px-6 py-2 rounded w-full sm:w-auto transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-sm py-12 px-6">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <div className="text-pink-600 font-bold text-lg mb-2">Wedding Bells</div>
            <p>Follow us on</p>
            <div className="flex space-x-2 mt-2">
              <div className="w-6 h-6 bg-pink-700 rounded-full"></div>
              <div className="w-6 h-6 bg-pink-700 rounded-full"></div>
              <div className="w-6 h-6 bg-pink-700 rounded-full"></div>
            </div>
          </div>
          {[...Array(3)].map((_, i) => (
            <ul key={i} className="space-y-2">
              <li className="text-pink-600 font-semibold">Section {i + 1}</li>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600">
          © 2025 Wedding App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

