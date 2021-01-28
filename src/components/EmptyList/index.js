import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: red;
    flex: 1;
`;

export const Text = styled.Text``;

export default function EmptyList(){
    <Container>
        <Text>Não há pokémons desse tipo!</Text>
    </Container>
}