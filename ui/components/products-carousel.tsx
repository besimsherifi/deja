

import 'react-multi-carousel/lib/styles.css';
import { Product } from "@/types";
import getProducts from "@/actions/get-products";
import ProductCard from "./ui/product-card";
import  {Carousel}  from '@/components/carousel';


interface ProductsCarouselProps {
    title: string;
    items: Product[];
}

const ProductsCarousel: React.FC<ProductsCarouselProps> = async ({ title, items }) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    

    return (
        <div>
            <Carousel responsive={responsive}>
            {items.map((product, index) => (
                    <div key={index}>
                        <ProductCard data={product} />
                    </div>
                ))}
              
            </Carousel>
        </div>
    );
}

export default ProductsCarousel;