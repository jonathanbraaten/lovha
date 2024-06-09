import { FaArtstation, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { avatars } from './members';
export const Avatars = () => (
  <>
    {avatars.map(({ id, role, firstName, lastName, image }) => (
      <article className="flex flex-col gap-2" key={id}>
    
        <Image
          loading="lazy"
          width={200}
          height={200}
          className="max-w-full w-full object-cover aspect-square rounded-md shadow-raised"
          src={image}
          alt={`image of ${firstName}${lastName}`}
        />
        <div className="flex justify-between">
          <p className="inter-semi text-xl">
            {firstName} {lastName}
          </p>
          <div className="flex gap-4">
            <Link className="" href={''}>
              <FaArtstation aria-label="artstation" size={20} />
            </Link>
            <Link href={''}>
              <FaLinkedinIn aria-label="linkedin" size={20} />
            </Link>
          </div>
        </div>
        <div>
          <p>{role}</p>
        </div>
      </article>
    ))}
  </>
);
