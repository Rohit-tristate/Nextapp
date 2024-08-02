export default function NameIcon(props) {
  return (
    <div>
      <div className="w-[40px] bg-slate-800  rounded-full flex justify-center items-center p-1 text-white font-blod text-xl  h-[40px] ">
        {props.name}
      </div>
    </div>
  );
}
