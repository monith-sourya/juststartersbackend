import React, {Component} from 'react'
import Card from '../components/card'
import Modal from '../components/Modal'
import CardDetail from './card-detail'
import {connect} from 'react-redux'
import {selectCard} from '../actions/index'
import {bindActionCreators} from 'redux'

// This would be seeded by MongoDB
var items = [{
        url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Burger",
        price: "20"
    },{
        url: "https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Salad",
        price: "10"
    },{
        url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Pancake",
        price: "15"
    },{
        url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Pancake",
        price: "15"
    },{
        url: "https://images.pexels.com/photos/8279/muffin.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Cupcake",
        price: "5"
    },{
        url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Burger",
        price: "20"
    },{
        url: "https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Salad",
        price: "10"
    },{
        url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Pancake",
        price: "15"
    },{
        url: "https://images.pexels.com/photos/8279/muffin.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Cupcake",
        price: "5"
    }]
        
function generateList(){
        var list = []  
        for (var i in items){
            var item = items[i]
            list.push(
                <Card 
                    item={item}
                ></Card>
            )
        }
        return list             
}

class CardList extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }

    closeModal = () => {
        // TODO: Action for card closure
        this.props.selectCard(null)
    }
    
    shouldShowModal = () => {
        var found = false
        if (this.props.selectedCard){
            found = true
        }
        return found
    }
    
    render() {
        console.log("RENDERS...")
        console.log("Props", this.props)
        return (
            <div className="card-grid">
                <Modal show={this.shouldShowModal()}
                    onClose={this.closeModal}>
                    <CardDetail item={this.props.selectedCard}></CardDetail>
                </Modal>

                {generateList()}
            </div>
        )}
    }

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectCard: selectCard,
    }, dispatch)
}

function mapStateToProps(state){
    return {
        selectedCard: state.activeCard
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
    
