import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="min-h-full pt-4 pb-[65px] container">
      <Header />
      <main className="min-h-full flex-grow flex flex-col items-center justify-center">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
