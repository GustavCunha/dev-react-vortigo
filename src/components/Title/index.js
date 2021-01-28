import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    flex: 1;
`;

export const Text = styled.Text`
    color: #FFF;
    font-size: 28px;
    letter-spacing: 0.5px;
    line-height: 30px;
`;

export default function Title({title}){
    return(
        <Container>
            <Text>{title}</Text>
        </Container>
    );
}