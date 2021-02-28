import { css } from "emotion";

const Styles = {
    requestAuthorStyles: css`
        font-family: Quicksand, sans-serif;
        text-align: center;
    `,
    requestBodyStyles: css`
        width: 80%;
        display: table;
        margin-left: auto;
        margin-right: auto;

        & h5 {
            font-family: Quicksand, sans-serif;
            font-weight: bold;
        }
    `,
    requestDescriptionStyles: css`
        font-family: Muli, sans-serif;
        font-size: 14pt;
        color: #333;
    `,
    offerHelpBtnStyles: css`
        padding: 16px 30px;
        font-size: 24pt;
        font-family: Quicksand, sans-serif;
        border-radius: 1rem;
        font-weight: bold;
        display: table;
        margin-left: auto;
        margin-right: auto;
    `
};

export default Styles;