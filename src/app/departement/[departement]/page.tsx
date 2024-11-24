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
import { useState, useRef } from "react";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
export default function Departement() {
  const [isLicenceExpanded, setIsLicenceExpanded] = useState(false);
  const [isMasterExpanded, setIsMasterExpanded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [Courses, setCourses] = useState(new Array());
  let dialog = document.getElementById("dialog");

  const { departement } = useParams();
  let depa = faculty
    .map((f) => f.departments.find((d) => d.name === departement))
    .find((d) => d?.name !== undefined);
  return (
    <div className="h-screen flex  justify-center">
      <div className="p-3">
        <div className="flex space-x-[50px]">
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
                {depa?.type.map((t) =>
                  t.semester?.map((s) => (
                    <DialogTrigger key={s.name} className="">
                      <li
                        key={s.name}
                        className="py-2 text-lg rounded-xl bg-slate-100 px-[50px]"
                        onClick={() => {
                          setCourses(s.courses);
                        }}
                      >
                        {" "}
                        {s.name.replace(/_/g, " ")}{" "}
                      </li>
                    </DialogTrigger>
                  ))
                )}
                <DialogContent>
                  <DialogTitle className="hidden"></DialogTitle>
                  {Courses.map((c) => (
                    <li
                      key={c.name}
                      className="py-2 text-xl rounded-xl list-none bg-slate-100 px-[40px]"
                    >
                      {c.name}
                    </li>
                  ))}
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </ul>
          </div>

          {/* Master Section */}
          <div className="flex h-max shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex-col items-center rounded-xl py-3 w-[250px] bg-white space-y-5">
            <span
              className="flex justify-center text-2xl font-medium font-sans w-full py-2 cursor-pointer"
              onClick={() => setIsMasterExpanded(!isMasterExpanded)}
            >
              Master
            </span>
            <ul
              className={`flex flex-col justify-center space-y-3 ${
                isMasterExpanded ? "" : "hidden"
              }`}
            >
              {depa?.type.map((t) =>
                t.majors?.map((major) => (
                  <DropdownMenu key={major.name}>
                    {/* Major Trigger */}
                    <DropdownMenuTrigger className="py-2 text-lg rounded-xl bg-slate-100 px-[20px] cursor-pointer">
                      {major.name.replace(/_/g, " ")}
                    </DropdownMenuTrigger>

                    {/* Semesters Dropdown */}
                    <DropdownMenuContent>
                      <Dialog>
                        {major.semester?.map((semester) => (
                          <DialogTrigger
                            key={semester.name + Math.random()}
                            asChild
                          >
                            <DropdownMenuItem
                              onSelect={(e) => e.preventDefault()}
                              key={semester.name}
                              onClick={() => setCourses(semester.courses)}
                            >
                              {semester.name.replace(/_/g, " ")}
                            </DropdownMenuItem>
                          </DialogTrigger>
                        ))}
                        <DialogContent>
                          <DialogTitle className="text-xl font-medium">
                            Courses
                          </DialogTitle>

                          {Courses.map((course) => (
                            <li
                              key={course.name}
                              className="py-2 text-lg rounded-xl list-none bg-slate-100 px-[20px]"
                            >
                              {course.name}
                            </li>
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
