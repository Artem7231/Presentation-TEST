import {HiArrowRight} from "react-icons/hi";
import {Link} from 'react-router-dom';

interface CardProps {
    notHoverImage: string;
    hoverImage: string;
    cardTitle: string;
    cardDescription: string;
    bg: string;
    hoverBg: string;
}

const Card = ({notHoverImage, hoverImage, bg='', hoverBg='', cardTitle, cardDescription}: CardProps) => {
    return (
        <button className="w-full flex-1 transition-all md:hover:-translate-y-4 rounded-xl shadow-xl overflow-hidden">
            <div className={`group max-h-[150px] md:max-h-none  h-full ${bg} hover:${hoverBg} flex md:flex-col flex-grow`}>
                <div className="md:h-[40%] min-h-[150px] min-w-[40%] max-w-[80px] md:max-w-full md:w-auto flex justify-center items-center p-2 md:p-4">
                    <div className="h-full w-full flex justify-center items-center">
                        <img src={notHoverImage} alt="notHoverImage" className="h-full max-h-[80%] w-[70%] md:w-auto object-contain block group-hover:hidden"/>
                        <img src={hoverImage} alt="hoverImage" className="h-full max-h-[80%] w-[70%] md:w-auto object-contain hidden group-hover:block"/>
                    </div>
                </div>

                <div className="bg-white p-2 flex-1 ">
                    <h1 className="p-2 text-left font-semibold text-xl/tight tracking-tighter">
                        {cardTitle}
                    </h1>
                    <p className="text-gray-500 p-2 text-left tracking-tighter">
                        {cardDescription}
                    </p>

                </div>
                <div className="bg-white p-4 flex justify-end">
                    <HiArrowRight/>
                </div>
            </div>
            <Link to="">

            </Link>
        </button>
    )
};
export default Card;








