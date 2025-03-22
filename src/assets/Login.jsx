import styled from 'styled-components';

const Wrapper = styled.section`
  .hero {
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(44, 174, 186, 0.7)), to(rgba(0, 0, 0, 0.7))),
      url('/pers1.avif') center/cover no-repeat scroll;
    background: -o-linear-gradient(rgba(0,0,0, 0.5), rgba(0, 0, 0, 0.7)),
      url('/pers1.avif') center/cover no-repeat scroll;
    background: linear-gradient(rgba(0,0,0, 0.5), rgba(0, 0, 0, 0.7)),
      url('/pers1.avif') center/cover no-repeat scroll;
   
   
  }
  .hero-banner {
    padding: 0;

  }

  .login {
    display: hidden;
  }

`;

export default Wrapper;
