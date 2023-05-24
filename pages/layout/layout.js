import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  if (router.asPath != "/") {
    return (
      <div className="bg-black text-white font-pixel ">
        <Navbar />
        <div className="pb-10 ">{children}</div>
        <Footer />
        <div className="h-screen w-screen fixed top-0 ">
          <Background />
        </div>
      </div>
    );
  } else {
    return <div className="bg-black text-white font-pixel "> {children}</div>;
  }
}
