import { FC, PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;

const Header: FC<HeaderProps> = ({ image: { src, alt }, children }) => {
  return (
    <div>
      <img src={src} alt={alt} />
      {children}
    </div>
  );
};

export default Header;
