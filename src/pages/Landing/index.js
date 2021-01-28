import React from 'react';
import { useNavigation } from '@react-navigation/native';


import backgroundImage from '../../images/bg.png';
import logoPrimary from '../../images/pokemon-logo.png';
import logoSecondary from '../../images/finder.png';
import pikachu from '../../images/pikachu.png';

import { 
    Background,
    BoxLogo, 
    BoxButton, 
    Btn, 
    BtnText,
    Container,
    LogoPrimary,
    LogoSecondary,
    Footer,
    Image, 
} from './styles';

export default function Landing(){
    const navigation = useNavigation();

    function handleToRegisterName(){
        navigation.navigate('RegisterName');
    }

    return(
        <Container>
            <Background source={backgroundImage}>
                <BoxLogo>
                    <LogoPrimary source={logoPrimary}/>
                    <LogoSecondary source={logoSecondary}/>
                </BoxLogo>

                <BoxButton>
                    <Btn onPress={handleToRegisterName}>
                        <BtnText>Let's go!</BtnText>
                    </Btn>
                </BoxButton>

                <Footer >
                    <Image source={pikachu}/>
                </Footer>
            </Background>
        </Container>
    );
}