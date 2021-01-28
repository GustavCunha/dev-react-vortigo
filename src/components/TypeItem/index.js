import React from 'react';
import { Image } from 'react-native';
import { ContainerItem, ImageItem, LabelItem } from './styles';

export default function TypeItem({dados}){

    return(
        <ContainerItem>
            <ImageItem source={{uri: dados.thumbnailImage}}/>
            <LabelItem>{dados.name}</LabelItem>
        </ContainerItem>
    );
}