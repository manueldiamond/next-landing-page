import Image from "next/image";
import { BlueCard, Bonus2, FAQ, Hero, Recensioner, Screenshots, Steps } from "./components";
import Example from "./components/Example";


export default function Home() {
  return (
    <div className="w-full">
      <Hero/>
      <BlueCard/>
      <Bonus2/>
      <Steps/>
      <Example/>
      <Recensioner/>
      <Screenshots/>
      <FAQ/>
    </div>
  );
}
