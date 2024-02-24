import { MacbookScrollDemo } from "../components/macbookScroll";
import { NavbarDemo } from "../components/navBar"
import {SpotlightPreview} from "../components/spotlight-tittle"
import {CardHoverEffectDemo} from "../components/card-hover"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <NavbarDemo />
      <SpotlightPreview/>
      <CardHoverEffectDemo/>
      <MacbookScrollDemo />
    </main>
  );
}
