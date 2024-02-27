import { Link } from 'react-router-dom'

import { Container } from './styles';

export function TitleCard({title, phrase, url, ...rest}) {
    return (
        <Container {...rest}>
            <Link to={url}>
                <h2>{title}</h2>            
            </Link>
            <p>{phrase}</p>
        </Container>
    )
}
