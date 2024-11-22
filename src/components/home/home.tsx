"use client";

import Button from "../ui/button";

export default function HomeScreen() {
  return (
    <div>
      <div className="mb-2 text-2xl">Welcome to my website</div>
      <div className="text-3xl">
        I am sure, that you are in the good mood 😊
      </div>
      <Button onClick={() => window.location.reload()}>Try again</Button>
    </div>
  );
}
