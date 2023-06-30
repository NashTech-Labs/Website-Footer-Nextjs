import Footer from "../../Components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/main.jpg" width={2000} height={610} alt="LadingPageCar" />
      <Footer />
    </>
  );
}
