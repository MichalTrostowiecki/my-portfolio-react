import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


const FooterComponent = () => {
    return (
        <Footer>
            <div className="w-full bg-black text-white">
                <div className="grid w-full mb-1 p-3 justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='mx-2 flex justify-center items-center'>
                        <span >Michal Trostowiecki</span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title="about" />
                        <Footer.LinkGroup col>
                        <Footer.Link href="#">Flowbite</Footer.Link>
                        <Footer.Link href="#">Tailwind CSS</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Follow us" />
                        <Footer.LinkGroup col>
                        <Footer.Link href="#">Github</Footer.Link>
                        <Footer.Link href="#">Discord</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Legal" />
                        <Footer.LinkGroup col>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    </div>
                </div>
                <Footer.Divider className='m-0 p-0'/>
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" year={2024} className='ml-3 mb-4'/>
                    <div className="p-2 flex space-x-6 sm:mb-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    )
    
}

export default FooterComponent;