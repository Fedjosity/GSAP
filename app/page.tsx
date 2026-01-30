import GsapFrom from "@/components/GsapFrom";
import GsapTo from "@/components/GsapTo";
import GsapFromTo from "@/components/GsapFromTo";
import GsapTimeline from "@/components/GsapTimeline";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-(family-name:--font-geist-sans)">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-2xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight">
            GSAP Learning Playground
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome to your GSAP animation journey!
          </p>
        </div>

        <div className="w-full">
          <GsapTo />
          <GsapFrom />
          <GsapFromTo />
          <GsapTimeline />
        </div>

        <div className="text-sm text-gray-500">
          <p>
            Check <strong>TUTORIAL.md</strong> for your learning plan.
          </p>
        </div>
      </main>
    </div>
  );
}
