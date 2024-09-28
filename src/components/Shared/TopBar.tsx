// import a from "next/a";
// import Image from "next/image";
// import Brand from "../brand/Brand";

function TopBar(){
 return (
    <nav className={'topbar-v2 blur-effect '}>
        <a href={'/'} className="flex items-center dark:text-white flex-row navlink">
        SnakeZinger</a>

        <div>
            <a className="dark:text-white" href={"/snake"}><button className="">Play Now!</button> </a>
        </div>

        
    </nav>
 )
}
export default TopBar;