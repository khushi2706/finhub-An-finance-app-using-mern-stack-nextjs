import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import Philosophy from "@/components/philosophy.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Philosophy />
      <ToastContainer hideProgressBar={true} autoClose={2000} position="bottom-right" />
    </>
  );
}
