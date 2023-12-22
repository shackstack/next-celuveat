'use client';

import { useEffect } from 'react';

interface RedirectionProps {
  restaurantId: string;
  celebId: string;
}

const Redirection = ({ restaurantId, celebId }: RedirectionProps) => {
  useEffect(() => {
    window.location.href = `https://www.celuveat.com/restaurants/${restaurantId}?celebId=${celebId}`;
  }, []);

  return <div>Redirecting...</div>;
};

export default Redirection;
