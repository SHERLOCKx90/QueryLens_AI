import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import AboutCard from '../../Components/AboutCard';

const About = () => {
    return (
        <MainLayout>
            <div className="px-5 md:px-10 py-5">
                <h1 className="font-bold text-3xl md:text-5xl text-black text-left my-5 sm:my-10 sm:text-center">
                    About Us 👨‍💻
                </h1>
                <div className="bg-base-100 md:p-5 space-y-5">
                    <div className="prose max-w-none text-left sm:text-justify">
                        <p>
                            Dive into the story behind <strong>QueryLensAI</strong> and meet the passionate
                            team that’s redefining how developers interact with data. Built with innovation,
                            technical expertise, and a shared vision, QueryLensAI is the result of relentless
                            effort, collaboration, and a deep understanding of modern data challenges.
                        </p>
                    </div>
                    <hr className="border-gray-300" />

                    <div className="prose max-w-none">
                        <h3 className="text-xl md:text-2xl font-semibold">Our Vision</h3>
                        <p className='text-left sm:text-justify'>
                            At <strong>QueryLensAI</strong>, our mission is to transform data querying into an intuitive and effortless experience through the power of conversational AI. By combining cutting-edge technologies like fine-tuned large language models (LLMs) and metadata-driven query processing, we eliminate the need for complex query syntax, empowering developers and analysts to interact with data naturally. Whether working with static datasets, relational databases, or live data streams, QueryLensAI enables users to extract actionable insights quickly and accurately. Our goal is to simplify data analysis, fostering smarter, data-driven decisions for professionals across industries.
                        </p>
                    </div>
                    <hr className="border-gray-300" />

                    <div className="prose max-w-none">
                        <h3 className="text-xl md:text-2xl font-semibold">Meet the Team</h3>
                        <div className="space-y-5">
                            <div className="bg-green-700 rounded-badge flex flex-col justify-center items-start p-5">
                                <h4 className="text-6xl font-bold text-black">Subhadeep Chell</h4>
                                <p className="text-lg italic text-white">Full-Stack Developer & UI/UX Product Designer</p>
                                <p className='text-white text-xl'>
                                    Subhadeep is the creative force behind QueryLensAI&apos;s intuitive and
                                    user-friendly interface. With a strong background in full-stack development
                                    and product design, he has architected the seamless front-end and backend
                                    integration of the platform. His meticulous approach to UI/UX ensures that
                                    QueryLensAI is not only powerful but also accessible and easy to use.
                                </p>
                                <p className='text-green-200 text-xl'>
                                    A B.Tech student in Computer Science Engineering at Vellore Institute of
                                    Technology, Chennai, Subhadeep’s passion for clean design and robust
                                    systems has shaped QueryLensAI into the developer-friendly tool it is today.
                                </p>
                            </div>
                            <div className="bg-green-700 rounded-badge flex flex-col justify-center items-start p-5">
                                <h4 className="text-6xl font-bold text-black">Sayan Deb</h4>
                                <p className="text-lg italic text-white">IOS & Full-Stack Developer</p>
                                <p className='text-white text-xl'>
                                    Sayan is the technical backbone of QueryLensAI, ensuring that the platform&apos;s
                                    complex systems run smoothly. From backend API design to database
                                    management, he has played a critical role in building the robust architecture
                                    that powers conversational data querying.
                                </p>
                                <p className='text-xl text-green-200'>
                                    As a B.Tech student in Computer Science Engineering with a specialization
                                    in Artificial Intelligence, Sayan brings a strong AI-first mindset to the
                                    project, helping integrate the in-house fine-tuned LLM with metadata-driven
                                    query processing.
                                </p>
                            </div>
                            <div className="bg-green-700 rounded-badge flex flex-col justify-center items-start p-5">
                                <h4 className="text-6xl font-bold text-black">Sandhit Karmakar</h4>
                                <p className="text-lg italic text-white">Android & Web Developer</p>
                                <p className='text-xl text-white'>
                                    Sandhit has been instrumental in extending QueryLensAI’s capabilities to
                                    multiple platforms, ensuring that it remains versatile and accessible. From
                                    Android development to optimizing web functionality, he has contributed to
                                    making QueryLensAI a truly dynamic product.
                                </p>
                                <p className='text-xl text-green-200'>
                                    Currently pursuing a B.Tech in Computer Science Engineering with Artificial
                                    Intelligence at Vellore Institute of Technology, Chennai, Sandhit combines
                                    his passion for mobile and web technologies with a keen understanding of
                                    developer needs to deliver a seamless experience across devices.
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-300" />

                    <div className="prose max-w-none">
                        <h3 className="text-xl md:text-2xl font-semibold">How QueryLensAI Came to Life</h3>
                        <p className='text-left sm:text-justify'>
                            The journey of QueryLensAI began with a shared vision: to revolutionize how developers and analysts interact with data. Frustrated by the limitations of traditional query tools, we set out to build a platform where natural language queries could seamlessly transform into actionable insights. From the start, each of us brought unique strengths to the project. Subhadeep focused on crafting a visually appealing and intuitive user interface, creating a seamless experience for developers. Sayan designed a scalable and robust backend architecture, ensuring high performance and accuracy for processing natural language inputs with our fine-tuned LLM. Sandhit bridged the gap between web and mobile platforms, extending QueryLensAI’s functionality across devices and ensuring accessibility for a diverse audience. Together, our collaborative efforts turned this vision into reality, creating a platform that empowers users to derive insights effortlessly from static files, live databases, and real-time data streams. QueryLensAI simplifies data querying for developers everywhere, making actionable insights accessible to all.
                        </p>
                    </div>
                    <hr className="border-gray-300" />

                    <div className="prose max-w-none">
                        <h3 className="text-xl md:text-2xl font-semibold">Our Future Goals</h3>
                        <p className='text-left sm:text-justify'>Our future at QueryLensAI is centered on enhancing data interaction by enabling real-time analysis through live database connections, integrating machine learning for predictive insights, and fine-tuning our platform to adapt to specialized industries like healthcare, finance, and retail. With these advancements, we aim to deliver smarter, faster, and more tailored solutions to meet the diverse needs of our users.</p>
                    </div>
                    <hr className="border-gray-300" />

                    <div className="prose max-w-none">
                        <h3 className="text-xl md:text-2xl font-semibold">Contact Us</h3>
                        <p className='text-left sm:text-justify'>We’d love to hear from you! For collaborations, queries, or just to say hello, feel free to connect with us on LinkedIn:</p>
                        <ul>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/subhadeepchell"
                                    target="_blank"
                                    className="text-green-600 no-underline hover:text-white transition-all hover:bg-black hover:px-5 hover:py-3 rounded-badge hover:translate-x-2"
                                >
                                    Subhadeep Chell
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/sayandeb-andybeas/"
                                    target="_blank"
                                    className="text-green-600 no-underline transition-all hover:bg-black hover:px-5 hover:py-3 rounded-badge hover:translate-x-2 hover:text-white"
                                >
                                    Sayan Deb
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/sandhit-karmakar/"
                                    target="_blank"
                                    className="text-green-600 no-underline transition-all hover:bg-black hover:px-5 hover:py-3 rounded-badge hover:translate-x-2 hover:text-white"
                                >
                                    Sandhit Karmakar
                                </a>
                            </li>
                        </ul>
                        <div className='mt-10'>
                            <AboutCard />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default About;
