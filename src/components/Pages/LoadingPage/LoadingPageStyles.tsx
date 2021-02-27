import { css } from "emotion";

const Styles = {
    horizontalCentre: css`
        display: table;
        margin-left: auto;
        margin-right: auto;
        height: 100vh;
    `,
    verticalCentre: css`
        display: table-cell;
        vertical-align: middle;

        & h2 {
            font-family: Quicksand, sans-serif;
            text-align: center;
        }
    `
};

export default Styles;