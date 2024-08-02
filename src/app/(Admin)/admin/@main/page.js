import Dashboarditem from "@/Components/DashboardItem";
import { Paper } from "@mui/material";

export default function main() {
  return (
    <Paper className=" ">
      <div className="h-[80vh] overflow-y-auto">
        <h1 className="flex justify-center text-2xl font-bold p-3 mt-3  ">
          Welcome to Dashboard
        </h1>

        <div className="grid grid-cols-3 mx-[10%]  p-3 mt-5 gap-4 text-center mx-2 ">
        <Dashboarditem total={20} para="More than thousand plus post postedare  Weekly" title="Total Post"/>
        <Dashboarditem total={10} para="More than 100 user register Weekly" title="Total User"/>
        <Dashboarditem total={13} para="`100 plus Admin are there for your queries" title=" Admin"/>
       
        </div>
      </div>
    </Paper>
  );
}
