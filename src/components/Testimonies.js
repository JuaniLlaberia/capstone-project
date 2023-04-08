import React from 'react'
import Testimony from './Testimony'

//This would come from an database with users in the real world
const users = [
    {
        user:'Matilda Lopez',
        img:'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
        score:'4.5',
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting"       
    },
    {
        user:'John Smith',
        img:'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
        score:'4',
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting"       
    },
    {
        user:'Mathew Perez',
        img:'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
        score:'4.8',
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting"       
    },
    {
        user:'Mike Thomas',
        img:'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
        score:'2.7',
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting"       
    },
    {
        user:'Andrew Walters',
        img:'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
        score:'4.1',
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting"       
    },
]

const displayUsersReviews = users.map(user => {
    return  <Testimony user={user.user} imgSrc={user.img} score={user.score} review={user.review}/>

})

export default function Testimonies( {row = true} ) {
  return (
    <div style={row ? {display:'flex', justifyContent:'center', alignItems:'center'} : {display:'flex', flexDirection:'column' ,justifyContent:'center', alignItems:'center'}}>
        {displayUsersReviews}
    </div>
  )
}
