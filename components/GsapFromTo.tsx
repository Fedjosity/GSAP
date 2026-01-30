"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GsapFromTo() {
  const container = useRef(null);
  const box = useRef(null);

  useGSAP(
    () => {
      // Basic rotation and movement
      gsap.fromTo(
        box.current,
        { x: 0, rotation: 0, borderRadius: 0 },
        {
          rotation: 350,
          x: 250,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "bounce,out",
          borderRadius: "100&",
        },
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="p-10 border rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm"
    >
      <h2 className="text-xl mb-6 font-semibold">GSAPFromTo Test Component</h2>
      <div
        ref={box}
        className="w-24 h-24 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg"
      >
        Animate
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Edit{" "}
        <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
          components/GsapFromTo.tsx
        </code>{" "}
        to play with animations.
      </p>
    </div>
  );
}
