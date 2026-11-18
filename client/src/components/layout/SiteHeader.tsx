import Menu from "./Menu";

function SiteHeader() {
  return (
    <header className="flex">
      <nav className="flex absolute z-10 w-full h-dvh overflow-hidden">
          <Menu />
      </nav>
    </header>
  );
}

export default SiteHeader;
