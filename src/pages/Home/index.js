import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons';

import TypeItem from '../../components/TypeItem';
import PokemonItem from '../../components/PokemonItem';

import arrow from '../../images/arrow.png';

import { 
    BoxHeader,
    BtnOrder,
    BtnSearch,
    Container, 
    ContainerPoke, 
    Header, 
    HeaderPoke, 
    LabelHeader, 
    Main, 
    ScrollTypes, 
    SearchHeader, 
    Title 
} from './styles';
import api from '../../services/api';
import EmptyList from '../../components/EmptyList';

export default function Home({route}){

    const [ selectedType, setSelectedType ] = useState(`${route.params.type}`);
    const [ types, setTypes ] = useState([]);
    const [ pokemons, setPokemons ] = useState([]);
    const [ inputVisible, setInputVisible ] = useState(false);
    const [ searchPokemon, setSearchPokemon ] = useState('');


    function loadTypes(){
        fetch('https://vortigo.blob.core.windows.net/files/pokemon/data/types.json')
            .then((response) => response.json())
            .then((json) => setTypes(json.results))
            .catch((error) => console.error(error));
    }

    async function loadPokemons(){
        // console.log(route.params.type);
        const result = await api.get(`/pokemons?type=${selectedType}`);
        // console.log(result);
        setPokemons(result.data);
        // fetch('https://vortigo.blob.core.windows.net/files/pokemon/data/pokemons.json')
        //     .then((response) => response.json())
        //     .then((json) => setPokemons(json))
        //     .catch((error) => console.error(error));
    }

    useEffect(()=> {
        loadTypes();
        loadPokemons();
    },[]);


    const renderPokemon = ({item}) => {
        return(
            <PokemonItem dados={item} />
        )
    }

    function handleShowInput(){
        setInputVisible(true);
    }

    function handleHideInput(){
        setInputVisible(false);
    }

    async function handleChangeType(type){
        setSelectedType(type);
        await loadPokemons();
    }

    return(
        <Container>
            <Header>
                <View />
                <Title>Pokemon Finder</Title>
                <BtnSearch onPress={handleShowInput}>
                    <Feather name="search" size={24} color="#FFF" />
                </BtnSearch>

                {inputVisible && (
                    <SearchHeader
                        onChangeText={setSearchPokemon}
                        value={searchPokemon} 
                        placeholder="Search"
                        onBlur={handleHideInput}
                    />
                )}
            </Header>
            

            <Main>
                <ScrollTypes>
                    {types.map((item) => {
                        return(
                            <TouchableOpacity key={item.name} onPress={()=>handleChangeType(item.name)} activeOpacity={0.6}>
                                <TypeItem key={item.name} dados={item}/> 
                            </TouchableOpacity>
                        )
                    })}
                </ScrollTypes>

                <ContainerPoke>
                    <HeaderPoke>
                        <LabelHeader>Pokémon</LabelHeader>

                        <BoxHeader>
                            <LabelHeader>Name</LabelHeader>
                            <BtnOrder>
                                <Image source={arrow}/>
                            </BtnOrder>
                        </BoxHeader>
                    </HeaderPoke>

                    <ScrollView style={{flex:1}}>

                        {pokemons.filter(pokemon => pokemon.name.includes(searchPokemon)).map((item)=> {
                            
                            if(pokemons.length === 0 || pokemons === null){
                                return(
                                    <EmptyList />
                                )
                            }else{
                                return(
                                    <PokemonItem key={item.id} dados={item}/>
                                )
                            }
                        })}
                        
                    </ScrollView>

                    {/* <FlatList 
                        key="list"
                        data={pokemons}
                        keyExtractor={item => String(item.id)}
                        renderItem={renderPokemon}
                        showsVerticalScrollIndicator={false}
                    /> */}
                </ContainerPoke>
            </Main>
        </Container>
    );
}