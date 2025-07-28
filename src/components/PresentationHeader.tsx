
interface CreatePresentationHeaderProps {
    presentationHeader: string;
    presentationDescription: string;
}

const PresentationHeader = ({presentationHeader, presentationDescription}: CreatePresentationHeaderProps) => {
    return (
        <section className="home-topics bg-white p-2 transition-all">
            <h1 className="mx-auto font-semibold text-center text-[40px]/[40px] p-2 tracking-tighter">
                {presentationHeader}
            </h1>
            <p className="mx-auto text-center text-xl/5 tracking-tighter">
                {presentationDescription}
            </p>
        </section>
    );
};

export default PresentationHeader;