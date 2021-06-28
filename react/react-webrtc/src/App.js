import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import VedioPlayer from "./components/vedioPlayer";
import Notification from "./components/notification";
import Options from "./components/options";
const Apps = () =>{
    return (
        <div>
            <AppBar position = "static" color = "inherit">
                <Typography variant = "h2" align = "center">Vedio Chat</Typography>
            </AppBar>
            <VedioPlayer/>
            <Options>
                <Notification/>
            </Options>
        </div>
    )
}
export default Apps