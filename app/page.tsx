
import Hero from "./components/hero";
import Main from "./components/main";
import About from "./components/about";
import Facilities from "./components/fasilitas";


export default function Home() {
  return (
   <div>
     <Hero />
     <div className="mt-16">
      <div className="text-center">
       <h1 className="text-6xl font-bold uppercase">Room & Rates</h1>
       <p className="py-4"> Ayo chek in 250k 2 kali Croottts...</p>
      </div>
     </div>
     <Main />
     <About />
     <Facilities />
   </div>
  );
}

