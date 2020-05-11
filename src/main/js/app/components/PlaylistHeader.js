import React from 'react';

import '../../../resources/static/assets/style/App.css';
import '../../../resources/static/assets/style/main.css';
import {Link, Route, Switch} from "react-router-dom";
import BackArrow from "../../../resources/static/assets/fonts/arrow/back-arrow.png";
import {HomeLayout} from "./pages/home";


function PlaylistHeader(props) {
    return (
        <div>
            <header id="header">
                <div id="back-link-container-btm">
                    <Link id="plr-back-btn" to="/" ><img id="back-arrow-img" src={BackArrow}/></Link>
                    <Switch>
                        <Route exact path="/" component={HomeLayout} />
                    </Switch>

                </div>
                <h1><a href="../main/js/app/components/App.js"><strong>Nine Sounds</strong></a></h1>
            </header>
        </div>
    );
}

export default PlaylistHeader;
