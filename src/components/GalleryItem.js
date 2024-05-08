import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GalleryItem({d}) {

  return (

  <div className="bg-white h-[250px] text-black mr-2">
      <div className="rounded-t-xl bg-indigo-400 flex justify-center items-center">
        <img src={d.img} alt="" className="h-44 w-44 rounded-all " /> 
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4 bg-red-600 rounded-b-xl">
        <p className="text-xl font-semibold ">{d.name}</p>
        <p>{d.review}</p>
      </div>
  </div>

  );
}
