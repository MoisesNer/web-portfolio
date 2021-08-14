import styled from 'styled-components'
import defaultImg from '../../images/defaultBbg.jpeg'

const StyledHero = styled.header`
    min-height: 100vh;
    background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
    displey: flex;
    align-items: center;
    justify-content: center
`;

export default StyledHero;