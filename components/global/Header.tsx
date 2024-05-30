import { SignedIn, UserButton } from "@clerk/nextjs";
const Header = () => {
  return (
    <header className="header flex items-center justify-end">
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
