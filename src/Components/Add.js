import React, {Component} from 'react'

class Add extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            img: '',
            favFood: '',
            favColor: '',
            rating: 5
        }
    }
    
        // createRoomie = ()=>  {
        //     const {name, img, favFood, favColor, rating} = this.state
        //     this.setState({
        //         allRoommates: this.props.allRoommates.push({name, img, favFood, favColor, rating})
        //     })
        //     console.log(this.props.allRoommates)
        //     this.props.addRoomie(this.props.allRoommates)
        // }

    
    render(){
        const {name, img, favFood, favColor, rating} = this.state
        console.log(this.state)
        return (
            <div className='add-component'>
                <div className='add-roomie-box'>
                    <div className='box'>
                        <div className='input-boxs'>
                            <input type='text' placeholder='Name' onChange={e => this.setState({name: e.target.value})}/>
                            <input type='text' placeholder='favColor' onChange={e => this.setState({favColor: e.target.value})}/>
                            <input type='text' placeholder='favFood' onChange={e => this.setState({favFood: e.target.value})}/>
                            <input type='text' placeholder='Image URL' onChange={e => this.setState({img: e.target.value})}/>
                            <input type='number' placeholder='1-10 Rating' onChange={e => this.setState({rating: e.target.value})}/>
                        </div>
                        <div className='add-button'>
                            <button onClick={() =>this.props.addRoomie({name, img, favFood, favColor, rating})}>Add Roomie</button>
                    
                    </div>
                    </div>

                </div>
                    {/* {name}{img}{favFood}{favColor}{rating} */}
            </div>
        )
    }
}
export default Add