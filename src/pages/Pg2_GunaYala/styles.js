import styled from 'styled-components'

import px2rem from "../../utils/px2rem";

export const Container = styled.div`
    margin-top: ${px2rem(2)};
    padding: ${px2rem(2)};
    
    ol {
        padding: ${px2rem(3)};
    }
`;
