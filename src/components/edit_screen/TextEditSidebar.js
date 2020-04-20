import React, { Component } from 'react'


class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text: this.props.logo.text,
            textColor : this.props.logo.textColor,
            fontSize : this.props.logo.fontSize,
            backgroundColor : this.props.logo.backgroundColor,
            borderColor : this.props.logo.borderColor,
            borderRadius : this.props.logo.borderRadius,
            borderWidth : this.props.logo.borderWidth,
            padding : this.props.logo.padding,
            margin : this.props.logo.margin
        }
    }
    
    handleUndo = () => {
        this.props.undoCallback();
    }

    handleRedo = () => {
        this.props.redoCallback();
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value}, this.completeUserEditing);
    }
    
    
    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor,
             this.state.fontSize, this.state.backgroundColor, this.state.borderColor, this.state.borderRadius,
             this.state.borderWidth, this.state.padding, this.state.margin);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleBackgroundColorChange to " + event.target.value);
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChange to " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    handleMarginChange = (event) => {
        console.log("handleMarginChangeComplete to " + event.target.value);
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }

    handlePaddingChange = (event) => {
        console.log("handleMarginChangeComplete to " + event.target.value);
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }
    handleBorderThicknessChange = (event) => {
        console.log("handleMarginChangeComplete to " + event.target.value);
        this.setState({ borderWidth: event.target.value }, this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }

    handleTextChange = (event) => {
        let inputtext = "";
        inputtext = prompt("Enter a name for your logo: ");
        if(inputtext.length===0){
            alert("Illegal name");
            return;
        }
        if(inputtext.trim().length===0){
            alert("Illegal name");
            return;
        }
        if(inputtext===this.props.logo.text){
            alert("Duplicate Name");
            return;
        }
        if(inputtext.toLowerCase()===this.props.logo.text.toLowerCase()){
            alert("Duplicate Name");
            return;
        }
        else{
            this.setState({text : inputtext}, this.completeUserEditing);
        }
    }
   

    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";

        let redoDisabled = !this.props.canRedo();
        let redoClass = "waves-effect waves-light btn-small";
        if (redoDisabled)
            redoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        
                        {/* <Modal isShowing={this.state.isShowing} >
                            <button onClick={this.closeModal}>Close </button>
                        </Modal> */}
                        <button className="waves-effect waves-light btn-small" onClick={this.handleTextChange}>&#9998;</button>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Text Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <span>{this.props.logo.fontSize}</span>
                                <input type="range" min="4" max="144"  
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBackgroundColorChange}
                                        value={this.props.logo.backgroundColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBorderColorChange}
                                        value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                            <span>{this.props.logo.borderRadius}</span>
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <span>{this.props.logo.borderWidth}</span>
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.props.logo.borderWidth} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <span>{this.props.logo.padding}</span>
                                <input type="range" min="4" max="144" 
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <span>{this.props.logo.margin}</span>
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar
