"use client";

import React from 'react';

export default function ShopifyVideoPortfolio() {
  const videos = [
    {
      id: "oKpjoGpqEGA",
      title: "tuupos video vertical"
    },
    {
      id: "YJEc8DdqlE4",
      title: "tecno video vertical"
    },
    {
      id: "DETnCBf3Mzk",
      title: "vicca video vertical"
    },
    {
      id: "edpKIU695WU",
      title: "chiletronic video vertical"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
            Nuestro Trabajo <span className="text-violet-600 italic font-serif lowercase font-light">Habla por sí solo</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
            Explora algunos de nuestros últimos desarrollos en Shopify. Tiendas optimizadas para vender desde el primer día.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {videos.map((video) => (
            <div key={video.id} className="w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-zinc-950 bg-zinc-100">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${video.id}?autoplay=0&controls=1&rel=0`}
                title={video.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
