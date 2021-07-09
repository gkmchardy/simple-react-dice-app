import React from 'react'

// best practice for web apps places images in an 'images' folder in the public folder

class Die extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let imgSrc = './images/die' + this.props.pips + '.jpg'
        let imgID = 'img' + this.props.id
        return (
            <img id={imgID} className='DieImage' src={imgSrc} alt='die image' />
        )
    }
}

export default Die