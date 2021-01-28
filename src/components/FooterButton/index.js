import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styled from 'styled-components/native';

import btnNext from '../../images/next.png';

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    margin:10px;
`;

export const Button = styled.TouchableOpacity``;



export default function FooterButton({page, treinador}){
    const navigation = useNavigation();

    function handleToPage(){
        if(treinador === null || treinador === ""){
            alert('Preencha o nome do Treinador!');
        }else{
            navigation.navigate(page, {nome: treinador})
        }
        
    }

    return(
        <Container>
            <Button activeOpacity={0.5} onPress={handleToPage}>
                <Image source={btnNext}/>
            </Button>
        </Container>
    );
}