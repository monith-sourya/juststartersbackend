import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import {bindActionCreators} from 'redux'
import '../style/checkout.css'
import DetailHeader from '../containers/detailHeader'
import OrderSummary from '../components/orderSummary'

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import { RadioGroup, RadioButton } from 'react-radio-buttons'
import { Field, reduxForm } from 'redux-form';

import {addToCart, removeFromCart} from '../actions/index';

class Checkout extends Component {
     constructor(props) {
        super(props)
        this.state = {
            geocodeResults: null,
            loading: false,
            delivery: 'ASAP',
            deliveryTime: {hr: 8, min: 0, day: "Today"},
            payment: 'Cash On Delivery',
            address: '',
            mobile: '',
            street: '',
            flat: ''
        }
        {
            this.handleRadioChange = this.handleRadioChange.bind(this)
            this.handleSelect = this.handleSelect.bind(this)
            this.handleChange = this.handleChange.bind(this)
            this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this)
            this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this)
            this.buildSummary = this.buildSummary.bind(this)
            this.inputToState = this.inputToState.bind(this)
            this.setHr = this.setHr.bind(this)
            this.genForm = this.genForm.bind(this)
            this.genHrs = this.genHrs.bind(this)
            this.genMins = this.genMins.bind(this)
            this.genDays = this.genDays.bind(this)
        }
    }
        handleSelect(address) {
        this.setState({
          address,
          loading: true
        })
        geocodeByAddress(address)
          .then((results) => getLatLng(results[0]))
          .then(({ lat, lng }) => {
            console.log('Success Yay', { lat, lng })
            this.setState({
//              geocodeResults: {lat: {lat}, lng: {lng}},
              loading: false
            })
          })
          .catch((error) => {
            console.log('Oh no!', error)
            this.setState({
              geocodeResults: this.renderGeocodeFailure(error),
              loading: false
            })
          })
      }
        inputToState(key, e){
        this.setState({[key]: e.target.value})
    }
        handleChange(address) {
        this.setState({
          address,
          geocodeResults: null
        })
      }
        renderGeocodeFailure(err) {
        return (
          <div className="alert alert-danger" role="alert">
            <strong>Error!</strong> {err}
          </div>
        )
      }
        handleRadioChange(key,  value) {
            this.setState({[key]: value});
        }
        renderGeocodeSuccess(lat, lng) {
            console.log(lat, lng);
        }
    
        buildSummary(cart){
        var summary = []
        cart.map((item) => {
            var options = []
            for (var id in item.options){
                var opt = item.options[id]
                if (opt.subtitle != "No thanks"){
                    options.push(opt.subtitle)
                }
            }
            var singleSummary = {
                title: item.title,
                price: item.totalPrice,
                options: options
            }
            summary.push(singleSummary)
        })
        return summary
    }
        
        setHr(key, e){
        var x = this.state.deliveryTime
        x[key] = e.target.value
           this.setState({
               deliveryTime: x
           })
    }
    
        genHrs(){         
             var hrs = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"]

             var list = []
             
             for (var i in hrs){
                 list.push(
                    <option value={hrs[i]}>{hrs[i]}</option>
                 )
             }
             return list
         }
        genMins(){         
                 var mins = ["00", "15", "30", "45"]
                 var list = []

                 for (var i in mins){
                     list.push(
                        <option value={mins[i]}>{mins[i]}</option>
                     )
                 }
                 return list
        }
        genDays(){         
                 var days = ["Today", "Tomorrow", "Day After Tomorrow"]
                 var list = []

                 for (var i in days){
                     list.push(
                        <option value={days[i]}>{days[i]}</option>
                     )
                 }
                 return list
        }       
        genForm(){
            return (
             <div className="timeForm">
                <form>
                    <select name="hr" onChange={(e) => this.setHr("hr", e)}>
                        {this.genHrs()}
                    </select>
                    <select name="min" onChange={(e) => this.setHr("min", e)}>
                        {this.genMins()}
                    </select>
                    <select className="coDay" name="day" onChange={(e) => this.setHr("day", e)}>
                        {this.genDays()}
                    </select>
               </form>
            </div> 
            )
        }
    
    render()
    {
    
        const inputProps = {
              type: "text",
              value: this.state.address,
              onChange: this.handleChange,
              onBlur: () => { console.log('Blur event!'); },
              onFocus: () => { console.log('Focused!'); },
              autoFocus: true,
              placeholder: "Enter your building or neighborhood",
              name: 'Demo__input',
              id: "my-input-id",
        }
        
        const options = {
            componentRestrictions: {country: 'ae'}
        }
        
        const AutocompleteItem = ({ formattedSuggestion }) => (
            <div className="Demo__suggestion-item">
                <i className='fa fa-map-marker Demo__suggestion-icon'/>
                <strong>{formattedSuggestion.mainText}</strong>{' '}
                <small className="text-muted">{formattedSuggestion.secondaryText}</small>
            </div>
        )
        
        const cssClasses = {
                root: 'form-group',
                input: 'Demo__search-input',
                autocompleteContainer: 'Demo__autocomplete-container',
        }
         
        return (
            <div>
                <DetailHeader></DetailHeader>
                <div className="checkout">
                <a onClick={() => this.props.history.push('/')}>Back to Menu</a>
                <h1 className="checkout-header">Confirm your order</h1>
                <div className="checkout-container">
                    <div className="checkout-left">
                        <h3 className="checkout-sub">Delivery Address</h3>
                        <div className="formContainer">
                          <PlacesAutocomplete
                                onSelect={this.handleSelect}
                                autocompleteItem={AutocompleteItem}
                                onEnterKeyDown={this.handleSelect}
                                classNames={cssClasses}
                                inputProps={inputProps}
                                options={options}
                          />
                            {this.state.loading ? <div><i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" /></div> : null}
                            {!this.state.loading && this.state.geocodeResults ?
                            <div className='geocoding-results'>{this.state.geocodeResults}</div> :
                              null}
                            
                            <input className="checkout-input" onChange={(e) => this.inputToState("flat", e)} type="text" placeholder="Villa/Flat No."></input>
                            <input className="checkout-input" onChange={(e) => this.inputToState("street", e)} type="text" placeholder="Street or Landmark"></input>
                        </div>   
                        <h3 className="checkout-sub">Contact Details</h3>
                        <div className="formContainer">
                            <input className="checkout-input" type="text" onChange={(e) => this.inputToState("contact", e)} placeholder="Mobile Number"></input>
                            <input className="checkout-input" type="text" onChange={(e) => this.inputToState("email", e)} placeholder="Email Address"></input>
                        </div>
                        <h3 className="checkout-sub">Delivery Time</h3>
                        <RadioGroup className="inCheckout" horizontal onChange={(e) => this.handleRadioChange("delivery", e)}>
                            <RadioButton padding={15} iconSize={1} iconInnerSize={"0"} pointColor="#50E3C2" value="ASAP">
                                As Soon As Possible
                            </RadioButton>
                            <RadioButton padding={15} iconSize={1} iconInnerSize={"0"} pointColor="#50E3C2" value="Advance">
                                Order in Advance
                            </RadioButton>
                        </RadioGroup>
                         {this.state.delivery == "Advance" ? 
                            this.genForm()
                            : <div/>}
                        <div className="formContainer">
                        </div>
                        <h3 className="checkout-sub">Payment Method</h3>
                        <RadioButton padding="15" iconSize="1" iconInnerSize="0" rootColor="#50E3C2" value="cash">
                                Cash On Delivery
                        </RadioButton>
                        {/*<RadioGroup className="inCheckout" horizontal onChange={(e) => this.handleRadioChange("payment", e)}>
                            <RadioButton padding="15" iconSize="1" iconInnerSize="0" pointColor="#50E3C2" value="cash">
                                Cash On Delivery
                            </RadioButton>
                            <RadioButton padding="15" iconSize="1" iconInnerSize="0" pointColor="#50E3C2" value="card">
                                Pay by Card
                            </RadioButton>
                        </RadioGroup>*/}
                        </div>
                    <div className="checkout-right">
                        {this.props.cart.length != 0 ? <OrderSummary cart={this.buildSummary(this.props.cart)} removeFunc={this.props.removeFromCart}></OrderSummary> : <h3 className="checkout-sub">Hmm... Your cart is empty. <br/><br/>Why don't you check out our menu?</h3>}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToCart, removeFromCart}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout))