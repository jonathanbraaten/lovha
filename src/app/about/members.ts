import { StaticImageData } from 'next/image';
import avatarJørgen from '/public/jorgen.webp';
import avatarKaeo from '/public/kaeo.webp';
import avatarMorten from '/public/morten.webp';
import avatarTobias from '/public/tobias.webp';
type Team = {
  id: number;
  role: string;
  firstName: string;
  lastName: string;
  image: StaticImageData;
};

export const avatars: Team[] = [
  {
    id: 1,
    role: 'Daglig leder og programmerer',
    firstName: 'Kaeophailin.',
    lastName: 'L',
    image: avatarKaeo,
  },
  {
    id: 2,
    role: 'Nest leder og 3D modellerer',
    firstName: 'Jørgen',
    lastName: 'Villanueva',
    image: avatarJørgen,
  },
  {
    id: 3,
    role: 'Programmerer og 3D modellerer',
    firstName: 'Morten',
    lastName: 'Hermansen',
    image: avatarMorten,
  },
  {
    id: 4,
    role: '3D modellerer',
    firstName: 'Tobias',
    lastName: 'Ormset',
    image: avatarTobias,
  },
];
