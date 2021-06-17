import styled from 'styled-components';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import db from "../firebase";

const Details = (props) =>{
    const {id} = useParams();
    const[detailData, setDetailData] = useState({});
    useEffect(() => {
        db.collection("movies")
          .doc(id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setDetailData(doc.data());
            } else {
              console.log("no such document in firebase 🔥");
            }
          })
      }, [id]);
    return(
        <Container>
            <Background>
             <img src= {detailData.backgroundImg}/>
          
            </Background>

            <ImageTitle>
            <img src= {detailData.titleImg}/>
            </ImageTitle>

            
            <Controls>
                <button class="massive ui inverted labeled icon button">
                    <i class="play icon"></i>
                    Play
                </button>
                <button class="massive ui inverted labeled icon button">
                    <i class="play icon"></i>
                    Trailer
                </button>
                <button class="circular ui massive icon button">
                    <i class="add icon"/>
                </button>
                <button class="circular massive ui icon button">
                    <i class="users icon"/>
                </button>
            </Controls>
            <Subtitle>
                {detailData.subTitle}
            </Subtitle>
            <Description>
                {detailData.description}
            </Description>

        </Container>
    );
};

export default Details;

const Container = styled.div`
 position: relative;
 min-height: calc(100vh - 250px);
 overflow: hidden;
 display: block;
 top:72px;
 padding: 0 calc(3.5vw + 5px);

`;

const Background = styled.div`
 left:0px;
 right:0px;
 top:0px;
 opacity: 0.8;
 position:fixed;
 z-index: -1;

 img{

     width:100%;
     height:100vh;

 }

`;

const ImageTitle = styled.div`
  display:flex;
  align-items: flex-end;
  margin-top:20px;
  justify-content: flex-start;
  padding-bottom:24px;
  width:100%;

  img{
      width:35vw;

  }


`;


const Controls = styled.div`
 margin:24px 0;

`;

const Subtitle = styled.div`
 font-size: 20px;

`;

const Description = styled.div`
 margin-top: 20px;
 font-size: 25px;
 line-height:1.4;


`;