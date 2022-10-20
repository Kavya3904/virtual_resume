import React,{useState} from "react";
import {styles}  from  './styles'
import { Link} from "react-router-dom";
import './Avatar.css'


const Avatar = props => {
    const [hovered, setHovered] = useState(false)

    return (
        <div style={props.style}>
            <div 
                className='transition-3'
                style={{
                    ...styles.avatarHello,
                    ...{ opacity: hovered ? '1' : '0' }
                }}
            >
                Hey it's Kavya 🤙
            </div>
            <Link to ="/register">
            <div 
            
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                
                className='transition-3'
                style={{
                    ...styles.chatWithMeButton,
                    ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #fff' }
                }}
            />
            </Link>
        </div>
    )
}

export default Avatar;