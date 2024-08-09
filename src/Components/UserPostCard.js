import { Paper } from "@mui/material";
const para =
  "To handle routing in a web application, you typically use a router library like React Router for React applications. If you're working with a different framework or library, the approach may vary slightly, but the general concept remains the same. To show a specific  page for unmatched routes, you can use a wildcard or catch-all route. This route will match any path that hasn't been matched by previous routes and can be set to display your desired slot page.";
export default function UserPostcard(props) {
  const splittingTheDate = (date) => {
    const arr = date.split(" ");
    return arr;
  };

  let splitarr = splittingTheDate(props?.arr?.date);
  let date = splitarr[2] + "/" + splitarr[1] + "/" + splitarr[3];

  return (
    <>
      <Paper className="p-5 border rounded-md  ">
        <div className="flex justify-between  ">
          <p className=" text-bold  p-1  text-[14px]  md:text-xl ">{props.arr.title}</p>
          <p className=" text-bold  p-1 text-[14px] md:text-[14px] italic text-gray-500 ">
            {date}
          </p>
        </div>

        <p className="text-justify text-gray-500 md:text-auto text-[12px]   flex ">{props.arr.post}</p>
      </Paper>
    </>
  );
}
