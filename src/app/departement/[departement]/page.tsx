"use client";
import { useParams } from "next/navigation";
import { faculty } from "@/lib/data copy.json";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
export default function Departement() {
  const [isLicenceExpanded, setIsLicenceExpanded] = useState(false);
  const [isMasterExpanded, setIsMasterExpanded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [Courses, setCourses] = useState(new Array());
  const [semester, setSemester] = useState("");

  const { departement } = useParams();
  let depa = faculty
    .map((f) => f.departments.find((d) => d.name === departement))
    .find((d) => d?.name !== undefined);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  };

  return (
    <div className=" flex  justify-center ">
      <div className="p-3 space-y-[24px] ">
        <h1 className="text-2xl font-semibold font-sans text-center">
          Departement : {depa?.name.replace(/_/g, " ")}
        </h1>
        <div className=" flex flex-wrap gap-10 justify-center ">
          {/* Licence Section */}
          <div className="flex h-max shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex-col items-center rounded-xl py-3 w-[250px] bg-white space-y-5">
            <span
              className="flex justify-center text-2xl font-sans font-medium w-full py-2 cursor-pointer"
              onClick={() => setIsLicenceExpanded(!isLicenceExpanded)}
            >
              Licence
            </span>
            <ul
              className={`flex flex-col justify-center space-y-3 ${
                isLicenceExpanded ? "" : "hidden"
              }`}
            >
              <Dialog>
                {depa?.type
                  .filter((t) => t.name === "Licence") // Only Licence
                  .flatMap((t) =>
                    t.semester?.map((s) => (
                      <DialogTrigger key={s.name}>
                        <li
                          key={s.name}
                          className="py-2 text-lg rounded-xl bg-slate-100 px-[50px]"
                          onClick={() => {
                            setCourses(s.courses);
                            setSemester(s.name);
                          }}
                        >
                          {s.name.replace(/_/g, " ")}
                        </li>
                      </DialogTrigger>
                    ))
                  )}
                <DialogContent>
                  <DialogTitle className="font-bold text-center text-xl">
                    {semester.replace(/_/g, " ").toUpperCase()}
                  </DialogTitle>
                  {Courses.map((c) => (
                    <div className="flex gap-3" key={c.name}>
                      <a
                        href={c.source}
                        className="py-2 text-md rounded-xl bg-slate-100 px-4 w-full text-center"
                      >
                        {c.name}
                      </a>
                      <button
                        onClick={() => copyToClipboard(c.source)}
                        className=""
                      >
                        <img
                          src="/icons8-copy-100.png"
                          alt="copy"
                          className="w-5"
                        />
                      </button>
                    </div>
                  ))}
                </DialogContent>
              </Dialog>
            </ul>
          </div>

          {/* Master Section */}
          <div className="flex h-max shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex-col items-center rounded-xl py-3 w-[250px] bg-white space-y-5">
            <span
              className="flex justify-center text-2xl font-sans font-medium w-full py-2 cursor-pointer"
              onClick={() => setIsMasterExpanded(!isMasterExpanded)}
            >
              Master
            </span>
            <ul
              className={`flex flex-col justify-center space-y-3 px-4 ${
                isMasterExpanded ? "" : "hidden"
              }`}
            >
              {depa?.type
                .filter((t) => t.name === "Master") // Filter for Master only
                .flatMap((t) =>
                  t.majors
                    ? // Existing logic for Master with majors
                      t.majors.map((major) => (
                        <DropdownMenu key={major.name}>
                          {/* Major Trigger */}
                          <DropdownMenuTrigger className="py-2 text-lg rounded-xl bg-slate-100 cursor-pointer">
                            {major.name.replace(/_/g, " ")}
                          </DropdownMenuTrigger>

                          {/* Semesters Dropdown */}
                          <DropdownMenuContent className="flex flex-col px-5">
                            <Dialog>
                              {major.semester?.map((semester, index) => (
                                <DialogTrigger
                                  key={semester.name + Math.random()}
                                >
                                  <DropdownMenuItem
                                    onSelect={(e) => e.preventDefault()}
                                    onClick={() => setCourses(semester.courses)}
                                    className="h-10 cursor-pointer uppercase"
                                  >
                                    {semester.name.replace(/_/g, " ")}
                                  </DropdownMenuItem>
                                  {index < major.semester.length - 1 && (
                                    <DropdownMenuSeparator />
                                  )}
                                </DialogTrigger>
                              ))}
                              <DialogContent>
                                <DialogTitle className="text-xl font-medium">
                                  Courses
                                </DialogTitle>

                                {Courses.map((c) => (
                                  <div className="flex gap-3" key={c.name}>
                                    <a
                                      href={c.source}
                                      className="py-2 text-md rounded-xl bg-slate-100 px-4 w-full text-center"
                                    >
                                      {c.name}
                                    </a>
                                    <button
                                      onClick={() => copyToClipboard(c.source)}
                                      className=""
                                    >
                                      <img
                                        src="/icons8-copy-100.png"
                                        alt="copy"
                                        className="w-5"
                                      />
                                    </button>
                                  </div>
                                ))}
                              </DialogContent>
                            </Dialog>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ))
                    : // Fallback for Master without majors
                      t.semester?.map((s, index) => (
                        <DropdownMenu key={s.name}>
                          <DropdownMenuTrigger className="p-2 px-8 text-lg rounded-xl bg-slate-100 cursor-pointer">
                            {s.name.replace(/_/g, " ")}
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="flex flex-col px-5">
                            <Dialog>
                              <DialogTrigger key={s.name + Math.random()}>
                                <DropdownMenuItem
                                  onSelect={(e) => e.preventDefault()}
                                  onClick={() => setCourses(s.courses)}
                                  className="h-10 cursor-pointer uppercase"
                                >
                                  {s.name.replace(/_/g, " ")}
                                </DropdownMenuItem>
                                {index < semester.length - 1 && (
                                  <DropdownMenuSeparator />
                                )}
                              </DialogTrigger>
                              <DialogContent>
                                <DialogTitle className="text-xl font-medium">
                                  Courses
                                </DialogTitle>
                                {Courses.map((c) => (
                                  <div className="flex gap-3" key={c.name}>
                                    <a
                                      href={c.source}
                                      className="py-2 text-md rounded-xl bg-slate-100 px-4 w-full text-center"
                                    >
                                      {c.name}
                                    </a>
                                    <button
                                      onClick={() => copyToClipboard(c.source)}
                                      className=""
                                    >
                                      <img
                                        src="/icons8-copy-100.png"
                                        alt="copy"
                                        className="w-5"
                                      />
                                    </button>
                                  </div>
                                ))}
                              </DialogContent>
                            </Dialog>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ))
                )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
