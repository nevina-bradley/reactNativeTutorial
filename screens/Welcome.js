import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {InnerContainer, PageTitle, SubTitle, StyledFormArea, StyledButton, ButtonText, Line, WelcomeContainer, WelcomeImage, Avatar} from './../components/styles';

const Welcome = () => {

    return (
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/splash.png')} />
                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome!</PageTitle>
                    <SubTitle welcome={true}>Olga Simpson</SubTitle>
                    <SubTitle welcome={true}>olgasimp@gmail.com</SubTitle>
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/icon.png')} />
                        <Line />
                        <StyledButton onPress={() => {}}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

export default Welcome;