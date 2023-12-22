import { RestaurantData } from '@/@types/api.types';

export const getRestaurantDetail = async ({
  restaurantId,
  celebId,
}: {
  restaurantId: number;
  celebId: number;
}): Promise<RestaurantData> => {
  const res = await fetch(
    `${process.env.BASE_URL}/restaurants/${restaurantId}?celebId=${celebId}`
  );

  return res.json();
};
