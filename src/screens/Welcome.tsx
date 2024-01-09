import React, { FunctionComponent } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors/colors";


const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-betwen;
    width: 100%;
    height: 100%;
`;

const TopSection = styled.View`
    width: 100%;
    flex:1;
    max-height: 55%;
`;

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`;

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex: 1;
`;


import background from "../assets/bgs/background_v1.png";

const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar barStyle={"dark-content"} />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>
                <BottomSection></BottomSection>
            </WelcomeContainer>
        </>
    );
}

export default Welcome;