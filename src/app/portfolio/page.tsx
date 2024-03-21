
import Link from 'next/link';
import Head from 'next/head';
import PortfolioCard from "@/app/_components/portfolio/PortfolioCard";
import { getAllPortfolios } from '@/lib/api';
import Container from '../_components/Container';


const PortfolioListPage = () => {
    // const [activeTab, setActiveTab] = useState<string>('all');
    const portfolios = getAllPortfolios();
    let hasPart = portfolios.map((portfolio) => {
        return {
            "@type": "CreativeWork",
            "name": portfolio.title,
            "url": "https://vasilkoff.com/portfolio/" + portfolio.slug,
            "image": "https://vasilkoff.com/" + portfolio.picture,
            "description": portfolio.description,
            "creator": {
                "@type": "Organization",
                "name": "Vasilkoff",
                "url": "https://vasilkoff.com"
            }
        }
    });
    //Explore Vasilkoff's portfolio: A showcase of web & mobile apps, ML projects, and innovative blockchain solutions. Witness our tech prowess firsthand!
    //t="Explore our diverse portfolio at Vasilkoff. We've developed innovative web and mobile solutions for businesses across various sectors, demonstrating our commitment to excellence and client satisfaction.
    return (
        <div>
            <Head>
                <title>Portfolio - Vasilkoff Ltd</title>
                <meta property="og:title" content="Portfolio - Vasilkoff Ltd" />
                <meta name="description" content="Explore Vasilkoff's portfolio: A showcase of web & mobile apps, ML projects, and innovative blockchain solutions. Witness our tech prowess firsthand!" />
                <meta name="og:description" content="Explore Vasilkoff's portfolio: A showcase of web & mobile apps, ML projects, and innovative blockchain solutions. Witness our tech prowess firsthand!" />
                <meta property="og:image" content="https://vasilkoff.com/portfolio/portfolio.webp" />
                <meta property="og:url" content="https://vasilkoff.com/portfolio" />

                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio",
    "description": "A collection of projects we have developed",
    "hasPart": ${JSON.stringify(hasPart)}
}`
                    }} />

            </Head>


            <section className="pt-12 mt-40 pb-14 md:pb-[100px]">
                <Container>
                    <div className="heading text-center">
                        <h1>Our Portfolio</h1>
                    </div>

                    {/* <div className="overflow-x-auto">
                        <ul className="filters portfolio-filter mx-auto flex w-max gap-7 whitespace-nowrap pb-2.5 font-bold dark:text-white">
                            <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('all')}
                                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    All Work
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'Mobile App' ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('Mobile App')}
                                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    Mobile Apps
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'Website' ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('Website')}
                                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    Websites
                                </button>
                            </li>

                            <li className={`filter ${activeTab === 'Crypto' ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('Crypto')}
                                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    Crypto
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'eCommerce' ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('eCommerce')}
                                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    eCommerce
                                </button>
                            </li>
                        </ul>
                    </div> */}


                    <div className="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {
                            portfolios.map((portfolio, index) => (
                                <PortfolioCard key={index} obj={portfolio}  />
                            ))
                        }

                    </div>
                </Container>
            </section>
        </div>
    );
};

export default PortfolioListPage;
