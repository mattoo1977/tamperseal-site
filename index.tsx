
import React from 'react';

export default function Home() {
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Tamper-Proof. Power-Free. Patent-Pending.</h1>
      <p className="text-xl mb-6">
        Introducing a new class of smart, passive security seals that record tampering without batteries, wires, or bulky tech.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">What Makes It Different?</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>No power required</li>
          <li>Works with any NFC reader or scanner</li>
          <li>Optional QR code for scan-based access logging</li>
          <li>Ideal for remote, industrial, or high-risk environments</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Shipping & logistics</li>
          <li>Utilities & energy</li>
          <li>Industrial lockout/tagout</li>
          <li>Defense or infrastructure</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Status</h2>
        <p>Patent-pending. Prototype in progress. Seeking manufacturing & channel partners.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Join Our Pilot Program</h2>
        <form className="space-y-4">
          <input className="border p-2 w-full" type="text" placeholder="Name" />
          <input className="border p-2 w-full" type="email" placeholder="Email" />
          <input className="border p-2 w-full" type="text" placeholder="Company" />
          <button className="bg-black text-white px-4 py-2 rounded" type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
