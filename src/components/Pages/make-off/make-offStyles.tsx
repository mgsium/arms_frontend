import { css } from "emotion";

const Styles = {
    wrap: css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
        width: 100%;
        top: 10%;
        align-items: center;
        vertical-align: text-top;
        margin: 0px;
        padding: 0px;
        input:focus {outline:none;}
    `,
    input: css`
        position: relative;
        width: 20%;
        border-radius: 40px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        margin-bottom: 10px;
    `,
    button: css`
        border-radius: 15px;
        padding-left: 15px;
        padding-right: 15px;
        input:focus {outline:none;}
        background-color: white;
        &:hover {
            transform: scale(1.04);
            background: whitesmoke;
            cursor: pointer;
        }
    `,
    formStyles: css`

    `,
    divtest: css`
        height: 100px;
        width: 80%;
        border: 2px solid black;
        color: black;
        border-radius: 30px;
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
};

export default Styles;