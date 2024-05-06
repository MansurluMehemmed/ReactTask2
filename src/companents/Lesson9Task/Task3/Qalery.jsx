import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export const Qalery = () => {
  return (
    <div style={{width:'300px'}}>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="https://picsum.photos/id/237/250" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
};
