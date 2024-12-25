import Header from "@/components/Header/Header";
import Properties from "@/components/Properties/Properties";
import Stats from "@/components/Stats/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto">
      <Header/>
      <Stats/>
      <Properties/>
    </div>
  );
}
