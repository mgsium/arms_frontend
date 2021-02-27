import { css } from "emotion";

const Styles = {
    templateBodyStyles: css`
        width: calc(100% - 40px);
        max-width: 1560px;
        min-height: calc(100vh - 56px);
        padding: 10px;

        & .page-header {
            font-family: Quicksand, sans-serif;
            font-size: 38pt;
            text-align: center;
            /*padding: 15px 22px;
            background: #15202b;
            color: white;
            border-radius: 1.25rem;
            display: inline-block;*/
        }
    `
};

export default Styles;