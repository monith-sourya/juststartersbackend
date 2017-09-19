import React, {Component} from 'react'
import {connect} from 'react-redux'
import { RadioGroup, RadioButton } from 'react-radio-buttons'

class ProductOptions extends Component {
    constructor(props) {
        super(props)

        var defaults = this.getDefaultOptions(this.props.configs)
        this.state = {
            options: defaults,
            optionsPrice: 0
        }
        this.generateList = this.generateList.bind(this)
        this.generateRadio = this.generateRadio.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleTextArea = this.handleTextArea.bind(this)
        this.updateTotal = this.updateTotal.bind(this)
        this.getDefaultOptions = this.getDefaultOptions.bind(this)
        this.props.passToParent(defaults, "options")
    }

    getDefaultOptions(configs){
        console.log("Configs:", configs)
        var list = {}
        for (var i in configs){
            var obj = configs[i].options[0]
            obj["title"] = configs[i].title
            list[configs[i].id] = obj
        }
        return list
    }

    handleRadioChange(title, id, e) {
        e.title = title
        this.setState(
            {
                options: {...this.state.options, [id]: e}
            }, () => {
                this.updateTotal()
            }
        );
    }

    generateRadio(opt){
        return opt.map((option) => (
            <RadioButton padding={10} iconSize={1} iconInnerSize={"0"} pointColor="#50E3C2" value={{subtitle: option.subtitle, price: option.price}}>
               {option.subtitle} <br></br>+ AED {option.price}
            </RadioButton>
        ))
    }

    handleTextArea(e){
        this.props.passToParent(e.target.value, "customOption")
    }

    generateList(){
        return this.props.configs.map((option) =>
            (
                <div>
                <div className="optionTitle">{option.title}</div>
                <RadioGroup onChange={(e) => this.handleRadioChange(option.title, option.id, e)}  className="configContainer" horizontal>
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
        this.setState({optionsPrice: price}, () => {
            this.props.passToParent(this.state.options, "options")
            this.props.passToParent(this.state.optionsPrice, "optionsPrice")
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
