"use client";
import { useParams } from "next/navigation";
import data from "@/lib/data copy.json";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
export default function Departement() {
  const [isLicenceExpanded, setIsLicenceExpanded] = useState(false);
  const [isMasterExpanded, setIsMasterExpanded] = useState(false);
  const [Courses, setCourses] = useState<{ name: string; source: string }[]>([]);
  const [semester, setSemester] = useState("");
  const [copiedCourse, setCopiedCourse] = useState<string | null>(null);
  const { faculty } = data;
  const { departement } = useParams();
  const depa = faculty
    .map((f) => f.departments.find((d) => d.name === departement))
    .find((d) => d?.name !== undefined);

  const copyToClipboard = (name: string, source: string) => {
    navigator.clipboard.writeText(source); // Copy to clipboard
    setCopiedCourse(name); // Set the copied course
    setTimeout(() => setCopiedCourse(null), 2000); // Reset after 2 seconds
  };

  return (
    <div className=" flex  justify-center ">
      <div className="p-3 space-y-[24px] ">
        <h1 className="text-2xl font-semibold font-sans text-center">
          Departement : {depa?.name.replace(/_/g, " ")}
        </h1>
        <div className="flex justify-center ">
        <Link href="/" className=" underline hover:text-esperanza_cyan_blue underline-offset-2 flex items-center gap-1"><IoArrowBackOutline />Back to Home</Link>
        </div>
        
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
                    <div className="flex gap-3 items-center" key={c.name}>
                      {c.source ==="" ? <div className="py-2 text-md rounded-xl bg-slate-100 px-4 w-full">No Drive link available for <span className=" font-bold ">{c.name}</span></div> : 
                      <div className="flex items-center w-full gap-3">
                        <a
                        href={c.source}
                        target="_blank"
                        className="py-2 text-md rounded-xl bg-slate-100 px-4 w-full text-center"
                        rel="noopener noreferrer"
                      >
                        {c.name}
                      </a>
                      {copiedCourse === c.name ? (
                        <BsClipboard2CheckFill className="text-green-500" />
                      ) : (
                        <FaCopy
                          onClick={() => copyToClipboard(c.name, c.source)}
                          className="cursor-pointer"
                        />
                      )}</div> }
                      
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
                                  <div
                                    className="flex gap-3 items-center"
                                    key={c.name}
                                  >
                                   {c.source ==="" ? <div className="py-2 text-md rounded-xl bg-slate-100 px-4 w-full">No Drive link available for <span className=" font-bold ">{c.name}</span></div> : 
                      <div className="flex items-center w-full gap-3">
                        <a
                        href={c.source}
                        target="_blank"
                        className="py-2 text-md rounded-xl bg-slate-100 px-4 w-full text-center"
                        rel="noopener noreferrer"
                      >
                        {c.name}
                      </a>
                      {copiedCourse === c.name ? (
                        <BsClipboard2CheckFill className="text-green-500" />
                      ) : (
                        <FaCopy
                          onClick={() => copyToClipboard(c.name, c.source)}
                          className="cursor-pointer"
                        />
                      )}</div> }
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
                                  <div
                                    className="flex gap-3 items-center"
                                    key={c.name}
                                  >
                                    {c.source ==="" ? <div className="py-2 text-md rounded-xl bg-slate-100 px-4 w-full">No Drive link available for <span className=" font-bold ">{c.name}</span></div> : 
                      <div className="flex items-center w-full gap-3">
                        <a
                        href={c.source}
                        target="_blank"
                        className="py-2 text-md rounded-xl bg-slate-100 px-4 w-full text-center"
                        rel="noopener noreferrer"
                      >
                        {c.name}
                      </a>
                      {copiedCourse === c.name ? (
                        <BsClipboard2CheckFill className="text-green-500" />
                      ) : (
                        <FaCopy
                          onClick={() => copyToClipboard(c.name, c.source)}
                          className="cursor-pointer"
                        />
                      )}</div> }
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
