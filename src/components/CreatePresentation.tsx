/*import {useEffect, useState} from "react";
import Spinner from "./Spinner.tsx";
import PresentationHeader from "./PresentationHeader.tsx";*/
import {useLocation} from "react-router";
// import presentationHeader from "./PresentationHeader.tsx";
/*interface CardProps {
    cardTitle: string;
    cardDescription: string;
    typePresentation: string;
}*/
/*interface PresentationProps {
    presentationTitle: string;
    presentationTopic: string;
}*/

const CreatePresentationsPage = () => {
    const location = useLocation();
    const { typePresentation } = location.state || {};
    const renderFromFields = () => {
        switch(typePresentation) {
            case 'TOPIC':
                return (
                    <>
                        Тут создание презентации по теме
                    </>
                );
            case 'TEXT':
                return (
                    <>
                        Тут создание презентации по тексту
                    </>

                );
            case 'FILE':
                return (
                    <>
                        Тут создание презентации по файлу
                    </>

                );
            case 'SLIDE':
                return (
                    <>
                        Тут создание презентации по слайдам
                    </>
                );
        }
    }
    return(
        <>
            { renderFromFields() }
        </>

    )
};

export default CreatePresentationsPage;













/*Достаем title и description карточки*/
/*const CreatePresentation = () => {
    const location = useLocation();
    const { typePresentation } = location.state || {};

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
        <div>
            {cards.map((card, index) => (
                <PresentationHeader
                    key={index}
                    CreatePresentationTitle={card.cardTitle}
                    CreatePresentationTopic={card.cardDescription}
                />
            ))}
        </div>
    );
};

export default CreatePresentation;*/






