import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView.attrs({
    paddingTop: Constants.statusBarHeight
})`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #18c7a2;
`;

export const Header = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
`;

export const SearchHeader = styled.TextInput`
    position: absolute;
    top: 15%;
    text-align: center;
    height: 45px;
    width: 100%;
    background-color: #f0f0f0;
    align-self: center;
    justify-content: center;
    font-size: 18px;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #FFF;
    text-align: center;
`;

export const BtnSearch = styled.TouchableOpacity`
    margin-right: 15px;
`;

export const Main = styled.View`
    background-color: #FFF;
    flex: 1;
    width: 100%;
`;

export const ScrollTypes = styled.ScrollView.attrs({
    horizontal: true
})`
    flex: 1;
    max-height: 150px;
`;

export const ContainerPoke = styled.View`
    flex: 3;
`;

export const HeaderPoke = styled.View`
    padding: 0 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const LabelHeader = styled.Text`
    color: #979797;
    font-weight: bold;
    font-size: 16px;
`;

export const BoxHeader = styled.View`
    flex-direction: row;
    align-items:center;
    justify-content: space-around;
`;

export const BtnOrder = styled.TouchableOpacity`
    margin-left: 7px;
`;
