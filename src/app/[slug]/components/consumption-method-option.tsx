import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsuptionMethodOptionProps {
    slug: string;
    imageUrl: string;
    imageAlt: string;
    buttonText: string;
    option: ConsumptionMethod;
}


const ConsuptionMethodOption = ({
    slug,
    imageAlt,
    imageUrl,
    buttonText,
    option,
}: ConsuptionMethodOptionProps)  => {
    return ( 
        <Card>
            <CardContent className='flex flex-col items-center gap-8 py-8'>
                <Image src={imageUrl} alt={imageAlt} width={78} height={80}></Image>
    
                <Button variant="secondary" className="rounded-full" asChild>
                    <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
                    {buttonText}
                    </Link>
                </Button>
            </CardContent>
        </Card> 
    );
}
 
export default ConsuptionMethodOption;