import React, { useState } from 'react'; 

//noValidate

const AddForm = ({getAddFormData}) => {


    const [isFormOpen, setIsFormOpen] = useState(false)
    const [id, setId] =useState('')
    const [firstName, setFirsName] =useState('')
    const [lastName, setLastName] =useState('')
    const [email, setEmail] =useState('')
    const [phone, setPhone] =useState('')

    const submitHandler = (e) =>{
        e.preventDefault()/* позвляет не перерисовывать страницу */
        getAddFormData({id, firstName, lastName, email, phone})
    }



    return (
        <div>
            {
                !isFormOpen ?
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => { setIsFormOpen(true) }}
                    >Add Contact
                    </button>
                    :
                    <form className="needs-validation" noValidate onSubmit={submitHandler}>
                        <div className="form-row">
                            <div className="col-md-1 mb-3">
                                <input type="text"
                                    className="form-control"
                                    id="validationTooltip01"
                                    placeholder="ID"
                                    value={id}
                                    onChange={(event)=>{setId(event.target.value)}} />
                            </div>
                            <div className="col-md-2 mb-3">
                                <input type="text"
                                    className="form-control"
                                    id="validationTooltip02"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(event)=>{setFirsName(event.target.value)}} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <input type="text"
                                    className="form-control"
                                    id="validationTooltipUsername"
                                    placeholder="Last Name"
                                    aria-describedby="validationTooltipUsernamePrepend"
                                    value={lastName}
                                    onChange={(event)=>{setLastName(event.target.value)}} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <input type="text"
                                    className="form-control"
                                    id="validationTooltip03"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(event)=>{setEmail(event.target.value)}} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <input type="text"
                                    className="form-control"
                                    id="validationTooltip04"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(event)=>{setPhone(event.target.value)}} />
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Add Form</button>
                    </form>
            }
        </div>
    )
}


export default AddForm;