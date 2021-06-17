import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
const ImgSlider = (props) =>{
    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidestoShow:1,
        slidestoScrool:1,
        autoplay:true,

    }

    return(

            <Carousel {...settings}>
                <Wrap>
                    <a>
                        <img src="/images/slider-badag.jpg"/>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-badging.jpg"/>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-scales.jpg"/>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-scale.jpg"/>
                    </a>
                </Wrap>
       
            </Carousel>

    );


};

const Carousel = styled(Slider)`
 margin-top:40px;

 & > button{
     opacity:0;
     z-index:1;
     height:100%;
     
     &:hover{
         opacity:1;
         transition: opacity 0.2s ease 0.2s;
     }

 }

 ul li button {
     &:before{
         font-size:10px;
     }
 }

 li.slick-active button:before{
     color:white;
 }

 .slick-list{
     overflow:initial;
 }

 .slick-prev {
     left: -75px;
 }
 .slick-next {
     right: -75px;
 }

`;
const Wrap = styled.div`
 border-radius:4px;
 cursor:pointer;
 a{
    border-radius:4px;
 }

 img{
    width:100%;
    height:100%;

 }
 &:hover{
     padding:0;
     border:4px solid white;
     transition-duration:0.3s;
 }



`;

export default ImgSlider;