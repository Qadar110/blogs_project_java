import { CircleUserRound, Info, Newspaper, Pen } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

const BottomNavBar = () => {
	const location = useLocation()
	
	if(location.pathname === "/create/blog-post" || location.pathname.includes("/blog/article/") || location.pathname.includes("/edit/blog-post")){
		return null;
	}

  return (
    <div className="fixed p-5 flex flex-row justify-between  bottom-0 left-0 right-0 z-10 container mx-auto lg:max-w-[1120px] w-full sm:max-w-lg pb-5 ">
			<Link to="/profile">
				<div className="flex justify-center items-center flex-col group cursor-pointer">
					<div
						className="flex items-center flex-col  justify-center"
					>
						<CircleUserRound className="h-6 w-6 group-hover:scale-125 transition-all " />
						<span className="text-sm ">Profile</span>
					</div>
				</div>
			</Link>
			{
				location.pathname == "/" ?
				<AddPost/>
				:
				<Link  to="/" className="transition-all">
					<Newspaper size={10} className="h-8 w-8 hover:scale-125 transition-all" />
				</Link>
			}
			<Link to="/contact">
				<div className="flex justify-center items-center flex-col group cursor-pointer">
					<div
						className="flex items-center flex-col  justify-center "
					>
						<Info className="h-6 w-6 group-hover:scale-125 transition-all" />
						<span className="text-sm">Contact</span>
					</div>
				</div>
			</Link>
		</div>
    )
}

const AddPost = () => {
	return (
		<Link  to="/create/blog-post" className="transition-all">
			<Pen size={10} className="h-8 w-8 hover:scale-125 transition-all" />
		</Link>
	);
};

export default BottomNavBar