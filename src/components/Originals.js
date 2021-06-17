import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import { selectOriginal } from '../features/movie/movieSlice';

const Originals = (props) =>{
   const movies = useSelector(selectOriginal);
    return(
        <Container>
            <h4>Originals</h4>
            <Content>
            {
                  movies && movies.map((movie, key) => (
                      <Wrap key={key} >
                          {movie.id}
                          <Link to={'/detail/' + movie.id}>
                            <img src={movie.cardImg} alt={movie.title}/>
                          </Link>  
                      </Wrap>
                          
                ))

            }          

            </Content>
        </Container>
    )

};

const Container = styled.div`
 padding: 0 0 26px;
 margin-top:30px;


`;

const Content = styled.div`
 display: grid;
 grid-gap:25px;
 grid-template-columns: repeat(4, minmax(0, 1fr));

`;

const Wrap = styled.div`
 padding-top:54%;
 border-radius:10px;
 cursor: pointer;
 overflow:hidden;
 position: relative;
 border:3px solid grey;

 img{
    position: absolute;
    height:100%;
    width:100%;
    top:0;
    display:block;
    object-fit:cover;
    transition:opacity 0.5s ease-in-out 0s;
    z-index:1;
   }

    &:hover{
        transform:scale(1.05);
        border:3px solid white;

    }
     
`;

export default Originals;