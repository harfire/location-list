import React from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Cities from 'components/Cities';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Cities />
      <Footer />
    </div>
  );
}
