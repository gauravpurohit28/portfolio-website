import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 px-4 text-[#ADB7BE] sm:text-xl rounded transition duration-200 hover:text-white hover:bg-[#33353F] md:p-0"
      aria-label={title}
    >
      {title}
    </Link>
  );
};

export default NavLink;
