import React from 'react'
import { Link } from 'react-router-dom';
import {Footer} from 'flowbite-react';
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from 'react-icons/bs';


export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
    <div className='w-full mx-auto'>
        <div className='grid justify-between sm:flex md:grid-cols-1'>
            <div className='mt-5'>
            <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Anshul's </span>Blog
    </Link>
            </div>
            <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
            <Footer.Title title='About'/>
            <Footer.LinkGroup col>
                <Footer.Link
                href='https://www.technobrick.in'
                target='_blank'
                rel='noopener norefferer'
                >
                    My Projects
                </Footer.Link>
                <Footer.Link
                href='/about'
                target='_blank'
                rel='noopener norefferer'
                >
                    About This Project
                </Footer.Link>
                <Footer.Link
                href='https://www.youtube.in'
                target='_blank'
                rel='noopener norefferer'
                >
                    Find Me on Youtube
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title='Follow Us'/>
            <Footer.LinkGroup col>
                <Footer.Link
                href='https://github.com/ansh788'
                target='_blank'
                rel='noopener norefferer'
                >
                    Git Hub
                </Footer.Link>
                <Footer.Link
                href='https://twitter.com'
                target='_blank'
                rel='noopener norefferer'
                >
                   Twitter
                </Footer.Link>
                <Footer.Link
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener norefferer'
                >
                    Instagram
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title='Legal'/>
            <Footer.LinkGroup col>
                <Footer.Link
                href='#'
                target='_blank'
                rel='noopener norefferer'
                >
                    Privacy Policy
                </Footer.Link>
                <Footer.Link
                href='#'
                target='_blank'
                rel='noopener norefferer'
                >
                   Terms & Conditions
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            </div>
        </div>
        <Footer.Divider/>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href='#' by="Anshul's Blog" year={new Date().getFullYear()}/>
        
        <div className='flex gap-6 sm:mt-1 mt-4 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='#' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsDribbble}/>
            </div>
        </div>
    </div>
    
    </Footer>
  )
}
