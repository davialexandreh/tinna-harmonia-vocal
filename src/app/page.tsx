import { CtaFinal } from '@/components/home/CtaFinal';
import { Depoimentos } from '@/components/home/Depoimentos';
import { Faq } from '@/components/home/Faq';
import { Ferramentas } from '@/components/home/Ferramentas';
import { Hero } from '@/components/home/Hero';
import { Metodo } from '@/components/home/Metodo';
import { Niveis } from '@/components/home/Niveis';
import { ParaQuem } from '@/components/home/ParaQuem';
import { ProblemaSolucao } from '@/components/home/ProblemaSolucao';
import { ProvaSocial } from '@/components/home/ProvaSocial';
import { SobreResumo } from '@/components/home/SobreResumo';
import { WorkshopsChamada } from '@/components/home/WorkshopsChamada';

export default function Home() {
  return (
    <>
      <Hero />
      <ProvaSocial />
      <ProblemaSolucao />
      <Metodo />
      <Niveis />
      <SobreResumo />
      <Depoimentos />
      <ParaQuem />
      <Ferramentas />
      <WorkshopsChamada />
      <Faq />
      <CtaFinal />
    </>
  );
}
