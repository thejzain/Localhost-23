import Navbar from "@/components/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white font-pixel h-screen">
      <div>
        <Navbar />
      </div>
      <div>{ children }</div>
    </div>
  );
}
