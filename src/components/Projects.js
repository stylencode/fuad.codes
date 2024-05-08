import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GalleryItem from "./GalleryItem";
import CardItem from "./CardItem"

function Projects({projects}) {

  const projectsData = projects;
  console.log(projectsData);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="projects" className="mb-20">
      <h2 className="mb-5">
        Recent Work
      </h2>
      <div className="mt-5">
        <Slider {...settings}>
            {projectsData.map((d) => (
              <CardItem d={d}/>
            ))}
         </Slider>   
      </div>
    </div>
  );
}

export default Projects;


