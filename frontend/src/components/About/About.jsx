import React, { useState } from 'react';

export function About() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [sellerEmail, setSellerEmail] = useState('');

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are a team of passionate individuals dedicated to providing high-quality products to our customers. Our
              mission is to make every purchase a delightful experience.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Customer Testimonials</h2>
          </div>
          <div className="mx-auto max-w-3xl grid gap-4 lg:grid-cols-2 lg:gap-8 mt-[20px]">
            <div className="space-y-2 mr-[20px]">
              <blockquote className="text-lg leading-8 text-gray-500 before-quotes/''">
                The products are fantastic, and the customer service is exceptional. I highly recommend Acme Inc to
                everyone.
                <footer className="text-gray-500 dark:text-gray-400">— Emily Parker</footer>
              </blockquote>
            </div>
            <div className="space-y-2">
              <blockquote className="text-lg leading-8 text-gray-500 before-quotes/''">
                I love the variety of products available at Acme Inc. The quality is top-notch, and the prices are great.
                I'll definitely be shopping here again.
                <footer className="text-gray-500 dark:text-gray-400">— Michael Johnson</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
