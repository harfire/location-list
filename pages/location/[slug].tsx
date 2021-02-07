import React from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Places from 'components/Places';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Location List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Places />
      <Footer />
    </div>
  );
}
