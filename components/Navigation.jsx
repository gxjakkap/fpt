import Link from "next/link"

const ExternalIcons = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mb-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
    )
}

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 z-10">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">สีฟ้า💙</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link href="/"><a>หน้าหลัก</a></Link></li>
                    <li><Link href="/sports"><a>ประเภทกีฬา</a></Link></li>                    
                    <li><a href="https://docs.google.com/spreadsheets/d/1P7IWbd2znQXHuaLHgwEHi7QvpuX06d5j" rel="noreferrer" target="_blank">ตารางแข่ง<ExternalIcons /> </a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar