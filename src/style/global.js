import { createGlobalStyle } from "styled-components";

import px2rem from "../utils/px2rem";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        max-width: ${px2rem(100)};
        margin: auto;
            
        color: ${ ({theme}) => theme.COLORS1.TXT};
      
        text-align: justify;
        font-weight: 400;
    
        font-size: ${px2rem(1.6)};
        font-family: 'Open Sans', sans-serif;
    
        line-height: ${px2rem(2.5)};

        padding-bottom: ${px2rem(1)};
    }

    h3 {
        font-weight: 700;

        margin-bottom: ${px2rem(1.5)};
    }

    ol {
        padding: ${px2rem(2)} ${px2rem(5)} ${px2rem(2)};
    }
`;
