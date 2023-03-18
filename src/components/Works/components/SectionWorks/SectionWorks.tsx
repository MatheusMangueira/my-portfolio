const myWorks = [
  {
    router: "https://github.com/MatheusMangueira/Teamsoft",
    id: "1",
    image:
      "https://media.discordapp.net/attachments/949389628413206589/1071213149568647178/image_6.png",
    title: "Challenge - Teamsoft",
    description: "Challenge for the selection process of the company Teamsoft",
  },
  {
    router: "https://blog.hackingforce.com.br/",
    id: "2",
    image:
      "https://media.discordapp.net/attachments/949389628413206589/1071213150000648192/image_7.png",
    title: "Blog - HF",
    description: "Blog developed for the cyber security company Hacking Force.",
  },
];

type Props = {
  id?: string;
  router?: string;
  title?: string;
  description?: string;
  image?: string;
};

export const SectionWorks = ({
  id,
  router,
  image,
  title,
  description,
}: Props) => {
  return (
    <div className="w-full flex justify-center items-start  ">
      <a
        href={router}
        target={router === "" ? "_self" : "_blank"}
        key={id}
        className="w-full rounded-xl border-b-8 border-accent shadow-lg shadow-[#c5c5c5]
        transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-95 hover:bg-accent"
        rel="noreferrer"
      >
        <div className="">
          <div className="p-3 relative">
            <img className=" rounded-xl w-full" src={image} alt="text" />
            <div className="absolute bottom-[-5px] flex justify-start items-center p-3 left-3 h-[30px] bg-black opacity-90 w-[full] rounded-lg">
              <p className="text-white text-sm w-full ">{title}</p>
            </div>
          </div>
          <div className="w-full p-3 mt-3 min-h-[100px] ">
            <p className="text-md text-black font-roboto from-neutral-900 w-full">
              {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

{
  /* <div className="w-full flex flex-wrap justify-center items-center "> */
}
//   {myWorks.map((work) => (
//     <div
//       key={work.id}
//       className="mx-0 sm:mx-5 my-5
//     border-2 border-accent
//     transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-primary
//     "
//     >
//       <a
//         className="hover:opacity-60 w-full relative"
//         href={work.router}
//         target="_blank"
//         rel="noreferrer"
//       >
//         {work.image}
//       </a>
//     </div>
//   ))}
// </div>
