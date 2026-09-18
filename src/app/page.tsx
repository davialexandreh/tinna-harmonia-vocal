import type { Metadata } from 'next';
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
import { RevelaSecoes } from '@/components/home/RevelaSecoes';
import { SobreResumo } from '@/components/home/SobreResumo';
import { WorkshopsChamada } from '@/components/home/WorkshopsChamada';
import { FaqLd, PessoaESericoLd } from '@/components/seo/DadosEstruturados';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      {/*
        Marca o documento antes da primeira pintura: sem isto, as seções
        apareceriam e só então sumiriam para entrar de novo. Se o script não
        rodar, ou se a pessoa pediu menos movimento, a classe nunca entra e a
        página aparece inteira.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('revelacao-ativa')}}catch(e){}",
        }}
      />
      <RevelaSecoes />
      <PessoaESericoLd />
      <FaqLd />
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
