import { Link } from 'react-router-dom'

import { Container } from './styles';

export function Card({img, alt, url, ...rest}) {
    return (
        <Container {...rest}>
            <Link to={url}>
                <img src={img} alt={alt} />
            </Link>
        </Container>
    )
}
