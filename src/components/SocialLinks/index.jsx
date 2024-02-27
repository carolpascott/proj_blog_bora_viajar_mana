import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Container } from './styles';

export function SocialLinks({...rest}) {
    return (
        <Container {...rest}>
            <div>
                <a href="https://github.com/carolpascott" target="_blank">
                <FaGithub />
                </a>
                <a href="https://www.instagram.com/carol_pascott/" target="_blank">
                <FaInstagram />
                </a>
                <a href="https://www.facebook.com/anacarolina.pascottdealmeida" target="_blank">
                <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/in/ana-carolina-pascott/" target="_blank">
                <FaLinkedin />  
                </a>
            </div>
        </Container>
    )
}
