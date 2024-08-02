import { ClipLoader } from "react-spinners";

export default function CircularLoading(props) {
    const height=props.height;
  return (
    <div className={` w-full h-[250px] flex justify-center items-center z-10 absolute top-0 bg-gray-100 opacity-25 sapce-x-2 `}>
      <ClipLoader/>
      <p>Deleteing...</p>
    </div>
  );
}
