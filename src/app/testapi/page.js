import { Paper } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";


export const revalidate = 0; // 

export default async function page() {
  const result = await getAllpost();
  console.log("result", result);

 
  return (
    <div>
      <h1>All post</h1>

      <div className="grid grid-cols-3 gap-2  p-2 ">

   {result.length>0 && result.map((val)=>{
    return(
       <Paper >
        <p>{val.id}</p>
        <p>{val.name}</p>
        <p>{val.password}</p>
      
        </Paper>
    )
   })}

</div>

        
    </div>
  );
}


export const getAllpost = async () => {
  try {
    const response = await fetch("http://localhost:8000/post",{ cache: 'no-store' });

    if (!response.ok) {
      // Throw an error if the response status is not OK
      toast.error("error")
    
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error or handle it as needed
    console.error("Failed to fetch posts:", error);
    toast.error("error")
    throw new Error("error")
    // return []; // Return an empty array or handle the error appropriately
  }
};
