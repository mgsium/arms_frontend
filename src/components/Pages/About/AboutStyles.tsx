import { css } from "emotion";

const Styles = {
    mentorReqCardStyles: css`
        border: 1rem;
        transition: all 0.25s;
        border: 1px solid #DCDCDC;
        border-radius: 1rem;
        padding: 40px;
        margin: 10px;

        & p {
            font-family: Muli, sans-serif;
            color: #666;
            margin-bottom: 0;
            margin-top: 20px;
            font-size: 14pt;
        }

        & h2 {
            font-family: Quicksand, sans-serif;
            font-weight: bold;
        }

        &:hover {
            transform: scale(1.04);
            background: whitesmoke;
            cursor: pointer;
        }
    `
    
};

export default Styles;