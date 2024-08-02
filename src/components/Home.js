import React from 'react'
import { FaGithubSquare as Github, FaTwitterSquare as Twitter, FaLinkedin as Linkedin } from 'react-icons/fa'
import { SiLeetcode as Leetcode, SiCodechef as Codechef } from 'react-icons/si'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <motion.div
            className="overflow-hidden App flex flex-col justify-center items-start md:items-center mt-32 md:mt-48 p-10 pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}>
            <section
                className='grid grid-cols-1 items-start md:grid-cols-2 md:items-center md:w-[60%]'>
                <picture>
                    <img src="/images/dp.jpg" alt='my profile' className='mb-4 w-32 h-32 rounded-full object-cover md:h-48 md:w-48 md:mb-0'></img>
                </picture>

                <article>

                    <h1 className='mb-2 text-xl font-bold font-sans md:text-4xl'>Himanshu Kumar</h1>
                    <h3 className='font-normal  md:text-xl'>
                        Full Stack Developer & Open Source               
                    </h3>
                    <p className='pt-3'>Currently looking for new roles.</p>
                    <p>(Google Summer Of Code' 24)</p>
                    <p className='underline text-gray-400 pt-[2px]'> <a href="https://drive.google.com/file/d/1DhPDKUmHp8b2gYQ48IAGJdo1NVL4k3pX/view?usp=sharing" target='_blank.'>Resume*</a></p>
                    <br></br>

                    <p className='text-sm md:text-base'>
                        Building with NodeJs, Postgres, Docker, Aws, etc.⚡️
                    </p>

                </article>
            </section>
            <section className='w-fit md:w-2/5 flex md:gap-0 gap-5 flex-row md:items-start md:mx-0 mx-auto  justify-between md:justify-evenly mt-12 md:mt-24'>
                <a href='https://github.com/HeeManSu' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                    <Github />
                </a>
                <a href='https://leetcode.com/Himanshu7_07/' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                    <Leetcode />
                </a>
                <a href='https://www.codechef.com/users/himanshu707' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                    <Codechef />
                </a>
                <a href='https://www.linkedin.com/in/himanshush70a' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                    <Linkedin className='object-cover' />
                </a>
                <a href='https://twitter.com/Himanshu_887' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                    <Twitter className='object-cover' />
                </a>
            </section>
        </motion.div>
    )
}
export default Home
