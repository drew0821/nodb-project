import React, {Component} from 'react'

class Roommate extends Component {
    constructor(){
        super()
        this.state = {
            isEditing: false,
            ratingInput: 0
        }
        this.handleChange = this.handleChange.bind(this) 
    }
    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handleChange(e){
        this.setState({
            ratingInput: e.target.value
        })
    }
    render(){
        console.log(this.props.roommate)
        return(
            <div className='roommate-list'>
                <h1 className='name'>{this.props.roommate.name}</h1>
                <img src={this.props.roommate.img} alt={'roommate'}/>
                {this.state.isEditing ? (
                    <div>
                        <input onChange={this.handleChange}type='number'/>
                        <button onClick={() => {
                            this.props.editRating(this.props.roommate.id, {rating:this.state.ratingInput})
                            this.toggleEdit()
                        }}>Save</button>
                    </div>
                    
                ):(
                    
                    
                    <h3 className='rating'onClick={this.toggleEdit}>Rating: {this.props.roommate.rating}</h3>
                )}
                <div className='section'>
                <button className='x' onClick={() => this.props.deleteRoommate(this.props.roommate.id)}>X</button>
                <p className='food'>Favorite Food: {this.props.roommate.favFood}</p>
                <p className='color'>Favorite Color: {this.props.roommate.favColor}</p>
                {/* <h2>{this.props.roommate.rating}</h2> */}
                
                </div>
            </div>
        )
    }
}

export default Roommate