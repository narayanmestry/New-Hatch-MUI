import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderData from "../dummyData/SliderData";
import { Box, Typography } from '@mui/material';

const CustomSlider = () => {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1501 },
          items: 4.9,
          slidesToSlide: 4.9, 
        },
        laptop: {
          breakpoint: { max: 1500, min: 900 },
          items: 3.4,
          slidesToSlide: 3.4
        },
        mobile: {
          breakpoint: { max: 899, min: 0 },
          items: 2,
          slidesToSlide: 2 
        }
    };

    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {SliderData && SliderData.map((data , index) => {
                return (
                    <Box  key={index} sx={{ color: `${data.color}`, p: 1,borderRadius: 3,display:'flex', alignItems:'center',backgroundColor:`${data.bgcolor}`, mr:1.5, cursor:'pointer',}} >
                        <img  src={data.imagePath} alt="" />
                        <Typography sx={{fontSize:'17px', fontWeight:700, wordBreak:"break-word"}} paddingLeft={1}>{data.title}</Typography>
                    </Box>
                )
            })}
        </Carousel>
    );
}
 
export default CustomSlider;