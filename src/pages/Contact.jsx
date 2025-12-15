import React from 'react'

function Contact() {
    const handleSubmit=(event) =>{
        event.preventDefault()
        console.log(event.target.username.value)
        console.log(event.target.emails.value)
        console.log(event.target.sub.value)
    }
    const handleSend=(send)=>{
        send.preventDefault()
        console.log(send.target.Emails.value);
        console.log(send.target.Phone.value);
        console.log(send.target.textcon.value);
        

    }
    return (
        <><h1 className='text-center text-info mt-3'>Contact Us</h1>
            <div className="row">
                <div className="col-4">
                    <div className="forms-con m-5">
                        <h2 class="fw-bold text-start">Get in Touch</h2>
                        <form className='mt-5' action="" onSubmit={handleSend} >
                            <label htmlFor="email">Email </label><br />
                            <input name='Emails' id='email' className='text' type="text" /><br /><br />
                            <label htmlFor="phn">Phone</label><br />
                            <input name='Phone' id='phn' type="text" /><br />
                            <br />
                            <label htmlFor="add">Address</label><br />
                            <textarea name="textcon" id="add" cols="30" rows="10"></textarea>
                            <br /><br />
                            <button style={{padding:"5px",width:"80px",backgroundColor:"black",color:"white",borderRadius:"15%"}} >Submit</button>
                        </form>

                    </div>
                </div>
                <div className="col-4">
                    <div style={{ marginTop: "50px", alignItems:"center" }} className="forms">
                        <h1>Love to Hear From You</h1>
                        <p className='mt-3'>

                            Have questions about our courses, pricing, or partnerships? Our team is here to help you every step of the way. Feel free to reach out to us using the details below.
                        </p>

                    </div>

                </div>
                <div className="col-4">
                    <div className='forms-send m-5'>
                        <h2 class="fw-bold text-start">Send Us a Message</h2>
                        <form className='send mt-5' action="" onSubmit={handleSubmit}>
                            <label htmlFor="name">Full  Name </label><br />
                            <p>[Your Name]</p>
                            <input name='username' id='name' className='text' type="text" /><br />
                            <label htmlFor="em">Email  Address </label><br />
                            <p>[Your@example.com]</p>
                            <input name='emails' id='em' className='text' type="email" /><br />
                            <label htmlFor="su">Subject </label><br />
                            <p>[Enter Your Subject]</p>
                            <input name='sub' id='su' className='text' type="text" /><br />
                            <br /><br />
                            <button style={{padding:"5px",width:"60px",backgroundColor:"black",color:"white",borderRadius:"15%"}} >send</button>
                        </form>
                    </div>
                </div>
            </div></>
    )
}

export default Contact