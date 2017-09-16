import React, {Component} from 'react'
import {connect} from 'react-redux'
import { RadioGroup, RadioButton } from 'react-radio-buttons'

class ProductOptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options:{},
            total: 0
        }
        this.generateList = this.generateList.bind(this)
        this.generateRadio = this.generateRadio.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleTextArea = this.handleTextArea.bind(this)
        this.updateTotal = this.updateTotal.bind(this)
        this.radioText = this.radioText.bind(this)
    }
        
    handleRadioChange(title, e) {
        this.setState(
            {
                options: {...this.state.options, [title]: e}
            }, () => {
                this.updateTotal()
            }
        );
    }
    
    radioText(price){
            return (
                `+AED ${price}`
            )
        }
    
    generateRadio(opt){
        return opt.map((option) => (
            <RadioButton padding="10" iconSize="1" iconInnerSize="0" pointColor="#50E3C2" value={{text: option.subtitle, price: option.price}}>
               {option.subtitle} <br></br>+ AED {option.price}
            </RadioButton>
        ))
    }
    
    handleTextArea(e){
        this.setState({custom: e.target.value})
    }
 
    generateList(){
        return this.props.configs.map((option) =>
            (
                <div>
                <div className="optionTitle">{option.title}</div>
                <RadioGroup onChange={(e) => this.handleRadioChange(option.title, e)}  className="configContainer" horizontal>
                    {this.generateRadio(option.options)}
                </RadioGroup>
                </div>
            )
        )
    }
    
    updateTotal(){
        console.log("Update Total")
        var price = 0
        var options = this.state.options
        for (var key in options){
            if (options.hasOwnProperty(key)) {
                price += options[key].price
            }
        }
        this.setState({total: price}, () => {
            this.props.retrieve(this.state.options, "options")
            this.props.retrieve(this.state.total, "total")
        })
    }

    
    render()
    {
        return (
            <div className="configContainer">
                <div className="confTitle">Configure your Starter:</div>
                {this.generateList()}
                <div className="optionTitle">Anything else?</div>
                <textarea className="textArea" onChange={this.handleTextArea}></textarea>
            </div>
        )
    }
}

export default ProductOptions