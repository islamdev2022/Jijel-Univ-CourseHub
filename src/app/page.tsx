import Image from "next/image";
import { Button } from "@/components/ui/button";
import FacultyList from "@/components/FacultyList";
import Footer from "@/components/Footer";
export default function Home() {
  
  return (
    <div className="h-fit">
      <div className="flex flex-col p-3 space-y-[14px] items-center justify-center">
      <div className="relative space-y-2">
      <div className="absolute w-full h-full bg-blue-100 top-0 left-0 z-0 blur-[100px] "></div>
      <h1 className="text-[24px]  max-sm:text-[16px] font-bold text-black text-center">Unlock Your Learning Path: Explore All University Courses Here</h1>
   {/* <p className="text-sm max-sm:text-xs leading-5 font-semibold text-white/80">Welcome to your go-to platform for accessing every course offered at University of Jijel! Whether you're catching up, revising, or getting a head start, find all course materials and resources in one place to support your academic journey. Dive in and stay ahead with everything you need at your fingertips.</p> */}
      </div>
      <div id="d" className="relative flex items-center  ">
      
      <img src="book.png" id="book" alt="logo" className="z-50 w-[220px]  h-[170px] max-sm:w-[150px] max-sm:h-[80px]  " />

      </div>
      <div className="flex flex-wrap gap-16 justify-center lg:px-20 ">
      <FacultyList />
      <FacultyList /><FacultyList /><FacultyList /><FacultyList /><FacultyList />
      </div>
      </div>
      <Footer />
    </div>
  );
}
