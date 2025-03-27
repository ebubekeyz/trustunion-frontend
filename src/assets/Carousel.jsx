import styled from 'styled-components';

const Wrapper = styled.section`
 /* .hero {
  height: 70vh;
  background: var(--clr-primary-5);
}

.hero-banner {
  
  padding: 0 3rem;
  color: var(--clr-white);
} */



.hero {
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(44, 174, 186, 0.7)), to(rgba(0, 0, 0, 0.7))),
      url('/pers.jpg') center/cover no-repeat scroll;
    background: -o-linear-gradient(rgba(0,0,0, 0.5), rgba(0, 0, 0, 0.7)),
      url('/pers.jpg') center/cover no-repeat scroll;
    background: linear-gradient(rgba(0,0,0, 0.5), rgba(0, 0, 0, 0.7)),
      url('/pers.jpg') center/cover no-repeat scroll;
   
  }
  .hero-banner {
    padding: 0;

  }
 
`;

export default Wrapper;
