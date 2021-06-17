import styled from 'styled-components';

const Viewers = (props) =>{

    return(
        <Container>
        <Wrap>
          <img src="/images/viewers-disney.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-pixar.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-starwars.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-national.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source
              src="/videos/1564676296-national-geographic.mp4"
              type="video/mp4"
            />
          </video>
        </Wrap>
      </Container>

    );
};


const Container = styled.div`
 margin-top:30px;
 display: grid;
 grid-gap:25px;
 gap:25px;
 grid-template-columns: repeat(5, minmax(0 , 1fr));


`;

const Wrap = styled.div`
 cursor:pointer;
 border-radius:10px;
 border:3px solid grey;
 position: relative;
 overflow:hidden;
 img{
     display:block ;
     object-fit: cover;
     height:100%;
     width:100%;
     position: absolute;
     z-index:1;
     opacity:1;

 }

 video{
     height:100%;
     width: 100%;
     opacity:0;

 }

 &:hover{
     transform: scale(1.05);
     border:3px solid white;
     transition-duration: 0.1s;
     
     video{
         opacity:1;

     }
    
 }

`;

export default Viewers;