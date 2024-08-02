import { Paper } from "@mui/material";


export default function Dashboarditem(props){
    return(
       <Paper className=" h-[300px] flex items-center justify-center  ">
       

       <div>

        <p className="text-[30px]  flex justify-center font-bold  "> {props.title}</p>

        <p className="text-[50px] font-bol flex justify-center  ">{props.total}</p>
        <p className="flex justify-center ">{props.para}</p>
       </div>


 
       
       </Paper>
    )
}