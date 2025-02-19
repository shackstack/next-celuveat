import { getCelebs } from '@/api/celeb';
import { getPopularRestaurants } from '@/api/restaurant';
import CategoryList from '@/components/server/CategoryList';
import CelebProfile from '@/components/server/CelebProfile';
import RegionIcon from '@/components/server/RegionIcon';
import RestaurantCard from '@/components/server/RestaurantCard';
import { RECOMMENDED_REGION } from '@/constants/recommendedRegion';
import Link from 'next/link';
import { use } from 'react';

export default function Home() {
  const celebs = use(getCelebs());
  const popularRestaurants = use(getPopularRestaurants());

  return (
    <main className='w-full flex flex-col gap-4'>
      <section>
        <h4>셀럽 BEST</h4>
        <div className='pl-4 pr-4 flex gap-4 overflow-x-scroll hide-scroll'>
          {celebs.map((celeb) => (
            <Link key={celeb.id} href={`/result/celeb/${celeb.id}`}>
              <CelebProfile celeb={celeb} />
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h4>셀럽잇 추천 맛집!</h4>
        <div className='pl-4 pr-4 flex gap-4 overflow-x-scroll hide-scroll'>
          {popularRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              flexCol
            />
          ))}
        </div>
      </section>

      <section>
        <h4>어디로 가시나요?</h4>
        <div className='pl-4 pr-4 flex gap-4 overflow-x-scroll hide-scroll'>
          {Object.entries(RECOMMENDED_REGION).map((region) => (
            <Link key={region[0]} href={`/result/region/${region[0]}`}>
              <RegionIcon key={region[0]} region={region} />
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h4>카테고리</h4>
        <div className='w-full grid grid-cols-layout gap-4'>
          <CategoryList />
        </div>
      </section>
    </main>
  );
}
