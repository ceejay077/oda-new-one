"use client";
import React, { useState } from "react";

function ServiceInnerHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    serviceRequired: "",
    facilityType: "",
    frequencyOfService: "",
    additionalDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image Section */}
      <div className="absolute inset-0">
        <img
          src="/pages/services-inner/services-inner-hero.png"
          alt="Industrial Cleaning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen grid md:grid-cols-2 items-center p-4 md:p-8 gap-8 ">
        {/* Left Column - Text */}
        <div className="w-[700px]">
          <div className="text-white space-y-4 pl-[200px]">
            <h1 className="text-4xl md:text-5xl font-normal mb-4">
              Industrial Cleaning Excellence
            </h1>
            <p className="text-lg opacity-90">
              Expert industrial and commercial cleaning services tailored to
              your facilitys needs. Professional, reliable, and thorough
              cleaning solutions.
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl w-[720px]">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Request a Quote
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <select
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className="w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Service Required</option>
                  <option value="general">General Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="specialized">Specialized Cleaning</option>
                </select>
              </div>
              <div>
                <select
                  name="facilityType"
                  value={formData.facilityType}
                  onChange={handleChange}
                  className="w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Facility Type</option>
                  <option value="industrial">Industrial</option>
                  <option value="commercial">Commercial</option>
                  <option value="warehouse">Warehouse</option>
                </select>
              </div>
            </div>

            <div>
              <select
                name="frequencyOfService"
                value={formData.frequencyOfService}
                onChange={handleChange}
                className="w-[624px] px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Frequency of Service</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
              </select>
            </div>

            <div>
              <textarea
                name="additionalDetails"
                placeholder="Additional Details"
                value={formData.additionalDetails}
                onChange={handleChange}
                rows={4}
                className="w-[624px] px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ServiceInnerHero;
