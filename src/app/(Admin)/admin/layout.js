export default function layout({ children, navbar, sidebar, main }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mx-10 p-4 ">
        <div className="col-span-4">{navbar}</div>
        <div className="">{sidebar}</div>
        <div className="col-span-3 ">{main}</div>
      </div>
    </>
  );
}
