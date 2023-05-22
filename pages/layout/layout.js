import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white font-pixel ">
      <Background/>
      <Navbar />
      <div className="pb-10">{children}</div>
      <Footer />
    </div>
  );
}
