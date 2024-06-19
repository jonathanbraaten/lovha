import { StaticImageData } from 'next/image';
import testImage from '/public/wallhaven-486ox2.png'
export type CardsDataType = {
  id: number;
  title: string;
  path: string;
  text: string;
  image: StaticImageData;
};
export const cardsData: CardsDataType[] = [
  {
    id: 1,
    title: 'Våre spill',
    path: '/',
    text: 'Ta steget inn i en luftig og enestående spillopplevelse, høyt over skyene! I vårt kommende spill blir du kastet inn i en fantastisk arena som svever i himmelens rike. Her venter en verden hvor fantasien regjerer, full av livlige overraskelser og innovative funksjoner. Mestre kampen mot andre spillere på flytende øyer, hvor hvert eneste slag innebærer en kamp for tilværelsen.',
    image: testImage,
  },
  {
    id: 2,
    title: 'Prosjekter',
    path: '/',
    text: 'Fra julen 2023 til nyåret 2024, fikk vi et Motion Capture Clean up arbeid. Dette arbeidet ble gjort for et prosjekt kalt “Læringsavatar”, og prosjektet ble startet av Kunsthøgskolen i Oslo. Premisset til “Læringsavatar” var å styrke studentaktiv læring i bevegelsesfag, gjennom utforskende bruk av en digital læringsressurs kalt VisBev3D. Sammen med andre skoler og aktører, gjorde ulike personer Motion Capture opptak av spesifikke bevegelser. ',
    image: testImage,
  },
  {
    id: 3,
    title: 'Kontakt',
    path: '/',
    text: 'Kontakt oss for en hyggelig prat. ',
    image: testImage,
  },
];


