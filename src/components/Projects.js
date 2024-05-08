import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItem from "./CardItem";
import Project from "./Project";

function Projects({projects}) {

  const projectsData = projects;
  //console.log(projectsData);

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
      <div className="mt-5">
            <div class="columns-1 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8">
                <Project />
          </div>
        </div>
        
    </div>
  );
}

export default Projects;


