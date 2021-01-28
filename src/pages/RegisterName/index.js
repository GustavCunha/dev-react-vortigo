import React, { useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import FooterButton from '../../components/FooterButton';
import Title from '../../components/Title';

import backgroundImage from '../../images/bg.png';
import btnNext from '../../images/next.png';

import { 
    Background,
    BoxInput,
    Button,
    Container,
    Input,
    Label,
} from './styles';

export default function RegisterName(){

    const navigation = useNavigation();
    const [name, setName] = useState('');

    function handleToPage(){
        if(name === null || name === ""){
            alert('Preencha o nome do Treinador!');
        }else{
            navigation.navigate('RegisterType', {nome: name})
        }
    }

    return(
        <Container>
            <Background source={backgroundImage}>
                
                <Title title="Let's meet each other first?"/>
                
                <BoxInput>
                    <Label>First we need to know your name...</Label>
                    <Input 
                        value={name}
                        onChangeText={setName}
                    />
                </BoxInput>

                <Button activeOpacity={0.5} onPress={handleToPage}>
                    <Image source={btnNext}/>
                </Button>
                {/* <FooterButton page="RegisterType" treinador={name}/> */}
            </Background>
        </Container>
    );
}