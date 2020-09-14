import React from "react";
import { DateTime } from "luxon";
import Head from "next/head";

export const dansReturnDate = DateTime.fromObject({
  day: 24,
  month: 12,
  year: 2021,
  zone: "Europe/London",
});

export const nowDate = DateTime.local();

export const danIsFlyingBack = dansReturnDate < nowDate;

export const daysMonthYearsDiff = dansReturnDate.diff(nowDate, [
  "years",
  "months",
  "days",
]);

export default function IsDanBack() {
  const answerMessage = danIsFlyingBack
    ? "Yes Dan flew back 🎉🎉🎉🎉."
    : "Nope, Dans not home yet 😔.";

  function pluraliseDatePart(part: number, description: string) {
    return `${part} ${description}${part > 1 ? "s" : ""}`;
  }
  const yearsText = `${pluraliseDatePart(daysMonthYearsDiff.years, "year")}, `;
  const monthsText = `${pluraliseDatePart(
    daysMonthYearsDiff.months,
    "month"
  )} and `;
  const daysText = pluraliseDatePart(
    Math.floor(daysMonthYearsDiff.days),
    "day"
  );

  const supplementary = `Dan flies back in ${yearsText}${monthsText}${daysText}.`;

  return (
    <>
      <Head>
        <meta property="og:title" content="Is Dan back?" />
        <meta
          property="og:description"
          content={`${answerMessage} ${supplementary}`}
        />
        <meta
          property="og:image"
          content="https://isdanback.com/hesnotbackyet.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://isdanback.com" />
      </Head>
      <div className="lead">
        <header>
          <h1 className="question">Is Dan back?</h1>
        </header>
        <main>
          <div className="answer">
            <p>{answerMessage}</p>
          </div>
          {!danIsFlyingBack && (
            <div className="supplementary">{supplementary}</div>
          )}
        </main>
      </div>
    </>
  );
}
