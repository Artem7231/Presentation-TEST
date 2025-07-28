import {useState, useEffect} from 'react';
import Spinner from './Spinner';
import Card from "./Card.tsx";

interface CardProps {
    notHoverImage: string;
    hoverImage: string;
    bg: string;
    hoverBg: string;
    cardTitle: string;
    cardDescription: string;
    typePresentation: 'TOPIC' | 'TEXT' | 'FILE' | 'SLIDE';
}

const HomeCards = () => {
    const [cards, setCards] = useState<CardProps[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const res = await fetch('http://localHost:8000/cards');
                const data = await res.json();
                setCards(data);
            } catch (error) {
                console.log('Error fetching cards', error);
            } finally {
                setLoading(false);
            }
        }
        fetchCards();
    }, []);

    if (loading) {
        return <Spinner loading={true} />;
    }

    return (
        <>
            <section className="py-4 h-full">
                <div className="container-md xl:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                notHoverImage={card.notHoverImage}
                                hoverImage={card.hoverImage}
                                bg={card.bg}
                                hoverBg={card.hoverBg}
                                cardTitle={card.cardTitle}
                                cardDescription={card.cardDescription}
                                typePresentation={card.typePresentation}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
export default HomeCards;





// const cards = [
//     {
//         notHoverImage: "/notHoverImageCard1.png",
//         hoverImage: "/hoverImageCard1.png",
//         bg: "bg-[#D6EDFF]",
//         hoverBg: "bg-[#FFE4E1]",
//         cardTitle: "Введите тему",
//         cardDescription: "ИИ мгновенно сгенерирует структура и готовые слайды по вашей теме",
//         typePresentation: "TOPIC",
//     },
//     {
//         notHoverImage: "/notHoverImageCard2.png",
//         hoverImage: "/hoverImageCard2.png",
//         bg: "bg-[#D6EDFF]",
//         hoverBg: "bg-[#E4DCFF]",
//         cardTitle: "Вставьте текст",
//         cardDescription: "ИИ превратит текст в презентацию с современным дизайном",
//         typePresentation: "TEXT",
//     },
//     {
//         notHoverImage: "/notHoverImageCard3.png",
//         hoverImage: "/hoverImageCard3.png",
//         bg: "bg-[#D6EDFF]",
//         hoverBg: "bg-[#FFEFC2]",
//         cardTitle: "Загрузите файл",
//         cardDescription: "PowerPoint, PDF или Word - ИИ быстро преобразует их в стильную презентацию",
//         typePresentation: "FILE",
//     },
//     {
//         notHoverImage: "/notHoverImageCard4.png",
//         hoverImage: "/hoverImageCard4.png",
//         bg: "bg-[#D6EDFF]",
//         hoverBg: "bg-[#A5EACD]",
//         cardTitle: "Слайд за слайдом",
//         cardDescription: "Гибко настраивайте каждый слайд с ИИ, задавая задачи и моложения",
//         typePresentation: "SLIDE",
//     },
// ]