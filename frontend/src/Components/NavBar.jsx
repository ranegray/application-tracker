const NavBar = () => {
    return (
        <div className="flex justify-between items-center p-5">
            <div className="flex items-center">
                <img src="/application_flat_minimal_logo.png" alt="minimal geometric logo" className="w-12 h-12" />
                <h1 className="text-2xl font-bold pl-2">Trakr</h1>
            </div>
            <div>
                <a href="" className="pr-2">Help</a>
                <a href="">Profile</a>
            </div>
        </div>
    )
}

export default NavBar;