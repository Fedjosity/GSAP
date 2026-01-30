"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GsapTimeline() {
  const container = useRef(null);
  const box = useRef(null);
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to(box.current, {
      x: 250,
      rotation: 360,
      duration: 2,
      borderRadius: "100&",
      ease: "power1.inOut",
    });
    timeline.to(box.current, {
      x: 500,
      scale: 1,
      rotation: 360,
      duration: 2,
      borderRadius: "8px",
      ease: "back.inOut",
    });
  }, []);

  return (
    <div
      ref={container}
      className="p-10 border rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm"
    >
      <h2 className="text-xl mb-6 font-semibold">
        GSAPTimeline Test Component
      </h2>
      <button
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
        className="bg-blue-600 text-white px-4 py-2 mb-6 rounded-md shadow-md hover:bg-blue-700 transition-colors"
      >
        Play/Pause
      </button>
      <div
        ref={box}
        className="w-24 h-24 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg"
      >
        Animate
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Edit{" "}
        <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
          components/GsapTimeline.tsx
        </code>{" "}
        to play with animations.
      </p>
    </div>
  );
}
