import React, { Component } from "react";
import "../style/Highlight.css";
export class Highlight extends Component {
    render() {
        const { position, onClick, onMouseOver, onMouseOut, isScrolledTo, } = this.props;
        //const { rects, boundingRect } = position;
        const { rects } = position;
        return (React.createElement("div", { className: `Highlight ${isScrolledTo ? "Highlight--scrolledTo" : ""}` },
            React.createElement("span", null, "wasComment"),
            React.createElement("div", { className: "Highlight__parts" }, rects.map((rect, index) => (React.createElement("div", { onMouseOver: onMouseOver, onMouseOut: onMouseOut, onClick: onClick, key: index, style: rect, className: `Highlight__part` }))))));
    }
}
export default Highlight;
//# sourceMappingURL=Highlight.js.map