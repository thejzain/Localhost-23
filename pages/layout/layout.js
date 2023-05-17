import Navbar from "@/components/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white font-pixel ">
      <div className="">
        <Navbar />
      </div>
      <div className="pb-10">{ children }</div>
    </div>
  );
}
