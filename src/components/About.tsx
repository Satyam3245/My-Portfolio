export const AboutSection:React.FC = ()=>{
    return<div className="border-l p-3">
        <div className="flex justify-between items-center my-2">
            <div className="flex items-center gap-x-3">
                <div>
                    <img className="w-[50px] h-[50px] rounded-xl" src="ayush.jpeg" alt="" />
                </div>
                <div>
                    <div className="text-3xl">Satyam</div>
                    <div className="text-gray-400 text-sm">Full Stack Developer</div>
                </div>
            </div>
            <div>
                <a href="https://twitter.com/m_Satyam_12" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 border-2 border-black rounded-xl ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
            </div>
        </div>
        <hr />
        <div className="text-sm my-2">
            <div className="flex gap-x-1 my-1">
                <div className="font-semibold">University :</div>
                <div>Panipat Institute of Engineering and Technology</div>
            </div>
            <div className="flex gap-x-1 my-1">
                <div className="font-semibold">Course :</div>
                <div>Bachelor of Technology (2022 - 2026)</div>
            </div>
            <div className="flex gap-x-1 my-1">
                <div className="font-semibold">Majors :</div>
                <div>Artificial Intelligence and Data Science</div>
            </div>
            <div className="my-3 text-lg">Skills Summary</div>
            <hr />
        </div>
        <div className="text-sm ">
            <div className="flex my-1">
                <div className="font-semibold">Programming Languages</div>
                <div>TypeScript,Python,SQL,Rust</div>
            </div>
            <div className="flex gap-x-1 my-1">
                <div className="font-semibold">Frontend Dev  </div>
                <div>Next.js,React.js,TailwindCSS,Redux</div>
            </div>
            <div className="flex gap-x-1 my-1">
                <div className="font-semibold">Backend  </div>
                <div>Node.js,Typescript,Express.js,Next.js,Hono</div>
            </div>
            <div className="flex gap-x-1 my-1">
                <div className="font-semibold">DevOps and Cloud </div>
                <div>CI/CD,Kubernetes,Docker,AWS,Cloudflare</div>
            </div>
            <div className="text-lg my-3">Profile</div>
            <hr />
        </div>
        <div className="flex gap-x-2 justify-center">
            <a href="https://twitter.com/m_Satyam_12" target="_blank" rel="noopener noreferrer">
                <img className="w-[50px] h-[50px]" src="icons8-twitter-48.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/satyam-mitrav-b70892286/">
                <img className="w-[50px] h-[50px]" src="icons8-linkedin-48.png" alt="" />
            </a>
            <a href="https://github.com/Satyam3245/">
                <img className="w-[50px] h-[50px]" src="icons8-github-32.png" alt="" />
            </a>
            
        </div>
    </div>
}