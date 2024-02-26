import { NavbarDemo, SpotlightPreview, CardHoverEffectDemo, MacbookScrollDemo, Footer, LampDemo } from "components/index";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <NavbarDemo />
      <SpotlightPreview />
      <CardHoverEffectDemo />
      <MacbookScrollDemo />
      <Footer/>
    </main>
  );
}
