import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    
    return (
        <div className=" overflow-hidden">
            <div style={{backgroundImage:`url(${data?.imageUrl})`}} className=" relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
                <div className="h-full w-full flex flex-col justify-end items-center text-center gap-y-8 pb-[120px]">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
                        {data.label.toUpperCase()}
                    </div>
                    <p className="text-white uppercase underline cursor-pointer">Shop Now</p>
                </div>
            </div>
        </div>
    );
}

export default Billboard;