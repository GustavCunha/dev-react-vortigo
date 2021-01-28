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
`;

export const BoxLogo = styled.View`
    align-items:center;
    flex: 1;
    margin-top: 50px;
`;

export const LogoPrimary = styled.Image``;

export const LogoSecondary = styled.Image``;

export const BoxButton = styled.View`
    align-items:center;
    margin: 10px;
`;

export const Btn = styled(RectButton)`
    background-color: #f11e76;
    width: 300px;
    height: 50px;
    align-items:center;
    justify-content: center;
    border-radius: 10px;
`;

export const BtnText = styled.Text`
    color: #FFF;
    font-size:24px;
`;

export const Footer = styled.View`
    align-items:flex-end;
    justify-content: flex-end;
    flex: 1;
    width: 100%;
`;

export const Image = styled.Image``;

