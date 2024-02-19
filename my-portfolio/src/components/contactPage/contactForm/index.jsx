import { useState } from 'react'; 
import { Button, Textarea, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';





function ContactForm() {

    const [nameValid, setNameValid] = useState('gray');
    const [emailValid, setEmailValid] = useState('gray');
    const [messageValid, setMessageValid] = useState('gray');

    

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Perform validation
        const nameValue = document.getElementById('name').value;
        const emailValue = document.getElementById('email1').value;
        const commentValue = document.getElementById('comment').value;
    
        const isNameValid = nameValue.trim() !== '';
        const isEmailValid = emailValue.trim() !== '' && document.getElementById('email1').checkValidity();
        const isCommentValid = commentValue.trim() !== '';
    
        // Update validation states
        setNameValid(isNameValid ? 'success' : 'failure');
        setEmailValid(isEmailValid ? 'success' : 'failure');
        setMessageValid(isCommentValid ? 'success' : 'failure');
    
        // Check if all fields are valid
        if (isNameValid && isEmailValid && isCommentValid) {
            // Reset the form
            event.target.reset();
            
            // Additional actions after successful form submission
            alert("Your message has been received! I'll get back to you soon.");
            
            // Reset validation states
            setNameValid('gray');
            setEmailValid('gray');
            setMessageValid('gray');
        } else {
            // If any field is invalid, do not submit the form
            alert("Please fill in all required fields.");
        }
    }
    

    const handleNameChange = (event) => {
        setNameValid(event.target.value !== '' ? 'success' : 'failure');
    }

    const handleEmailChange = (event) => {
        setEmailValid(event.target.checkValidity() ? 'success' : 'failure');
    }

    const handleMessageChange = (event) => {
        setMessageValid(event.target.value !== '' ? 'success' : 'failure');
    }
        
  


  return (
    <form className="flex p-3 max-w-md flex-col gap-4 mx-auto" onSubmit={handleSubmit} noValidate>
        <div>
            <div className="mb-2 block"> 
                <Label htmlFor="name" color={nameValid} value="Your name" className='label-form-contact'/>
            </div>
            <TextInput 
                id="name" 
                color={nameValid} 
                type="text" 
                placeholder='Name'
                onChange={handleNameChange}
                required 
            />
            { nameValid !== 'failure' ? '' :  <p className='text-red-400 text-sm'>*Please make sure to fill all fields correctly</p> }
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="email1" color={emailValid} value="Your email" className='label-form-contact' />
            </div>
            <TextInput 
                id="email1"
                color={emailValid} 
                type="email" icon={HiMail}  
                placeholder="name@gmail.com" 
                onChange={handleEmailChange}
                required
            />
            { emailValid !== 'failure' ? '' :  <p className='text-red-400 text-sm'>*Please make sure to fill all fields correctly</p> }
        </div>
        <div className="max-w-md">
            <div className="mb-2 block">
                <Label htmlFor="comment" color={messageValid} value="Your message" className='label-form-contact' />
            </div>
            <Textarea 
                className="pl-1" 
                id="comment" 
                color={messageValid} 
                placeholder="Leave a message..."
                onChange={handleMessageChange} 
                required rows={4} 
            />
            { messageValid !== 'failure' ? '' :  <p className='text-red-400 text-sm'>*Please make sure to fill all fields correctly</p> }
            
        </div>
        <Button type="submit">Submit</Button>
    </form>
  );
}

export default ContactForm;
