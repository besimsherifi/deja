import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import ProductsCarousel from "@/components/products-carousel";
import Container from "@/components/ui/container";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import ring from '../../assets/ring.jpg'
import ring2 from '../../assets/ring-overlay.jpg'
import neklace from '../../assets/neklace.jpg'
import neklaceOverlay from '../../assets/neklace-overlay.jpg'
import bracelet from '../../assets/bracelet.jpg'
import braceletOverlay from '../../assets/bracelet-overlay.jpeg'
import earrings from '../../assets/earrings.jpeg'
import earringsOverlay from '../../assets/earrings-overlay.jpg'
import Image from "next/image";



export const revalidate = 0;

const HomePage = async () => {


    const billboard = await getBillboard("2f70e1ab-58f3-4b80-b619-c9efb63f70d6")
    const products = await getProducts({ isFeatured: true })
    const allNew = await getProducts({ categoryId: '337b905e-d5cf-47e1-8274-ff8f25b2b3bb' })

    return (
        <>
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard} />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 px-4 justify-center">
                        <div className="container cursor-pointer border-l border-black  border-t border-b">
                            <Image src={ring} alt="ring" className="image max-w-lg" />
                            <div className="overlay">
                                <Image src={ring2} alt="ring" className="image max-w-lg" />
                            </div>
                            <p className="absolute bottom-[8px] headline py-[15px] pl-[10px]">Rings</p>
                        </div><div className="container cursor-pointer border-l border-black border-t border-b">
                            <Image src={neklace} alt="ring" className="image " />
                            <div className="overlay">
                                <Image src={neklaceOverlay} alt="ring" className="image max-w-lg" />
                            </div>
                            <p className="absolute bottom-[8px] headline py-[15px] pl-[10px]">Neklace</p>
                        </div><div className="container cursor-pointer border-l border-black border-t border-b">
                            <Image src={bracelet} alt="ring" className="image max-w-lg" />
                            <div className="overlay">
                                <Image src={braceletOverlay} alt="ring" className="image max-w-lg" />
                            </div>
                            <p className="absolute bottom-[8px] headline py-[15px] pl-[10px]">Bracelet</p>
                        </div><div className="container cursor-pointer border-l border-black border-t border-b">
                            <Image src={earrings} alt="ring" className="image max-w-lg" />
                            <div className="overlay">
                                <Image src={earringsOverlay} alt="ring" className="image max-w-lg" />
                            </div>
                            <p className="absolute bottom-[8px] headline py-[15px] pl-[10px]">Rings</p>
                        </div>
                    </div>

                    <div className="ml-7">
                        <h1 className="text-4xl font-bold mb-4">NEW IN</h1>
                        <Link href='/category/337b905e-d5cf-47e1-8274-ff8f25b2b3bb'><button className="border border-black py-2 px-4 text-[14px] my-4">SHOP ALL NEW</button></Link>
                        <ProductsCarousel title="Show in new" items={allNew} />
                    </div>
                    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                        <ProductList title="Featured Products" items={products} />
                    </div>
                </div>
            </Container>
        </>
    );
}



export default HomePage;