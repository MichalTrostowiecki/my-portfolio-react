
import { Button, Textarea, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

function ContactForm() {
  return (
    <form className="flex p-3 max-w-md flex-col gap-4 mx-auto">
        <div>
            <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" className='label-form-contact'/>
            </div>
            <TextInput id="name" type="text" placeholder='name'required />
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" className='label-form-contact' />
            </div>
            <TextInput id="email1" type="email" icon={HiMail}  placeholder="name@gmail.com" required />
        </div>
        <div className="max-w-md">
            <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" className='label-form-contact' />
            </div>
            <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
        </div>
        <Button type="submit">Submit</Button>
    </form>
  );
}

export default ContactForm;
