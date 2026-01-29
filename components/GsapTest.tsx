"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GsapTest() {
  const container = useRef(null);
  const box = useRef(null);

  useGSAP(
    () => {
      // Basic rotation and movement
      gsap.to(box.current, {
        rotation: 360,
        x: 100,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="p-10 border rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm"
    >
      <h2 className="text-xl mb-6 font-semibold">GSAP Test Component</h2>
      <div
        ref={box}
        className="w-24 h-24 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg"
      >
        Animate
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Edit{" "}
        <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
          components/GsapTest.tsx
        </code>{" "}
        to play with animations.
      </p>
    </div>
  );
}
