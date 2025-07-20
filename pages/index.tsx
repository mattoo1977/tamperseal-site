import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Tamper-Proof. Power-Free. Patent-Pending.</h1>
      <p>Introducing a new class of smart, passive security seals that record tampering without batteries, wires, or bulky tech.</p>
      <h2>What Makes It Different?</h2>
      <ul>
        <li>No power required</li>
        <li>Works with any NFC reader or scanner</li>
        <li>Optional QR code for scan-based access logging</li>
        <li>Ideal for remote, industrial, or high-risk environments</li>
      </ul>
      <h2>Use Cases:</h2>
      <ul>
        <li>Shipping & logistics</li>
        <li>Utilities & energy</li>
        <li>Industrial lockout/tagout</li>
        <li>Defense or infrastructure</li>
      </ul>
      <h3>Status:</h3>
      <p>Patent-pending. Prototype in progress. Seeking manufacturing & channel partners.</p>
    </div>
  );
}