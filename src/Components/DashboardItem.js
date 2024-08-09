import { Paper } from "@mui/material";


export default function Dashboarditem(props){
    return(
       <Paper className=" p-5 lg: lg:p-2 lg:h-[300px] flex items-center justify-center  ">
       

       <div>

        <p className="xl:text-[30px]   flex justify-center font-bold  "> {props.title}</p>

        <p className="xl:text-[50px] text-[30px] font-bol flex justify-center  ">{props.total}</p>
        <p className="flex justify-center ">{props.para}</p>
       </div>


 
       
       </Paper>
    )
}