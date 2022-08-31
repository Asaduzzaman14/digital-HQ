import styled from "styled-components";

export const LogoContainer = styled.div`
   
    padding: 20px;
    display: grid;
    grid-template-columns:   repeat(auto-fit, minmax(70px, 1fr));
    justify-items: center;
    align-items: center;
    grid-gap: 10px;

   

    img{
        width: 70px;
    }
`
export const TrustedCompany = styled.div`
    background-color: #f4ede4;
    text-align: center;
    padding:30px 20px;
`

export const Content = styled.div`
    display:grid;
    grid-template-columns: repeat(1 ,1fr);
    grid-gap:10px 20px; 
    align-items: center;
    text-align: left;
    padding: 20px;
    &:nth-child(2){
        color: red;
    }
    
    video{
        max-width:500px;
        height:400px;
        order: 2;
        
    }
  
    @media (min-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }

`
export const CardContainerText = styled.div`
  &:nth-child(2) { /* this matches all even (2nd) CardContainerText */
  
  color:red;
  display: flex;
  order: 1;
  .boxes button:nth-of-type(1) {
    order: 4;
  }

  @media (min-width: 740px) {
    
      ${Content} {  /* this matches the Badge in the 2nd container for yor media query */
      /* color:red; */
     
      }
    }
  }
`