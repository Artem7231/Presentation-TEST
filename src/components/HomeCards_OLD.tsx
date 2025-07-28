import Card from "./Card.tsx";

const HomeCards = () => {
    return (
        <>
            <section className="py-4">
                <div className="container-md xl:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                        <Card notHoverImage="/notHoverImageCard1.png" hoverImage="/hoverImageCard1.png" bg='bg-[#D6EDFF]' hoverBg='bg-[#FFE4E1]' cardTitle="Введите тему" cardDescription="ИИ мгновенно сгенерирует структура и готовые слайды по вашей теме"></Card>
                        <Card notHoverImage="/notHoverImageCard2.png" hoverImage="/hoverImageCard2.png" bg='bg-[#D6EDFF]' hoverBg='bg-[#E4DCFF]' cardTitle="Вставьте текст" cardDescription="ИИ превратит текст в презентацию с современным дизайном" />
                        <Card notHoverImage="/notHoverImageCard3.png" hoverImage="/hoverImageCard3.png" bg='bg-[#D6EDFF]' hoverBg='bg-[#FFEFC2]' cardTitle="Загрузите файл" cardDescription="PowerPoint, PDF или Word - ИИ быстро преобразует их в стильную презентацию" />
                        <Card notHoverImage="/notHoverImageCard4.png" hoverImage="/hoverImageCard4.png" bg='bg-[#D6EDFF]' hoverBg='bg-[#A5EACD]' cardTitle="Слайд за слайдом" cardDescription="Гибко настраивайте каждый слайд с ИИ, задавая задачи и моложения" />

                    </div>
                </div>
            </section>
        </>
    );
};
export default HomeCards;

///<Card bg='bg-gray-100'>
//    <h2 className="text-2xl font-bold">For Developers</h2>
//    <p className="mt-2 mb-4">
//        Browse our React jobs and start your career today
//    </p>
//    <Link
//        to="/jobs"
//        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
//    >
//        Browse Jobs
//    </Link>
//</Card>*/}