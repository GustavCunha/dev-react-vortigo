import styled from 'styled-components/native';

export const ContainerItem = styled.View`
    margin: 10px;
    align-items: center;
    justify-content: center;
`;

export const ImageItem = styled.Image.attrs({
    elevation: 4
})`
    width: 75px;
    height: 75px;
`;

export const LabelItem = styled.Text`
    font-size: 20px;
    color: #000;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
`;