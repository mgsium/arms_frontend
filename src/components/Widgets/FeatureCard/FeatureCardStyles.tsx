import { css } from "emotion";

const Styles = {
    featureCardStyles: css`
        border: 1px solid #DCDCDC;
        border-radius: 1rem;
        width: 100%;
        height: 100%;
        padding: 10px;
        margin: 10px;
        transition: all 0.25s;
        display: inline-block;

        & svg {
            fill: black;
            transition: all 0.25s;
        }

        & h5 {
            font-family: Quicksand, sans-serif;
            font-size: 18pt;
            font-weight: bold;
        }

        & .card-description {
            font-family: Muli, sans-serif;
            color: #666;
        }

        &:hover {
            cursor: pointer;
            background: whitesmoke;
            transform: scale(1.04);

            & svg {
                fill: red;
                stroke: red;
            }
        }
    `
};

export default Styles;