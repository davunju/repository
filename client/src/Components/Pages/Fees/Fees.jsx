import React, { useState } from "react";
import { data } from "./data";
import { documents } from "./data";

const Fees = () => {
  return (
    <main className="overflow-x-auto mb-10 md:mb-16 text-slate-700 w-full lg:w-[980px] mx-auto">
      <h1 className="text-2xl font-bold mb-3">Commercial Court Fees</h1>{" "}
      <article className="mb-5">
        Welcome to the comprehensive guide to Commercial Court fees, where
        you’ll find a detailed breakdown of all fees associated with court
        filings, services, and processes. Whether you’re an individual, a legal
        representative, or simply seeking clarity on court-related expenses, our
        fee list is designed to help you understand the financial requirements
        for accessing justice in a straightforward and accessible manner.{" "}
      </article>
      <section className="bg-slate-200 p-2 rounded-md mb-5 hidden md:block">
        <table className="min-w-full bg-slate-50 table-auto ring-1 rounded-md ring-slate-300">
          <caption className="caption-top mb-3 font-medium">
            Commercial Court Fees
          </caption>
          <thead className="bg-slate-100">
            <tr className="text-left">
              <th className="px-4 py-2 font-medium border-r border-slate-300">
                Category
              </th>
              <th className="px-4 py-2 font-medium border-r border-slate-300">
                Description
              </th>
              <th className="px-4 py-2 font-medium border-slate-300">
                Amount (Tsh)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td
                    className="px-4 py-2 font-medium text-sm align-top border-t border-r border-slate-300"
                    rowSpan={item.subItems.length + 1}
                  >
                    {item.category}
                  </td>
                </tr>
                {item.subItems.map((subItem, subIndex) => (
                  <tr key={subIndex}>
                    <td className="px-4 py-2 border-t text-sm border-r border-slate-300">
                      {subItem.description}
                    </td>
                    <td className="px-4 py-2 text-sm border-t border-slate-300">
                      {subItem.amount}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h1 className="text-2xl font-bold mb-3">Commercial Court Rules</h1>
        <p className="mb-5">
          Explore the complete set of court rules that govern legal proceedings,
          outlining the essential procedures, conduct standards, and guidelines
          followed in court. This resource provides detailed information on
          courtroom protocols, filing requirements, timelines, and procedural
          expectations for various types of cases.
        </p>
        <div className="bg-slate-200 rounded-md p-8 grid grid-cols-1 md:grid-cols-3 place-items-center gap-5">
          {documents.map((document) => (
            <a
              href={document.url}
              className="bg-slate-100 rounded-md shadow-md p-3 hover:bg-slate-300 hover:ring-slate-400 hover:transition duration-500 ease-in-out hover:scale-100 leading-6 ring-1 ring-inset ring-slate-300"
            >
              {document.name}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Fees;
