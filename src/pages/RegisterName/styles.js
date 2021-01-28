import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Background = styled.ImageBackground.attrs({
    resizeMode: 'cover',
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`;

export const BoxTitle = styled.View`
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    flex: 1;
    /* background-color: green; */
`;

export const BoxInput = styled.View`
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    flex: 1;
    /* background-color: red; */
`;


export const Label = styled.Text`
    color: #FFF;
    font-size: 22px;
    letter-spacing: 1px;
    margin-bottom: 20px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#FFF"
})`
    border-bottom-color: #FFF;
    border-bottom-width: 3px;
    margin: 10px 0;
    width: 100%;
    font-size: 18px;
    padding: 5px;
    color: #FFF;
`;

export const Button = styled.TouchableOpacity`
    margin: 5px;
`;