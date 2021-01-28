import React, { useRef, useEffect, useState } from 'react';
import {Feather} from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';

import Title from '../../components/Title';
import FooterButton from '../../components/FooterButton';

import backgroundImage from '../../images/bg.png';
import close from '../../images/close.png';
import radioOff from '../../images/radio-off.png';
import radioOn from '../../images/radio-on.png';
import btnNext from '../../images/next.png';

import { 
    Background, 
    BoxInput, 
    BtnFooterText, 
    ButtonFooterModal, 
    ButtonHeaderModal, 
    ButtonNext, 
    ButtonReturn, 
    Container, 
    ContainerFooterModal, 
    ContainerModal, 
    ItemImage, 
    ItemRadioButton, 
    ItemRow, 
    ItemText, 
    ItemType, 
    Label, 
    MainModal, 
    SelectView,
    TextSelected,
    TitleModal,
} from './styles';

export default function RegisterType({route}){
    const navigation = useNavigation();
    const modalizeRef = useRef(null);

    const [ types, setTypes ] = useState([]);
    const [ selectedType, setSelectedType ] = useState('');

    useEffect(()=> {
        function loadTypes(){
            fetch('https://vortigo.blob.core.windows.net/files/pokemon/data/types.json')
                .then((response) => response.json())
                .then((json) => setTypes(json.results))
                .catch((error) => console.error(error));

            // console.log(types);
        }

        loadTypes();
    },[]);

    function handleToPage(){
        if(selectedType === null || selectedType === ""){
            alert('Escolha um tipo de Pokémon!');
        }else{
            navigation.navigate('Home', {type: selectedType})
        }
    }

    function handleSelected(name){
        setSelectedType(name);
    }

    function openModal(){
        modalizeRef.current?.open();
    }

    function closeModal(){
        modalizeRef.current.close();
    }

    const renderHeaderModal = () => (
        <ContainerModal>
            <TitleModal>Select your favorite pokémon type</TitleModal>

            <ButtonHeaderModal onPress={closeModal}>
                <Image source={close}/>
            </ButtonHeaderModal>
        </ContainerModal>
    );

    const renderFooteModal = () => (
        <ContainerFooterModal>
            <ButtonFooterModal onPress={closeModal}>
                <BtnFooterText>Confirm</BtnFooterText>
            </ButtonFooterModal>
        </ContainerFooterModal>
    );

    return(
        <Container>
            <Background source={backgroundImage}>
                <ButtonReturn onPress={()=> navigation.goBack()}>
                    <Feather name="chevron-left" size={48} color="#FFF"/>
                </ButtonReturn>

                <Title title={`Hello, trainer ${route.params.nome}!`}/>

                <BoxInput>
                    <Label>...now tell us wich is your favorite Pokémon type:</Label>
                    <SelectView>
                        <TextSelected>{selectedType}</TextSelected>

                        <TouchableOpacity onPress={openModal}>
                            <Feather name="chevron-down" size={36} color="#FFF"/>
                        </TouchableOpacity>
                    </SelectView>
                </BoxInput>

                <ButtonNext activeOpacity={0.5} onPress={handleToPage}>
                    <Image source={btnNext}/>
                </ButtonNext>
                {/* <FooterButton page="Home"/> */}

                <Modalize
                    ref={modalizeRef}
                    snapPoint={450}
                    modalHeight={450}
                    HeaderComponent={renderHeaderModal}
                    FooterComponent={renderFooteModal}
                    withHandle={false}
                >
                    <MainModal>

                        {types.map((item) => {
                            return(
                                <ItemType key={item.name}>
                                    <ItemRow>
                                        <ItemImage source={{uri: item.thumbnailImage}} />
                                        <ItemText>{item.name}</ItemText>
                                    </ItemRow>
                                    <ItemRadioButton onPress={() => handleSelected(item.name)}>
                                        {selectedType === item.name ? 
                                            <Image source={radioOn}/> : 
                                            <Image source={radioOff}/>
                                        }
                                    </ItemRadioButton>
                                </ItemType>
                            )
                        })}
                    </MainModal>

                </Modalize>
            </Background>
        </Container>
    );
}