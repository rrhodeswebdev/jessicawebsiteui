import React from 'react';
import Image from 'next/image'
import Heading from '../../components/content/Heading';
import SubHeading from '../../components/content/SubHeading';
import ContactForm from '../../components/forms/ContactForm';
import contactHeaderImage from '../../public/contact-header.jpeg'
import Head from "next/head";

const ContactPage: React.FC = () => {
    return (
        <div className='container mx-auto p-6 max-w-6xl'>
            <Head>
                <title>Contact - Graced Studio</title>
                <meta name='description'
                      content="Get in touch with us to start your next hair adventure or to set up an appointment."/>
            </Head>
            <Heading title="Let's Connect"/>
            <div className='mb-12'>
                <Image src={contactHeaderImage} alt='Contact Header Image'/>
            </div>
            <div className='flex flex-wrap flex-col md:flex-row w-full'>
                <div className='flex flex-col flex-1 md:pr-8 mb-8'>
                    <div className='mb-6'>
                        <SubHeading title='Email'/>
                        <p className='font-light text-accent hover:underline'>
                            <a href='mailto:jesse@graced.studio'>
                                jesse@graced.studio
                            </a>
                        </p>
                    </div>
                    <div className='mb-6'>
                        <SubHeading title='Phone'/>
                        <p className='font-light text-accent hover:underline'>
                            <a href='tel:7047969365'>(704) 796-9365</a>
                        </p>
                    </div>
                    <div className='mb-6'>
                        <SubHeading title='Address'/>
                        <p className='font-light text-accent hover:underline'>
                            <a
                                href='https://goo.gl/maps/Rqg7wXzG18krgAeZ8'
                                target='_blank'
                            >
                                Graced Studio
                                <br/>
                                1940 Kannapolis Hwy
                                <br/>
                                Suite #3
                                <br/>
                                Concord, NC 28027
                            </a>
                        </p>
                    </div>
                    <div className='mb-6'>
                        <SubHeading title='Hours'/>
                        <p className='font-light text-accent'>Tuesday 4-8</p>
                        <p className='font-light text-accent'>Wednesday 9-8</p>
                        <p className='font-light text-accent'>Thursday 9-5</p>
                        <p className='font-light text-accent'>Friday 9-5</p>
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
