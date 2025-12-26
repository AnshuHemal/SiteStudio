import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const MenuOptions = [
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow">
      <div className="flex gap-2 items-center">
        <Image src={"logo.svg"} alt="logo" width={170} height={35} />
      </div>
      <div className="flex gap-3">
        {MenuOptions.map((menu, index) => (
          <Button variant={"ghost"} key={index}>
            {menu.name}
          </Button>
        ))}
      </div>
      <div className="">
        <Button>
          Get Started <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Header;
