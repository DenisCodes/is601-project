import Link from 'next/link';
// import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-#983F3F p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Rustic Italian Trattoria</h1>
        <div className="flex space-x-4">
          <NavLink href="/" text="Home"></NavLink>
          <NavLink href="/about" text="About Us"></NavLink>
          <NavLink href="/menu" text="Menu"></NavLink>
          <NavLink href="/contact" text="Contact Us"></NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ text: string, href: string }> = ({ text, href }) => {
  // const { pathname } = useRouter();

  // // Determine if the current page matches the link
  // const isActive = pathname === href || '';
  const isActive = true;

  return (
    <Link href={href} className={`text-white ${isActive ? 'underline' : ''} hover:text-gray-300`}>
        {text}
    </Link>
  );
};

export default Navbar;
