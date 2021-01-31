import React from "react";
import { DateTime } from "luxon";
import Head from "next/head";

const durations = [
  [14, "The time it took to build the berlin wall"],
  [27, "The time it takes for the moon to rotate the earth"],
  [35, "The amount of time Darwin spent in the Galapagos islands"],
  [120, "The time it takes to grow a prizewinner pumpkin"],
  [128, "The shortest amount of time they think it would take to get to mars"],
  [225, "The time it takes for venus to orbit the sun"],
  [280, "The average length of human gestation"],
  [365, "The time it takes for the earth to orbit the sun"],
];

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
function pluraliseDatePart(part: number, description: string) {
  return `${part} ${description}${part !== 1 ? "s" : ""}`;
}

function getHumanDuration(years: number, months: number, days: number) {
  if (years === 0) {
    if (days === 0) {
      return `${pluraliseDatePart(months, "month")}`;
    }

    return `${pluraliseDatePart(months, "month")} and ${pluraliseDatePart(
      days,
      "day"
    )}`;
  }

  if (months === 0) {
    if (years === 0) {
      return pluraliseDatePart(days, "day");
    }

    return `${pluraliseDatePart(years, "year")} and ${pluraliseDatePart(
      days,
      "day"
    )}`;
  }

  return `${pluraliseDatePart(years, "year")}, ${pluraliseDatePart(
    months,
    "months"
  )} and ${pluraliseDatePart(days, "day")}`;
}

export default function IsDanBack() {
  const answerMessage = danIsFlyingBack
    ? "Yes Dan flew back 🎉🎉🎉🎉."
    : "Nope, Dans not home yet 😔.";

  const { years, months, days } = daysMonthYearsDiff;
  const humanDuration = getHumanDuration(years, months, Math.floor(days));

  const supplementary = `Dan flies back in ${humanDuration}*. (Possibility of an extra year if covid lockdowns continue)`;

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
