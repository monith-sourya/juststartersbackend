import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../style/checkout.css'
import Header from '../containers/header'
import OrderSummary from '../components/orderSummary'
import TimeComponent from '../components/timepicker'

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import { RadioGroup, RadioButton } from 'react-radio-buttons'

class Checkout extends Component {
     constructor(props) {
        super(props)
        this.state = {
          geocodeResults: null,
          loading: false,
          radioButton: '',
          address: ''
        }
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this)
        this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this)
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
              geocodeResults: this.renderGeocodeSuccess(lat, lng),
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
    
     handleRadioChange(value) {
            this.setState({radioButton: value});
    }

      renderGeocodeSuccess(lat, lng) {
        console.log(lat, lng);
      }
    
    render()
    {
        const onChange = (dateString, { dateMoment, timestamp }) => {
            console.log(dateString)
        }
 
        let date = '2017-04-24'

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
            <div className="checkout">
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
                          />
                            {this.state.loading ? <div><i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" /></div> : null}
                            {!this.state.loading && this.state.geocodeResults ?
                            <div className='geocoding-results'>{this.state.geocodeResults}</div> :
                              null}
                            <input className="checkout-input" type="text" placeholder="Villa/Flat No."></input>
                            <input className="checkout-input" type="text" placeholder="Street"></input>
                        </div>   
                        <h3 className="checkout-sub">Contact Details</h3>
                        <div className="formContainer">
                            <input className="checkout-input" type="text" placeholder="Mobile Number"></input>
                            <input className="checkout-input" type="text" placeholder="Email Address"></input>
                        </div>
                        <h3 className="checkout-sub">Delivery Time</h3>
                        <RadioGroup className="inCheckout" vertical onChange={this.handleRadioChange}>
                            <RadioButton last="false"  padding="15" iconSize="1" iconInnerSize="0" pointColor="#50E3C2" value="ASAP">
                                As Soon As Possible
                            </RadioButton>
                            <RadioButton padding="15" iconSize="1" iconInnerSize="0" pointColor="#50E3C2" value="Advance">
                                Order in Advance
                            </RadioButton>
                        </RadioGroup>
                         {this.state.radioButton == "Advance" ? <div><h5>Pick a Time</h5><TimeComponent></TimeComponent></div> : <p></p>}
                        <div className="formContainer">
                        </div>
                        <h3 className="checkout-sub">Payment Method</h3> 
                        </div>
                    <div className="checkout-right">
                        <OrderSummary></OrderSummary>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout
