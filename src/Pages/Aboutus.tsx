import React from 'react'

const Aboutus = () => {
    return (
        <section id='aboutus'>
            <div className="flex items-center min-h-screen text-highlight-red">
                <div className='w-full border-1 sm:border-2 border-highlight-red border-dashed text-center mx-8'>
                    <h2 className='font-bold text-3xl pt-12'
                    >About Us</h2>
                    <p className='text-dark-red pt-16 text-center px-6 indent-6 sm:indent-20 sm:leading-loose sm:tracking-wide sm:px-24 sm:pb-96'
                    >
                        Hello! I'm <span className='font-bold text-highlight-red'>Rakesh</span>,
                        a dedicated and passionate Full Stack Developer with over four years of professional experience in the software development industry.
                        My expertise spans a diverse range of technologies, including <span className='italic text-highlight-red'>ReactJS, NodeJS, ExpressJS, Socket.IO, React Native, SQL, NoSQL databases, and AWS cloud infrastructure.</span>
                        I specialize in creating robust websites, dynamic web applications, and user-friendly mobile apps.
                        My skill set also encompasses hosting, domain handling, and monitoring, ensuring that every project I work on is not only functional but also secure and efficient.
                        <br />
                        <br />
                        <p className="hidden sm:block sm:leading-loose">
                            Beyond my technical skills, I have a proven track record in freelancing, delivering high-quality solutions that meet client needs and exceed expectations. Whether you're looking to build a new website, develop a mobile app, or need assistance with cloud infrastructure, I'm here to help bring your vision to life.
                            Feel free to explore my portfolio and see the projects I've worked on. Let's create something amazing together!
                        </p>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Aboutus