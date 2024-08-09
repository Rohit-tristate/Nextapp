export default function layout({ children, navbar, sidebar, main }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mx-10 p-4 lg:bg-blue-500 md:bg-yellow-400 xl:bg-green-200  ">
        <div className="col-span-4">{navbar}</div>
        <div className="hidden lg:block">{sidebar}</div>
        <div className="lg:col-span-3 col-span-4  ">{main}</div>
      </div>
    </>
  );
}
