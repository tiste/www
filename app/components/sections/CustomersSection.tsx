import * as React from "react";
import Link from "next/link";
import Image from "next-export-optimize-images/image";
import { customers } from "@/app/components/sections/customers";

export async function CustomersSection() {
  return (
    <section className="section customers-section">
      <div className="container content">
        <div className="columns is-vcentered is-multiline is-mobile is-light-mode">
          {displayCustomers("light")}
        </div>

        <div className="columns is-vcentered is-multiline is-mobile is-dark-mode">
          {displayCustomers("dark")}
        </div>
      </div>
    </section>
  );
}

export function displayCustomers(mode: "dark" | "light", filter = "") {
  return customers
    .filter((customer) =>
      customer.name.toLowerCase().includes(filter.substr(0, 4).toLowerCase()),
    )
    .map((customer, i) => (
      <div key={i} className="column is-4-mobile is-2-tablet">
        <Link href={`/missions/${customer.slug}`}>
          <Image
            src={`/images/customers/${customer.slug}.${mode}.png`}
            alt={customer.name}
            sizes="(min-width: 769px) 20vw, 30vw"
            width={250}
            height={110}
          />
        </Link>
      </div>
    ));
}
