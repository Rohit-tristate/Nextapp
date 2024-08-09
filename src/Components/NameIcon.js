export default function NameIcon(props) {
  return (
    <div>
      <div className="  max-[480]:w-[30px] max-[480px]:h-[30px] w-[40px] h-[40px] bg-slate-800  rounded-full flex justify-center items-center p-1 text-white font-blod text-xl   ">
        {props.name}
      </div>
    </div>
  );
}
