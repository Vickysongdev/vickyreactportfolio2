import '../TestimonialComp/Testimonials.css'

import Avt1 from '../../Asset/db_paS-removebg-preview.png'
import Avt2 from '../../Asset/uae-removebg-preview.png'
import Avt3 from '../../Asset/GOP_H_P-removebg-preview.png'
import Avt4 from '../../Asset/navyblu_sut_seatdwn-removebg-preview.png'


// import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const data = [
  {
    avatar: Avt1,
    name: "VickyTech",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, perspiciatis libero ipsa voluptatibus, fuga, minima quo maxime quis voluptatum repudiandae ut veniam deleniti ipsum. A possimus magni vel nobis perferendis!"
  },
  {
    avatar: Avt2,
    name: "VickyTech",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, perspiciatis libero ipsa voluptatibus, fuga, minima quo maxime quis voluptatum repudiandae ut veniam deleniti ipsum. A possimus magni vel nobis perferendis!"
  },
  {
    avatar: Avt3,
    name: "VickyTech",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, perspiciatis libero ipsa voluptatibus, fuga, minima quo maxime quis voluptatum repudiandae ut veniam deleniti ipsum. A possimus magni vel nobis perferendis!"
  },
  {
    avatar: Avt4,
    name: "VickyTech",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, perspiciatis libero ipsa voluptatibus, fuga, minima quo maxime quis voluptatum repudiandae ut veniam deleniti ipsum. A possimus magni vel nobis perferendis!"
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review For Clients</h5>
      <h2>Testimonials</h2>

      <Swiper navigation={true} modules={[Navigation]} className="container testimonials__container mySwiper">

      {
          data.map(({avatar, name, review}, index)=>{
            return(
              
              
         <SwiperSlide  key={index}>
         <div  className="testimonial">
           <div className="client__aVatar">
             <img src={avatar} alt="name" />
            
             
           </div>
           <h5  className="client__name">{name}</h5> 
             <small  className="client__review">{review}</small>
         </div>
         
       
       </SwiperSlide> 
            )
          })
        }
       
      </Swiper>


      </section>
  )
}

export default Testimonials