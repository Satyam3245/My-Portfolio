export const Appbar = ()=>{
    return<div className="pt-[30px] px-[25px] ">
       <div className="flex justify-between items-center">
            <div className="flex"><img className="w-[40x] h-[35px]" src="878365c5ec7b15f95fb2faca90246fd6.png" alt="" /></div>
            <div className="flex flex-col">
                <SearchBar/>
            </div>
            <div className="flex">
                <div className="mx-[10px]">
                     <SettingIcon/>
                </div>
                <div className="mx-[10px]">
                    <AppIcon/>
                </div>
                <div className="mx-[10px]">
                <ProfileIcon/>
                </div>
            </div>
       </div>
       <div className="flex justify-center">
            <Button name = "GitHub"/>
            <Button name = "Twitter"/>
            <Button name = "Contact"/>
            <Button name = "Linkedin"/>
       </div>
       <hr className="mt-[0px]"/>
    </div>
}


const SearchBar = ()=>{
    return <>
        <input type="text" placeholder="Satyam" className="placeholder-black custom-placeholder w-[700px] h-[45px] border text-[20px] p-[24px]  rounded-[15px] shadow-xl focus:outline-none"/>
    </>
}
const Button = ({name}:{name:string})=>{
    return<div className="mx-[8px] my-[15px]">
        <button className="rounded-3xl border-[1px] p-[12px]">{name}</button>
    </div>
}
const SettingIcon = ()=>{
    return<>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.9}
        stroke="currentColor"
        className="w-8 h-8"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
    </svg>
</>
}
const AppIcon = ()=>{
    return<>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.9}
        stroke="currentColor"
        className="w-8 h-8 font-extrabold"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        />
    </svg>
</>

} 
const ProfileIcon = ()=>{
    return<>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.9}
        stroke="currentColor"
        className="w-8 h-8"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
    </svg>
</>

}