import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners"

export default function Slider() {
  const { data, isLoading } = useFeaturedBanners();

  if (isLoading) {
    return <div>{"..."}</div>;
  }
  return (
    <Carousel>
      {data.results.map((banner) => (
        <div key={banner.id}>
            <img alt={banner.data.alt} src={banner.data.main_image.url}/>
            <p className="legend">{banner.data.title}</p>
        </div>
      ))}
    </Carousel>
  );
}
