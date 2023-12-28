import { DownloadCloud } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Heros() {
  return (
    <div className="px-8 bg-[#404eed] ">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-[800] text-3xl uppercase">Imagine a place...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="flex gap-5 lg:flex-row whitespace-nowrap">
          <Button className=" whitespace-nowrap">
            <DownloadCloud className="w-4 h-4" />
            Download for Windows
          </Button>
          <Button className="text-white bg-black hover:bg-black/70">
            Open in Browser
          </Button>
        </div>
      </div>
      <div className="w-[375px] h-[192px] relative lg:hidden -ml-[80px]">
        <Image src="/assets/herosSm.svg" fill alt="An image" />
      </div>
    </div>
  );
}
