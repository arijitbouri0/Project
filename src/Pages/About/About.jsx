import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <header className="bg-blue-800 text-white p-4">
        <h1 className="text-3xl font-bold text-center">About Us</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-teal-600">Our Mission</h2>
            <p className="text-lg mb-4">
              Our mission is to empower businesses with actionable insights to make informed decisions and drive growth.
            </p>
            <p className="text-lg">
              We strive to provide the most intuitive and powerful tools for tracking performance and optimizing strategies.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">Features</h2>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li>Revenue tracking over time with detailed graphs.</li>
              <li>Department-wise revenue distribution.</li>
              <li>Customizable filters for time ranges.</li>
            </ul>
            <p className="text-lg">
              Explore these features to get a comprehensive view of your business performance and make data-driven decisions.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Get in Touch</h2>
            <p className="text-lg mb-4">
              If you have any questions or feedback, please feel free to reach out to us.
            </p>
            <p className="text-lg">
              You can <a href="mailto:arijitbouri0@gmail.com" className="text-blue-600 hover:underline">contact us via email</a>, and we will be happy to assist you.
            </p>
          </section>
        </div>
      </main>
      <footer className="bg-blue-800 text-white p-4 text-center">
        &copy; 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
