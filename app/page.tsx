import About from "@/components/about/about";
import  Main  from "../components/main/main";
import SocialMedia from "@/components/social/social";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <div className="mx-48 mt-11">
      
      <Main />
      <About />
      <SocialMedia />
      <Contact  />
      
    </div>
  );
}
