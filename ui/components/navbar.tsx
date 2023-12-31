import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import Image from "next/image";
import logo from '../assets/logo.jpg'

export const revalidate = 0;


const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-10 flex lg:ml-0 gap-x-2">
            {/* <p className="font-bold text-xl">STORE</p> */}
            <Image src={logo} alt="deja-logo"/>
          </Link>
          <MainNav data={categories} />
          <NavbarActions/>
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;