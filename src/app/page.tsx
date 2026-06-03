"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Who from "@/components/Who";
import How from "@/components/How";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BookingModal from "@/components/BookingModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Hero onCta={() => setModalOpen(true)} />
      <Manifesto />
      <Problem />
      <Services onCta={() => setModalOpen(true)} />
      <Pricing onCta={() => setModalOpen(true)} />
      <Who />
      <How />
      <About />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
