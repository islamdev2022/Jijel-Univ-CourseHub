const FacultyList = ({fName}: {
    fName: string
}) => {
    return ( <>
    <div className="hover:scale-110 transition ease-in-out h-32 w-48 text-center flex justify-center items-center from-esperanza_cyan_blue border-sky-200 border bg-gradient-to-b rounded-xl">
        <p className="font-bold">{fName} </p>

    </div>
    </> );
}
 
export default FacultyList;