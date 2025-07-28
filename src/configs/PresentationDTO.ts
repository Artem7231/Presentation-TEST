export interface PresentationDTO {
    id: string;
    startParams: StartParams;
    contentParams: ContentParams
    templateParams: TemplateParams;
}
export interface StartParams {
    title: string;
    files: FileParams[];
    userText: string;
}
export interface ContentParams {
    language: "RU" | "EN" | "FR" | "JA" | "DE" | "ES";
    textCount: "SHORT" | "OPTIMAL" | "DETAILED";
    textType: "DEFAULT" | "SCIENTIFIC" | "CREATIVE";
    audience: "GENERAL" | "SCHOOL" | "UNIVERSITY" | "BUSINESS" | "CUSTOMERS" | "INVESTORS" ;
}
export interface TemplateParams {
    templateId: string;
    templateColor: "WHITE" | "BLACK" | "BLUE" | "RED" | "YELLOW" | "GREEN";
}
export interface FileParams {
    id: string;
    url: string;
}