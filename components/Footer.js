import React from "react";

function Footer() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-200 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>New Rooms</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Coupons</p>
        <p>Blogs</p>
        <p>Referrals Accepted</p>
        <p>Site Index</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOSTS</h5>
        <p>Travel Guide</p>
        <p>Presents</p>
        <p>Travel Hosts</p>
        <p>Discounts</p>
        <p>Join Now</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Responsible Disclosures</p>
        <p>Terms & Conditions</p>
        <p>Guests Policies</p>
      </div>
    </div>
  );
}

export default Footer;
