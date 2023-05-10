import Card from "@/components/card";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div>
      <div className="h-[70vh] pt-[10vh]  grid justify-center content-center text-6xl">
        <div>LocalHost 23</div>
      </div>
      <div>
        <Carousel />
      </div>
      <Card />
    </div>
  );
}
