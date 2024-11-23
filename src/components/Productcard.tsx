import React from 'react';

const ProductCards = () => {
  const products = [
    { id: 1, title: 'T-Shirts', price: 'Pkr 2000', image: '/Images/plain-red-tshirt_grande.webp' },
    { id: 2, title: 'Kurta-Styles', price: 'Pkr 1500', image: '/Images/shop_all.webp' },
    { id: 3, title: 'Perfumes', price: 'Pkr 1200', image: '/Images/Top-10-perfume-brands-for-male-cover_1024x1024.webp' },
    { id: 4, title: 'Handfree', price: 'Pkr 1000', image: '/Images/bDonix-Apple-Airpods-Pro-Hengxuan-1-430x430.jpg' },
    { id: 5, title: 'Data Cabels', price: 'Pkr 800', image: '/Images/3_edba7c6f-a6f3-47d0-a289-906ff19f797f_575X670_crop_center.webp' },
    { id: 6, title: 'HeadPhones', price: 'Pkr 500', image: '/Images/ce632827adec4e1842caa762f10e643d.webp' },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-yellow-300 ">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md bg-black-400 mt-3">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-80 object-cover "
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-black">{product.price}</p>
              <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-black">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
