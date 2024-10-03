import React from "react";

import "./MarketPage.scss";

const MarketPage = () => {
  const products = [
    {
      id: 1,
      name: "Pzikov krem",
      price: "$29.99",
      image:
        "https://img.freepik.com/premium-photo/cosmetic-products-presentation-mockup-showcase-ai-image_1209683-16885.jpg?w=740",
    },
    {
      id: 2,
      name: "Iphone 16",
      price: "$790.99",
      image:
        "https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?w=740",
    },
    {
      id: 3,
      name: "Shirts",
      price: "$49.99",
      image:
        "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448752.jpg?t=st=1726225542~exp=1726229142~hmac=6d30e50d213175957c529cab3af3417325a88a7021c3ef575c88fa0e5124b74c&w=360",
    },
    {
      id: 4,
      name: "Laptop Asus",
      price: "$590.00",
      image:
        "https://img.freepik.com/free-photo/still-life-device-table_23-2150994370.jpg?t=st=1726225438~exp=1726229038~hmac=7f2b389ef7ae5f8b2def4e7e29859b6a4b91d44e72fe7e4422834991f7231954&w=360",
    },
    {
      id: 5,
      name: "Laptop Lenovo",
      price: "$390.90",
      image:
        "https://img.freepik.com/premium-photo/sleek-macbook-air-with-vibrant-green-wallpaper_934801-4706.jpg?w=900",
    },
    {
      id: 6,
      name: "Black Shirt",
      price: "$21.99",
      image:
        "https://img.freepik.com/free-photo/clean-blank-shirt-hanger_23-2149347514.jpg?t=st=1726225591~exp=1726229191~hmac=dc9eb6cf72b0a938585a462d71a802adefc09343dee9fcbef5844a9cc66f489b&w=360",
    },
    {
      id: 7,
      name: "yntir sarochkeq",
      price: "$19.99",
      image:
        "https://img.freepik.com/free-photo/close-up-flannel-shirt-detail_23-2149575381.jpg?t=st=1726225614~exp=1726229214~hmac=442e6b90e9564825a14d73afccbac1ef8976b219f91b0c84e76da4c65241a62f&w=360",
    },
    {
      id: 7,
      name: "yntir sarochkeq",
      price: "SALE  $9.99",
      image:
        "https://img.freepik.com/free-photo/close-up-flannel-shirt-detail_23-2149575381.jpg?t=st=1726225614~exp=1726229214~hmac=442e6b90e9564825a14d73afccbac1ef8976b219f91b0c84e76da4c65241a62f&w=360",
    },
  ];

  return (
    <div className="market-container">
      <nav>
        <ul>
          <li>market</li>
          <li>product</li>
          <li>About</li>
        </ul>
      </nav>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">Buy product </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPage;
