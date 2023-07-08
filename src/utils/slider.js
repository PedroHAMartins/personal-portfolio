// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';

// Import Swiper styles
import 'swiper/css';
import '../style/components/_projects.sass'

const Slider = ({personalProjects}) => {

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  if (isMobile) {
    return (
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        loop
        centeredSlides
      >
        {personalProjects.map((projects => (
          <SwiperSlide key={projects.name}>
            <div className='project-card'>
              <a href={projects.link}>
                <h2>{projects.name}</h2>
                <img src={projects.image} alt="" srcset="" />
                <p>{projects.description}</p>
              </a>
            </div>
          </SwiperSlide>
        )))}
      </Swiper>
    );
  }

  if (!isMobile) {
    return (
      <Swiper
        spaceBetween={100}
        slidesPerView={2}
        loop
        centeredSlides
      >
        {personalProjects.map((projects => (
          <SwiperSlide key={projects.name}>
            <div className='project-card'>
              <a href={projects.link}>
                <h2>{projects.name}</h2>
                <img src={projects.image} alt="" srcset="" />
                <p>{projects.description}</p>
              </a>
            </div>
          </SwiperSlide>
        )))}
      </Swiper>
    );
  };
  }

export default Slider