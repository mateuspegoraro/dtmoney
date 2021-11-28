import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52e54;
        --blue: #5429CC;
        --green: #33CC95;

        --blue-light: #6933FF;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #FFFFFF
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        // Padrao de font-size é 16px
        @media (max-width: 1080px) {
            font-size: 93.75%; // 16px (padrao) * 0,9375 = 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 16px (padrao) * 0,875 = 14px
        }
    }
    // Daqui pra frente utilizaremos o REM
    // REM = 1rem = font-size;

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // deixa as fontes mais nítidas
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;