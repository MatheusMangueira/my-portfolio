import { SectionWorks } from "./components/SectionWorks";
import { TitleWorks } from "./components/TitleWork";

import worksList from "./works-posts.json";

export const Works = () => {
  return (
    <div aria-label="works" className="py-10 lg:py-32 h-full w-full">
      <div className="px-5 xl:px-20 xl:mb-0 h-full ">
        <TitleWorks />
        <div className="flex justify-center items-center w-full mt-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">
            {worksList.map((post, index) => (
              <SectionWorks
                key={index}
                image={post.image}
                title={post.title}
                router={post.router}
                description={post.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <Swiper
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
</Swiper> */
}
