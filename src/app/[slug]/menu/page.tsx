import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ consumptionMethod: string }>;
}

const isComsunptionMethod = (consumptionMethod: string) => {
    return ["FOR_DELIVERY", "TO_SEARCH"].includes(consumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
    params,
    searchParams,
}: RestaurantMenuPageProps) => {
    const { slug } = await params
    const{consumptionMethod} = await searchParams;
    const restaurant  = await db.restaurant.findUnique({where: {slug}});
    if(!restaurant || !isComsunptionMethod(consumptionMethod)) {
        return notFound();
    }
    return ( 
    <div>
       <RestaurantHeader restaurant={restaurant} />
    </div>
);
}
 
export default RestaurantMenuPage;