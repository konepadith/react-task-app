import "./Header.css"
export default function Header(props){
    const {theme,setTheme}=props
    const ToggleTheme=()=>{
        if (theme ==="light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return(
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
                <span>{theme === "light"? "Light Mode" : "Dark Mode"}</span>
                <span className="icon" onClick={ToggleTheme}>Switch Mode</span>
            </div>
        </header>
    )
}