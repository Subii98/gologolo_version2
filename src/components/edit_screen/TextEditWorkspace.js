import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor: this.props.logo.backgroundColor,
                textColor : this.props.logo.textColor,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius + "px",
                borderWidth: this.props.logo.borderWidth + "px",
                padding: this.props.logo.padding + "px",
                margin: this.props.logo.margin + "px",
                borderStyle : "solid"                
            }
        }
        return (
            <div className="col s8"
                style={ styles.container }>
                {this.props.logo.text}
            </div>
        )
    }
}

export default TextEditWorkspace