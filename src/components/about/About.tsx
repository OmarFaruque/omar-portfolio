import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-600 mb-8">About Me</h2>

      <div className="max-w-3xl mx-auto">
        <div className="rounded-3xl p-1 bg-slate-100 dark:bg-gray-800">
          <div className="bg-slate-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-md dark:shadow-none border border-transparent dark:border-gray-800">
            <div className="text-center text-slate-700 dark:text-inherit space-y-4 leading-relaxed">
            <p className="text-lg font-semibold text-slate-900 dark:text-inherit">Laravel, Next.js, Stripe & PayPal Expert — 10+ years of commercial experience and a 100% success record.</p>

            <p>
              I build and rescue web applications: from Laravel backends and REST APIs to modern Next.js frontends. I specialize in payments (Stripe, PayPal, Razorpay, Paddle, Square), authentication (Laravel Sanctum, NextAuth), SaaS features, performance tuning, and deep debugging.
            </p>

            <p>
              I also have solid experience developing WordPress plugins, PrestaShop modules, and custom PHP systems. Whether it’s integrating complex payment flows, optimizing a slow app, or shipping new eCommerce features, I deliver clean, well-tested code and lifetime bug support.
            </p>

            <p className="font-medium">
              Fast response (often &lt;15 min), clear communication, and a focus on business outcomes. Message me now — let’s launch or rescue your project today. 🚀
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
