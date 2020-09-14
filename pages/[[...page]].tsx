import React from "react";
import { DateTime } from "luxon";

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
  return (
    <div className="lead">
      <header>
        <h1 className="question">Is Dan back?</h1>
      </header>
      <main>
        <div className="answer">
          {danIsFlyingBack ? (
            <p>Yes Dan flew back 🎉🎉🎉🎉</p>
          ) : (
            <p>Nope, Dans not home yet 😔.</p>
          )}
        </div>
        {!danIsFlyingBack && (
          <div className="supplementary">
            Dan flies back in{" "}
            {daysMonthYearsDiff.years
              ? `${daysMonthYearsDiff.years} year, `
              : ""}
            {daysMonthYearsDiff.months
              ? `${daysMonthYearsDiff.months} months and `
              : ""}
            {Math.floor(daysMonthYearsDiff.days)} days.
          </div>
        )}
      </main>
    </div>
  );
}
