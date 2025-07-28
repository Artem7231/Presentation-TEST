
export interface CardProps {
    notHoverImage: string;
    hoverImage: string;
    bg: string;
    hoverBg: string;
    cardTitle: string;
    cardDescription: string;
    typePresentation: 'TOPIC' | 'TEXT' | 'FILE' | 'SLIDE';
}
const Presentation = () => {
    return (
        <section>
            <div>
                <label>
                    Тема презентации
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="Введите тему"

                />
            </div>
            <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Job Type</label
                >
                <select
                    id="type"
                    name="type"
                    className="border rounded w-full py-2 px-3"
                    required
                    value
                    onChange
                >
                    <option value="1">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                </select>
            </div>

        </section>

    );
};

export default Presentation;


