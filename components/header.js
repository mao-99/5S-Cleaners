import Link from "next/link";
import jQuery from "jquery";
import { useEffect, useState } from "react";

export default function Header({ transparent }) {
  return (
    <section>
      <header  id="header">
        <h1>
          <Link href="/">5 S Cleaners</Link>
        </h1>
        <nav id="nav">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services + Bookings</Link>
            </li>
            <li>
              <Link href="/contactPage" className="button">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
