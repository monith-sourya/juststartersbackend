import React, {Component} from 'react'
import {connect} from 'react-redux'
import { RadioGroup, RadioButton } from 'react-radio-buttons'

var configs = [
    {
        title: "Choose you Serving",
        options: [{
            subtitle: "For 4",
            price: 0
        },{
            subtitle: "For 8",
            price: 20
        },{
            subtitle: "For 16",
            price: 40
        }
        ]
    },
    {
        title: "Pick a Meat",
        options: [{
            subtitle: "Chicken",
            price: 10
        },{
            subtitle: "Vegetarian",
            price: 4
        },{
            subtitle: "No thanks",
            price: 0
        }
        ]
    },
    {
        title: "Pick Side",
        options: [{
            subtitle: "Fries",
            price: 10
        },{
            subtitle: "Curly Fries",
            price: 4
        }
        ]
    },
    {
        title: "Pick a Drink",
        options: [{
            subtitle: "Coke",
            price: 10
        },{
            subtitle: "Shake",
            price: 4
        }
        ]
    }
]

function generateList(){
    var list = []  
    for (var i in configs){
        var option = configs[i]
        list.push(
            <div>
            <div className="optionTitle">{option.title}</div>
            <RadioGroup className="configContainer" horizontal>
                {generateRadio(option.options, option.title)}
            </RadioGroup>
            </div>
        ) 
    }
    return list
}

function generateRadio(opt, title){
    var list = []
    for (var i in opt){
        list.push(
            <RadioButton padding="10" iconSize="1" iconInnerSize="0" pointColor="#50E3C2" value={title}>
                {opt[i].subtitle}<br/>+ AED {opt[i].price}
            </RadioButton>
        )
    }
    return list
}


class ProductOptions extends Component {
    render()
    {
        return (
            <div className="configContainer">
                <div className="confTitle">Configure your Burger:</div>
                {generateList()}
                <div className="optionTitle">Anything else?</div>
                <textarea className="textArea"></textarea>
            </div>
        )
    }
}

export default ProductOptions