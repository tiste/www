import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

interface Customer {
  name: string;
  mode: "dark" | "light";
  imagePath: string;
}

export async function getCustomers(): Promise<Customer[]> {
  const imagesDirectory = path.join(process.cwd(), "public/images/customers");
  const filenames = fs.readdirSync(imagesDirectory);

  return filenames.map((filename) => {
    const [name, mode] = filename.split(".");
    return {
      name,
      mode: mode === "dark" ? ("dark" as const) : ("light" as const),
      imagePath: `/images/customers/${filename}`,
    };
  });
}

export async function CustomersSection() {
  const customers = await getCustomers();

  return (
    <section className="section customers-section">
      <div className="container content">
        <div className="columns is-vcentered is-multiline is-mobile is-light-mode">
          {displayCustomers(customers, "light")}
        </div>

        <div className="columns is-vcentered is-multiline is-mobile is-dark-mode">
          {displayCustomers(customers, "dark")}
        </div>
      </div>
    </section>
  );
}

export function displayCustomers(
  customers: Customer[],
  mode: "dark" | "light",
  filter = "",
) {
  return customers
    .filter((customer) => customer.mode === mode)
    .filter((customer) =>
      customer.name.toLowerCase().includes(filter.substr(0, 4).toLowerCase()),
    )
    .map((customer, i) => (
      <div key={i} className="column is-4-mobile is-2-tablet">
        <Link href={`/missions/${customer.name}`}>
          <Image
            src={customer.imagePath}
            alt={customer.name}
            width={250}
            height={250}
          />
        </Link>
      </div>
    ));
}
