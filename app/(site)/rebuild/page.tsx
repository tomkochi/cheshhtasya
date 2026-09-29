"use client";

import { useEffect, useState } from "react";

export default function RevalidatePage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState<string>("Please wait...");
  const [passed, setPassed] = useState(false);

  const revalidate = async () => {
    setPassed(true);
    try {
      const response = await fetch(`/api/revalidate`);
      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Rebuild completed! See other pages after a few minutes.");
      } else {
        throw new Error(data.message || "Failed to revalidate");
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  };

  const validate = () => {
    const enteredPassword =
      (document.getElementById("psw") as HTMLInputElement)?.value || "";
    if (enteredPassword === process.env.NEXT_PUBLIC_REVALIDATE_TOKEN) {
      revalidate();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {passed ? (
        <p
          className={`text-center ${
            status === "error"
              ? "text-red-500"
              : status === "success"
              ? "text-green-500"
              : ""
          }`}
        >
          {message}
        </p>
      ) : (
        <input
          type="password"
          id="psw"
          onChange={validate}
          className="bg-gray-50"
        />
      )}
    </div>
  );
}
