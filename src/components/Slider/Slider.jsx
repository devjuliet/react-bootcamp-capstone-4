import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import Loading from "../Loading";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
  const { data, isLoading } = useFeaturedBanners();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Carousel>
      {data.results.map((banner) => (
        <div key={banner.id}>
          <img alt={banner.data.alt} src={banner.data.main_image.url} />
          <p className="legend">{banner.data.title}</p>
        </div>
      ))}
    </Carousel>
  );
}
