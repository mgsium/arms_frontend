import { css } from "emotion";

const Styles = {
    divtest: css`
        height: 100px;
        width: 80%;
        border-size: 1px;
        border-style: solid;
        border-color: black;
        color: black;
        border-radius: 5px;
        text-align: center;
        margin: 0;
        transition: all 0.25s;
        font-size: 50px;

        &:hover {
            transform: scale(1.04);
            background: whitesmoke;
            cursor: pointer;
        }
    `,
    wrap: css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
        width: 100%;
        top: 10%;
        align-items: center;
        margin: 0px;
        padding: 0px;
    `,
    mentorReqCardStyles: css`
    border: 1rem;
    transition: all 0.25s;
    border: 1px solid #DCDCDC;
    border-radius: 1rem;
    padding: 20px;
    margin: 10px;

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