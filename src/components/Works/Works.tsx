import { TitleWorks } from "./components/TitleWork";
import postsWorks from "./works-posts.json";
import { SectionWorks } from "./components/SectionWorks";

import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, A11y, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import "./index.css";

export const Works = () => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth > 1000);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-10 lg:py-32 h-full w-full">
      <div className="px-5 xl:px-20 xl:mb-0 h-full ">
        <TitleWorks />
        <div className="mt-[50px] ">
          <Swiper
            className="h-[450px]"
            modules={[Autoplay, A11y, Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletClass: "swiper-pagination-bullet",
            }}
            spaceBetween={50}
            slidesPerView={mobile ? 2 : 1}
            loop={true}
            autoplay={true}
          >
            {postsWorks.map((post, index) => (
              <SwiperSlide key={index}>
                <SectionWorks
                  id={post.id}
                  image={post.image}
                  title={post.title}
                  router={post.router}
                  description={post.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
