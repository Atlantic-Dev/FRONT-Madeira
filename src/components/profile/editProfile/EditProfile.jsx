import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { editCustomer, getAllAvatars } from "../../../redux/actions";
import './EditProfile.css'

const EditProfile = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllAvatars())
    },[])

    const allAvatars = useSelector((state) => state.avatars)
    const customer = props.customer
    const token = localStorage.getItem("token")
    const id = customer._id
    const [input, setInput] = useState({
        nickname: customer.nickname,
        name: customer.name,
        surname: customer.surname,
        email: customer.email,
        avatar: customer.avatar
    })
    console.log(input)

    function setAvatar(id){
        setInput({
            ...input,
            avatar: id
        })
    }

    const [errors, setErrors] = useState({})

    function validate (input){
        let errors = {};
        if(input.nickname && input.nickname.length < 4){
            errors.nickname = 'Minimum 4 characters'
        }
        else if(input.nickname && input.nickname.length > 15 ){
            errors.nickname = 'Maximum 15 characters'
        }
        else if(input.name && input.name.length < 4){
            errors.name = 'Minimum 4 letters'
        }
        else if(input.name && input.name.length > 15 ){
            errors.name = 'Maximum 15 letters'
        }
        else if(input.name && !/^[A-z]+$/.test(input.name)){ 
            errors.name = "Name must contain only letters"
        }
        else if(input.surname && !/^[A-z]+$/.test(input.surname)){ 
            errors.surname = "Surname must contain only letters"
          }
        else if(input.surname && input.surname.length < 4){
            errors.surname = 'Minimum 4 letters'
        }
        else if(input.surname && input.surname.length > 15 ){
            errors.surname = 'Maximum 15 letters'
        }  
        return errors
      }

    //Cambios de estado y verificacion de errores de inputs Text
    function handleChange(e) {
        setInput({
           ...input,
           [e.target.name]: e.target.value
       })
        setErrors(validate({
            ...errors,
            [e.target.name]: e.target.value
        }))
        console.log("name",errors.name)
        console.log("nickname",errors.nickname)
        console.log("surname",errors.surname)
    }

    //Control de información y dispatch de action register
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.nickname === customer.nickname && input.surname === customer.surname && input.name === customer.name && input.avatar === customer.avatar) Swal.fire("Please edit your data","You must complete at least 1 option or change your avatar", "info")
        else if (errors.nickname !== undefined) return Swal.fire(errors.nickname,"","info")
        else if (errors.name !== undefined) return Swal.fire(errors.name,"","info")
        else if (errors.surname !== undefined) return Swal.fire(errors.surname,"","info")
        else {
            let userData = {
                nickname: input.nickname === undefined ? customer.nickname : input.nickname,
                name: input.name === undefined ? customer.name : input.name,
                surname: input.surname === undefined ? customer.surname : input.surname,
                avatar: input.avatar,
                email: customer.email
            }
            return dispatch(editCustomer(userData, id, token))
        }
    } 

    return (
        <div className="EditProfile">
            <span className="EditProfileTitle">You can change what you want, <p>it isn't necessary to fill everything</p></span>
            <form onSubmit={handleSubmit} className="EditProfileForm">
                <div className="EditProfileData">
                    <div className="EditProfileInputCont">
                        <input onChange={handleChange} name="nickname" className="EditProfileInput" type="text" placeholder={customer.nickname} />
                        <input onChange={handleChange} name="name" className="EditProfileInput" type="text" placeholder={customer.name} />
                        <input onChange={handleChange} name="surname" className="EditProfileInput" type="text" placeholder={customer.surname} />
                    </div>
                    <div className="EditProfileAvatarDiv">
                        {allAvatars?.map((avatar) => {
                            return (
                                <button className={
                                    input.avatar === avatar.idNumber ? "AvatarModalButtonSelected" :'AvatarModalButton'} 
                                    onClick={(e) => {
                                e.preventDefault()
                                setAvatar(avatar.idNumber)}}>
                                <img className="AvatarModalImage" src={avatar.imageUrl}/>
                            </button>)
                        })}                       
                    </div>
                </div>
                <input className="EditProfileInputSubmit" type="submit" value="Change"/>
            </form>
        </div>
    )
}

export default EditProfile