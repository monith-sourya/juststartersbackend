import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../style/checkout.css'
import Header from '../containers/header'

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import scriptLoader from 'react-async-script-loader'

class Checkout extends Component {
     constructor(props) {
        super(props)
        this.state = {
          address: '',
          geocodeResults: null,
          loading: false
        }
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

      renderGeocodeSuccess(lat, lng) {
        console.log(lat, lng);
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
              placeholder: "Dubai",
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
                        <div className='container'>
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
                        </div>
                        <input type="text" placeholder="Street"></input>
                        <input type="text" placeholder="Landmark"></input>
                        <h3>Delivery Time</h3> 
                        <h3>Contact Details</h3> 
                        <h3>Payment Method</h3> 
                    </div>
                    <div className="checkout-right">
                        Hi
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Checkout
