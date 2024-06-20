import Link from 'next/link';
const navListItems: { id: number; path: string; name: string }[] = [
  { id: 1, path: '/', name: 'Hjem' },
  { id: 2, path: '/games', name: 'Spill' },
  { id: 3, path: '', name: 'Prosjekter' },
  { id: 4, path: '/about', name: 'Om oss' },
  { id: 5, path: '/contact', name: 'Kontakt oss' },
] as const;

export const NavList = () => {
  return (
    <ul className="inter-bold flex flex-col gap-10 px-10 text-2xl  md:flex-row md:gap-5 md:px-0 md:text-base  h-full">
      {navListItems.map(({ id, path, name }) => (
        <li key={id}>
          <Link href={path}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
