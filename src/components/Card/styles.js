import styled from "styled-components";

import px2rem from "../../utils/px2rem";

export const Container = styled.div` 
        display: flex;
        flex-direction: column;
        align-items: center;

    img {
        
        width: ${px2rem(25)};

        border-radius: 50%;

        margin-bottom: ${px2rem(2)};        
    }
`;
