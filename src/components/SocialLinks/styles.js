import styled from "styled-components";

import px2rem from "../../utils/px2rem";

export const Container = styled.div` 
    
    display: flex;
    justify-content: center;

    margin-top: ${px2rem(4)};
    
    svg {
        font-size:${px2rem(3)};
    }
`;
