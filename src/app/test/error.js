"use client";

export default function Error({ error, reset }) {
  console.log("exception occurred");
  return (
    <div>
      <h2>Something went wrong! in testing </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
