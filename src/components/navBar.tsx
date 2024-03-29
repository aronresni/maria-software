"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../utils/cn";
const logo = require("../assets/maria-logo.png");



export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">


      <Navbar className="top-2" />

    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
    
      <Menu setActive={setActive}>

        <MenuItem setActive={setActive} active={active} item="Precios">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Software"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Facebook Ads"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Automatizacion"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
         
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contactanos">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive} active={active} item="Registrate">
          <div className="flex flex-col space-y-4 text-sm">

            <HoveredLink href="/login">Iniciar Sesion</HoveredLink>
            <HoveredLink href="/register">Registrar usuario nuevo</HoveredLink>
          </div>

        </MenuItem>
      </Menu>
    </div>
  );
}
