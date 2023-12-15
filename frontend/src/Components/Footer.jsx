import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul>
              <li>About Us</li>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Sitemap</li>
              <li>Help & FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Online Ordering</h3>
            <ul>
              <li>Shipping</li>
              <li>Billing</li>
              <li>Returns & Exchanges</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">My Account</h3>
            <ul>
              <li>Order Status</li>
              <li>Favourites</li>
              <li>My Account</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
