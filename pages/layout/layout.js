import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white font-pixel ">
      <Navbar />
      <div className="pb-10">{children}</div>
      <Footer />
    </div>
  );
}
