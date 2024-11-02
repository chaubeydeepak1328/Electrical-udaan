import React from 'react';
import about_img from "../Images/About.jpg"

import { motion } from 'framer-motion';


const floatUP = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.05 * index,
        }
    })
};


const floatRight = {
    initial: {
        opacity: 0,
        x: -200,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.05,
        }
    }
}



const Grow = {
    initial: {
        opacity: 0,
        scale: .6,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .5,
            delay: 0.05
        }
    }
}








const About = () => {
    return (
        <>
            <div className='w-100' style={{ position: "relative" }}>
                <img loading='lazy' className='w-100' src={about_img} alt={about_img} />
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)"
                }}></div>
                <motion.h1 variants={floatUP} initial="initial" whileInView="animate" viewport={{ once: true }} className='About-posterText' style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white" }}>About US</motion.h1>
            </div>



            <div className='w-100 d-flex justify-content-center px-5' style={{ margin: "2rem" }}>
                <div className='d-flex gap-5 justify-content-center flex-wrap'>
                    <div className='col-12 col-lg-5'>
                        <motion.div variants={floatRight} initial="initial" whileInView="animate" viewport={{ once: true }} className='d-flex gap-2'><hr style={{ width: "1.6rem", height: "3px", color: "#d67d9d", backgroundColor: "#d67d9d", }} /> <h2 style={{ fontSize: "1.4rem", color: "#65a29d" }}>ABOUT US</h2></motion.div>
                        <motion.h1 variants={floatUP} initial="initial" whileInView="animate" viewport={{ once: true }} style={{ color: "#d67d9d" }}>Illuminating the Path to Innovation in Electricals</motion.h1>
                        <motion.p variants={Grow} initial="initial" whileInView="animate" viewport={{ once: true }}>Electricals Udaan Advertising Magazine is the venture of Kritika Advertising. Kritika Advertising has maintained a commitment to creativity and quality as it serves clients all over India covering all the states mainly Delhi-NCR and Mumbai-NCR. We are one of the leading advertising and promotional agency for all the Electrical and Lighting products in India.</motion.p>
                        <motion.p variants={Grow} initial="initial" whileInView="animate" viewport={{ once: true }}>Kritika Advertising promotional ideas assure “top of mind” awareness to a demanding corporate customer base. Superior marketing expertise, a relationship-oriented marketing team and full service facilities, including a creative graphic design team, wide range of Advertising Magazine distribution and stringent quality work, are just some of our core strengths.</motion.p>
                    </div>
                </div>
            </div>


            <div className='container d-flex flex-column align-items-center justify-content-center w-100' style={{ margin: "2rem" }}>
                <div className='w-100'><h1 className='px-lg-5 mx-lg-5'>Our Mission</h1></div>
                <div class="card d-flex flex-lg-row col-12 col-lg-10">

                    <div class="card-body  d-flex justify-content-center align-items-center">
                        <motion.p variants={Grow} initial="initial" whileInView="animate" viewport={{ once: true }} class="card-text">To empower corporate leaders and employees with the tools and knowledge to achieve optimal wellness, enabling them to lead with clarity, resilience, and vitality.
                            <br /><br />
                            We participates in all the Electricals Events & Exhibitions in India to remain up-to-date on the latest trends in the widest possible spectrum of advertising and promotion business. We also do tree distribution to all the visitors & exhibitors.
                        </motion.p>
                        <motion.p variants={Grow} initial="initial" whileInView="animate" viewport={{ once: true }}>We know the need and resources of the Electrical and Lighting industries and connects the similar businesses through our “Electricals Udaan” Advertising Magazine of electrical commodities. It’s our goal to recommend the right idea and then to ensure everything goes exactly as planned to connect industrial people with the relevant resources on time.</motion.p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default About
