import React from 'react'

const Skills = () => {

    const skills = [
        { name: 'Html, Css', level: 85 },
        { name: 'Vanilla Js', level: 90 },
        { name: 'React JS', level: 90 },
        { name: 'Next Js', level: 45 },
        { name: 'Jest', level: 50 },
        { name: 'Node JS', level: 85 },
        { name: 'Socket.IO', level: 35 },
        { name: 'React Native', level: 45 },
        { name: 'MySql, Postgres', level: 85 },
        { name: 'MongoDb', level: 80 },
        { name: 'Aws', level: 50 }
    ];

    return (
        <section id='skills'>
            <div className="container mx-auto p-4">
                <h2 className='flex justify-center items-center text-highlight-red font-bold text-3xl pt-12 pb-8'>
                    Skills
                </h2>
                <div className="space-y-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="w-full">
                            <div className="flex justify-between items-center mb-1">
                                <span className='font-semibold text-slate-50'>{skill.name}</span>
                                <span className='text-slate-50'>{skill.level}%</span>
                            </div>
                            <div className="w-full bg-navbar-grey rounded-full h-2.5">
                                <div
                                    className="bg-dark-red h-2.5 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skills