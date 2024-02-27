import styled from "styled-components";

import px2rem from "../../utils/px2rem";

export const Container = styled.div`

    height: ${px2rem(7)};
    
    * {
        padding: 0;
    }
    
    h2 {
        text-align: center;
        font-weight: 700;    
        font-size: ${px2rem(2)};
        font-family: 'Open Sans', sans-serif;
        color: ${ ({theme}) => theme.COLORS1.H1_CARD};

        line-height: ${px2rem(3)};
        
        &:hover {
            transform: scale(1.2);
            cursor: pointer;
        }
    }

    a {
       text-decoration: none; 
    }

    p {
        text-align: center;
        font-weight: 400;    
        font-size: ${px2rem(1.4)};
        font-family: 'Open Sans', sans-serif;
        color: ${ ({theme}) => theme.COLORS1.P_CARD};

        line-height: ${px2rem(2)};
    }    
`;
