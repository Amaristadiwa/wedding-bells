import React, { useState } from 'react';

const vendorData = {
  Photographer: [
    { name: 'Shutter Bliss', image: 'https://i.pinimg.com/736x/d8/40/4b/d8404b3915a91af62962337ceba1ba20.jpg' },
    { name: 'Lens Craft', image: 'https://i.pinimg.com/736x/21/be/56/21be568c8cd14b7a58f5f3f4bc1d96e6.jpg' },
  ],
  Venue: [
    { name: 'Golden Garden Hall', image: 'https://i.pinimg.com/736x/4a/c3/02/4ac302d0886cae60bf901b5721f1d54b.jpg' },
    { name: 'Rosewood Chateau', image: 'https://i.pinimg.com/736x/8d/b3/9b/8db39bfa1cb43366de9c15210a4077d2.jpg' },
  ],
  Florist: [
    { name: 'Bloom & Bliss', image: 'https://i.pinimg.com/736x/16/7d/6a/167d6a64f9e14bac9f032f14468d4f4d.jpg' },
    { name: 'Petal Pros', image: 'https://i.pinimg.com/736x/7c/7e/90/7c7e9011d577c4ec5bd6951aa0052549.jpg' },
  ],
};

export default function ChooseVendors() {
  const [activeTab, setActiveTab] = useState('Photographer');
  const [selectedVendors, setSelectedVendors] = useState({});

  const handleSelect = (category, vendor) => {
    setSelectedVendors((prev) => ({
      ...prev,
      [category]: vendor,
    }));
  };

  const categories = Object.keys(vendorData);

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">Choose Your Vendors</h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === category
                ? 'bg-pink-600 text-white'
                : 'bg-white text-pink-600 border border-pink-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Vendors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {vendorData[activeTab].map((vendor, index) => {
          const isSelected = selectedVendors[activeTab]?.name === vendor.name;
          return (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl border-4 ${
                isSelected ? 'border-pink-600' : 'border-transparent'
              }`}
            >
              <img src={vendor.image} alt={vendor.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-pink-600">{vendor.name}</h3>
                <p className="text-sm text-gray-500">{activeTab}</p>
                <button
                  onClick={() => handleSelect(activeTab, vendor)}
                  className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 w-full"
                >
                  {isSelected ? 'Selected' : 'Select'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-12 bg-white p-6 rounded-2xl max-w-xl mx-auto shadow">
        <h3 className="text-xl font-bold text-pink-700 mb-4">Your Selected Vendors</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          {categories.map((category) => (
            <li key={category}>
              <strong>{category}:</strong>{' '}
              {selectedVendors[category]?.name || 'None selected'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
