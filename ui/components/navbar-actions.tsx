"use client";

import { ShoppingBag, ShoppingBasket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <button onClick={() => router.push('/cart')} className="relative flex items-center justify-center m-0 w-auto overflow-visible bg-transparent">
        <ShoppingBasket
          size={20}
          color="black"
          strokeWidth={1}
        />

        {cart.items.length !== 0 && (
          <span className="w-[12px] h-[12px] rounded-[50%] leading-[13px] absolute top-[-8px] right-[-8px] bg-black text-white text-[10px]">
            {cart.items.length}
          </span>
        )}

        {/* <span className="w-[12px] h-[12px] rounded-[50%] leading-[13px] absolute top-[-8px] right-[-8px] bg-black text-white text-[10px]">
          {cart.items.length}
        </span> */}
      </button>
    </div>
  );
}

export default NavbarActions;