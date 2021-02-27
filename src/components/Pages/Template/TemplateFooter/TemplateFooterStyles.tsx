import { css } from "emotion";

const Styles = {
    templateFooterStyles: css`
        font-family: Quicksand, sans-serif;
        border-top: 1px solid #DCDCDC;
        font-size: 10pt;
        background: white;

        & .navbar-brand {
            font-size: 11pt;
            font-weight: bold;
        }
    `
};

export default Styles;