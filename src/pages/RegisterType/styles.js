import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Background = styled.ImageBackground.attrs({
    resizeMode: 'cover',
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`;

export const BoxInput = styled.View`
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    flex: 1;
    /* background-color: red; */
`;

export const Label = styled.Text`
    color: #FFF;
    font-size: 22px;
    letter-spacing: 1px;
    margin-bottom: 20px;
`;

export const SelectView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom-color: #FFF;
    border-bottom-width: 3px;
    padding: 5px;
`;

export const TextSelected = styled.Text`
    font-size: 18px;
    color: #FFF;
    text-transform: capitalize;
`;

export const ButtonReturn = styled.TouchableOpacity`
    position: absolute;
    top: 5%;
    left: 5%;
`;

export const ButtonNext = styled.TouchableOpacity`
    margin: 5px;
`;

// -=-=-=-=- Cabeçalho do Modal -=-=-=-=- 
export const ContainerModal = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
`;

export const TitleModal = styled.Text`
    color: #000;
    font-size: 16px;
    font-weight: bold;
`;

export const ButtonHeaderModal = styled.TouchableOpacity``;

export const ContainerFooterModal = styled.View`
    align-items:center;
    justify-content: center;
`;

export const ButtonFooterModal = styled(RectButton)`
    background-color: #f11e76;
    width: 300px;
    height: 50px;
    align-items:center;
    justify-content: center;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const BtnFooterText = styled.Text`
    color: #FFF;
`; 

// -=-=-=-=- Corpo do Modal -=-=-=-=-

export const MainModal = styled.ScrollView``;

export const ItemType = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    margin: 10px;
`;

export const ItemRow = styled.View`
    flex-direction: row;
    align-items:center;
`;

export const ItemImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: red;
    align-items: center;
    justify-content: center;
`;

export const ItemText = styled.Text`
    color: #000;
    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
    margin-left: 15px;
`;

export const ItemRadioButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5
})``;



