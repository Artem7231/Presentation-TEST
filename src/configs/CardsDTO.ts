export interface CardProps {
    notHoverImage: string;
    hoverImage: string;
    bg: string;
    hoverBg: string;
    cardTitle: string;
    cardDescription: string;
    typePresentation: 'TOPIC' | 'TEXT' | 'FILE' | 'SLIDE';
}