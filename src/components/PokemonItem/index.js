import React from 'react';
import { Container, PokeImage, PokeText, ViewImage, ViewText } from './styles';

export default function PokemonItem({dados}){
    return(
        <Container>
            <ViewImage>
                <PokeImage source={{uri: dados.thumbnailImage}}/>   
            </ViewImage>
            <ViewText>
                <PokeText>{dados.name}</PokeText>
            </ViewText>
        </Container>
    );
}