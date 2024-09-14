import { Link } from 'react-router-dom'

import styled from 'styled-components'

import px2rem from "../../utils/px2rem";

export const Container = styled.div`
    
    max-width: ${px2rem(35)};
    padding: ${px2rem(1)};
    margin: auto;

    background-color: ${ ({theme}) => theme.COLORS1.BG};
        
    header {
        height: ${px2rem(155)};

        h1 {
            text-align: center;
            font-weight: 700;

            font-size: ${px2rem(4)};
            font-family: 'Montserrat', sans-serif;
            color: ${ ({theme}) => theme.COLORS1.H1};

            line-height: ${px2rem(5)};

            padding: ${px2rem(2)} ${px2rem(.5)} ${px2rem(2)};
        }

        /* h2 {
            text-align: center;
            font-weight: 700;    
            font-size: ${px2rem(2)};
            font-family: 'Open Sans', sans-serif;
            color: ${ ({theme}) => theme.COLORS1.HD};

            line-height: ${px2rem(3)};
        } */

        p {
            color: ${ ({theme}) => theme.COLORS1.H1};

            line-height: ${px2rem(2)};

            padding: ${px2rem(1)} ${px2rem(.5)} ${px2rem(1)};
        }

        p a,
        span {
            text-decoration: none;
            font-weight: 600;
            color: ${ ({theme}) => theme.COLORS1.H1};
        }
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;

        img:hover {
            transform: scale(1.05);
            cursor: pointer;
        }
    }
        
    /* *************************************** */
    /* *********** desktop version *********** */
    /* *************************************** */

    @media (min-width: 700px) {
        
        max-width: ${px2rem(100)};
        margin: auto;
        
        header {
            width: ${px2rem(72)};
            margin: auto;

            height: ${px2rem(100)};
            padding-top: ${px2rem(4)};
        }

        main {
            display: grid;
            grid-template-columns: auto auto auto;               
        }
    }
`;
