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
        O pôster do hero é o maior elemento da primeira tela em qualquer
        caminho: ele é o fundo quando não há vídeo e é o quadro inicial quando
        há. Pré-carregar tira a espera da fila de descoberta.
      */}
      <link rel="preload" as="image" href="/midia/hero-poster.jpg" fetchPriority="high" />
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
