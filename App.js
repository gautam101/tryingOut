import React from "react";
import ReactDOM  from "react-dom/client";

const root  = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", {id:"parent",key:"child"} ,[
    React.createElement("div", {id:'child',key:"child"},React.createElement("h1", {id:'title',style:{
        color:"red"
    }},"I am here")),
    React.createElement("h1", {id:'child1',key:"child1"},"Miss me"),
]);

root.render(parent);