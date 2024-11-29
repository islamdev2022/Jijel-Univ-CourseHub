import React from "react"
interface FacultyListProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    fName: string,
    href: string,
}


const FacultyList = ({fName, href}: FacultyListProps) => {
    return ( <>
    <div className="hover:scale-110 transition ease-in-out h-32 w-48 text-center flex justify-center items-center from-esperanza_cyan_blue border-sky-200 border bg-gradient-to-b rounded-xl">
        <a href={href}>{fName} </a>

    </div>
    </> );
}
 
export default FacultyList;