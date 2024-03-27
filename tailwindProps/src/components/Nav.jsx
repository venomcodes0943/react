function Nav() {
    return (
        <>
            <nav className="flex justify-between items-center rounded m-4 p-1 bg-slate-50/90 backdrop-blur">
                <div className="font-bold text-[30px] px-3 text-black">Brand</div>
                <ul className="flex justify-start items-center gap-5 basis-3/5">
                    <li className="list-none text-black font-bold relative"><a href="#">Home</a></li>
                    <li className="list-none text-black font-bold relative"><a href="#">List</a></li>
                    <li className="list-none text-black font-bold relative"><a href="#">About</a></li>
                    <li className="list-none text-black font-bold relative"><a href="#">Contact Us</a></li>
                </ul>
                <form className="flex">
                    <input type="text" className="p-1 ps-3 bg-sky-100 border border-sky-500 text-black outline-sky-600 duration-200 transition-all rounded caret-black" />
                    <button className="px-4 py-1 bg-slate-900 mx-3 rounded">Click Me</button>
                </form>
            </nav>
        </>
    );
}

export default Nav;