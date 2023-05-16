import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 style="text-align: left;"><strong>Faites d&eacute;coller vos projets avec Marie Ollier</strong></h1>
<h2 style="text-align: center;"><strong>Vous cherchez un <a href="https://www.marieollier.com/graphiste-illustratrice-bordeaux/">graphiste &agrave; Bordeaux</a>&nbsp;qui puisse vous offrir des prestations de qualit&eacute; ?&nbsp;</strong></h2>
<p><strong>Le studio de graphisme et illustration de <a title="Marie Ollier" href="https://www.marieollier.com/">Marie Ollier</a> vous propose :&nbsp;</strong></p>
<ul>
<li><strong>CR&Eacute;ATION DE LOGO</strong></li>
<li><strong>IDENTIT&Eacute; VISUELLE</strong></li>
<li><strong>PACKAGING</strong></li>
<li><strong>VITRINE</strong></li>
<li><strong>DESIGN PRODUIT</strong></li>
<li><strong>WEB DESIGN</strong></li>
<li><strong>ILLUSTRATION</strong></li>
<li><strong>DIRECTION ARTISTIQUE</strong><strong><br /></strong></li>
</ul>
<p style="text-align: center;"><strong>Offrez vous la cr&eacute;ativit&eacute; sans limite de Marie Ollier</strong></p>
<p style="text-align: center;">&nbsp;</p>
<p>&nbsp;</p>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
