import Link from "next/link";
import { Medal } from "lucide-react";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full">
      <div
        className={cn(
          "flex justify-center items-center flex-col",
          headingFont.className
        )}
      >
        <div className="bg-amber-100 text-orange-700 p-3 rounded-full flex">
          <Medal />
          <div className="ml-2 pt-1">No.1 TASK MANAGER</div>
        </div>
        <div className="text-3xl md:text-6xl font-bold md:font-normal mt-4">
          Taskify helps team move
        </div>
        <div className="text-3xl md:text-6xl text-white p-4 pb-2 rounded-lg mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          work forward
        </div>
        <div
          className={cn(
            "text-gray-400 text-sm md:text-xl mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            textFont.className
          )}
        >
          Powering a productive team means using a powerful tool. From meetings
          and projects to events and goal setting, Trello's intuitive features
          give any team the ability to quickly set up and customize workflows
          for just about anything.
        </div>
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href={"/sign-up"}>Get Taskify for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
