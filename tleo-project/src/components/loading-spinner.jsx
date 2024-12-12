import { BookLoader } from "react-awesome-loaders";
export const BookLoaderComponent = () => {
  return (
    <>
      <BookLoader
        background={"linear-gradient(135deg, #D4AF37, #4645F6)"}
        desktopSize={"100px"}
        mobileSize={"80px"}
        textColor={"#4645F6"}
      />
    </>
  );
};