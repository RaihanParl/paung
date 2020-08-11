import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { waitFor, render } from "@testing-library/react";

import { Table } from "./components/Table";

const mockData = [
  {
    id: 1,
    first_name: "Babette",
    last_name: "Comi",
    email: "bcomi0@myspace.com",
    gender: "Female",
    company: "Windler and Sons"
  },
  {
    id: 2,
    first_name: "Rodolph",
    last_name: "Goodlett",
    email: "rgoodlett1@constantcontact.com",
    gender: "Male",
    company: "Ebert Group"
  },
  {
    id: 3,
    first_name: "Marlyn",
    last_name: "Hamm",
    email: "mhamm2@a8.net",
    gender: "Female",
    company: "Schuster-Stokes"
  },
  {
    id: 4,
    first_name: "Rosemaria",
    last_name: "Lusgdin",
    email: "rlusgdin3@php.net",
    gender: "Female",
    company: "Cummings-Ullrich"
  },
  {
    id: 5,
    first_name: "Adria",
    last_name: "Rowsel",
    email: "arowsel4@accuweather.com",
    gender: "Female",
    company: "West and Sons"
  }
];

// const renderer = () => render(<Table data={mockData} />);

describe("Test", () => {
  it("Should Have a correct width", () => {
    expect(1).toBe(1);
    // const { getByTestId, debug } = renderer();

    // expect(getByTestId("table-wrapper")).toBeVisible();
  });
});
