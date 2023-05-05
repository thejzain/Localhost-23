import Navbar from "@/components/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{ children }</div>
    </div>
  );
}
