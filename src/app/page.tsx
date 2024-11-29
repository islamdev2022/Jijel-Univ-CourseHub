"use client";
import { Button } from "@/components/ui/button";
import FacultyList from "@/components/FacultyList";
import data from "@/lib/data copy.json";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
export default function Home() {
  const router = useRouter();
  const { faculty } = data;
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col p-3 space-y-[14px] items-center justify-center">
        <div className="relative space-y-2">
          <h1 className="text-[24px]  max-sm:text-[16px] font-bold text-black text-center">
            Unlock Your Learning Path: Explore All University Courses Here
          </h1>
        </div>
        <div id="d" className="relative flex flex-col items-center  ">
          <img
            src="book.png"
            id="book"
            alt="logo"
            className="z-50 w-[220px]  h-[170px] max-sm:w-[150px] max-sm:h-[80px]  "
          />

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-esperanza_cyan_blue font-bold hover:bg-esperanza_very_cyan_blue">
                IMPORTANT README !!!!
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-red-500 underline text-center text-xl">
                  Information !{" "}
                </DialogTitle>
                <DialogDescription>
                  All these Drive links were scattered, and I&apos;ve combined
                  them into one website for everyone to access easily. For the
                  professors, I&apos;ve ensured that protected files (PDFs with
                  passwords) were not included. If anyone have anything to add
                  or share, feel free to contact us through the club&apos;s
                  page!
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex flex-wrap gap-16 justify-center lg:px-20 ">
          {faculty.map((f) => (
            <DropdownMenu key={f.name}>
              <DropdownMenuTrigger className="outline-none">
                <FacultyList href="" fName={f.name} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                side="bottom"
                className="px-5 max-h-40 overflow-y-auto"
              >
                {f.departments.map((d, index) => (
                  <React.Fragment key={index}>
                    <DropdownMenuItem
                      className="cursor-pointer h-10 uppercase"
                      onClick={() => router.push(`/departement/${d.name}`)}
                      key={d.name}
                    >
                      {d.name.replace(/_/g, " ")}
                    </DropdownMenuItem>
                    {index < f.departments.length - 1 && (
                      <DropdownMenuSeparator key={d.name + Math.random()} />
                    )}
                  </React.Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </div>
    </div>
  );
}
