import CalBookingButton from "../CalBookingButton";

const Header = () => {
  return (
    <div className="w-full max-w-full h-auto flex items-start justify-center">
        <div className="w-full max-w-[70%] h-full flex items-center justify-between border border-black/15 rounded-2xl px-2 pl-6 py-2">
            <div className="text-xl font-normal tracking-tighter hover:cursor-pointer">Hassan</div>
            <div>
                <ul className="flex items-center justify-center gap-4"> 
                    <li>About</li>
                    <li className="text-blue-600">•</li>
                    <li>Work</li>
                    <li className="text-blue-600">•</li>
                    <li>Services</li>
                </ul>
            </div>
            <CalBookingButton />
        </div>
    </div>
  )
}

export default Header