import Image from 'next/image';
import { notFound } from 'next/navigation';

import { db } from '@/lib/prisma';

import ConsumptionMethodOption from './components/consumption-method-option';
interface RestaurantPageProps {
    params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({params}: RestaurantPageProps) => {
    const { slug } = await params
    const restaurant  = await db.restaurant.findUnique({where: {slug}});
    if(!restaurant) {
        return notFound();
    }
    return (
        <div className='flex h-screen flex-col items-center justify-center'>
            {/* LOGO E TITULO */}
            <div className="flex flex-col items-center gap-2">
                <Image src={restaurant.avatarImageUrl} alt={restaurant.name} width={82} height={82} />
                <h2 className="font-semibold">{restaurant.name}</h2>
            </div>
            {/* BEM VINDO */}
            <div className="pt-24 text-center space-y-2">
                <h3 className="text-2xl font-semibo">
                    Seja Bem-Vindo!
                </h3>
                <p className="opacity-55">
                    Escolha como prefere aproveitar  sua refeição. Estamos a oferecer praticidade e sabor em cada detalhe!
                </p>
            </div>
            <div className="pt-14 grid gap-4 grid-cols-2">
               <ConsumptionMethodOption
                slug={slug}
                option='FOR_DELIVERY'
                imageUrl="/for_delivery"
                imageAlt="Para Entrega"
                buttonText="Para Entrega"
                />
               <ConsumptionMethodOption
                slug={slug}
                option='TO_SEARCH'
                imageUrl="/tosearch.png"
                imageAlt="Para Buscar"
                buttonText="Para Buscar"
                />
            </div>
        </div>

    );
};


 
export default RestaurantPage;