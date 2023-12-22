import { getRestaurantDetail } from '@/api/restaurant';
import Redirection from '@/components/client/Redirection';
import { CELEB } from '@/constants/celeb';
import { Metadata } from 'next';

interface Props {
  params: { restaurantId: string; celebId: string };
}

export async function generateMetadata({
  params: { restaurantId, celebId },
}: Props): Promise<Metadata> {
  const restaurant = await getRestaurantDetail({
    restaurantId: Number(restaurantId),
    celebId: Number(celebId),
  });

  return {
    openGraph: {
      title: restaurant.name,
      description: `${
        CELEB[Number(celebId) as keyof typeof CELEB]
      }이(가) 다녀간 맛집 ${restaurant.name}을 셀럽잇에서 확인해보세요.`,
      images: [
        `https://www.celuveat.com/images-data/webp/${restaurant.images[0].name}.webp`,
      ],
    },
  };
}

const RestaurantPage = ({ params: { restaurantId, celebId } }: Props) => {
  return (
    <div>
      <Redirection restaurantId={restaurantId} celebId={celebId} />
    </div>
  );
};

export default RestaurantPage;
