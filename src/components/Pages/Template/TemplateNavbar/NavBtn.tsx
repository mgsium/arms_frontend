import React from "react";

import { css, cx } from "emotion";

const navBtnStyles = css`
    padding: 5px 10px;
    color: white;
    transition: all 0.25s;
    display: inline-block;
    margin-left: 4px;
    margin-right: 4px;
    font-family: Muli, sans-serif;

    &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.1);
        border-radius: .5rem;
    };
`

const NavBtn: React.FC = (props) => (
    <div className={cx( navBtnStyles )}>
        {props.children}
    </div>
)

export default NavBtn;