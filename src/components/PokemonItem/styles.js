import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-top-width: 0.5px;
`;

export const ViewImage = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
`;

export const PokeImage = styled.Image`
    width: 50px;
    height: 50px;
    background-color: #d1d1d1;;
    border-radius: 15px;
`;

export const ViewText = styled.View`
    flex:3;
`;
export const PokeText = styled.Text`
    color: #6e6e6e;
    font-size: 16px;
    font-weight: 700;
`;