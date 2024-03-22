// src/app/about-us/page.tsx
import Link from 'next/link';
import Head from 'next/head';
import AIContacts from '../_components/contacts/AIContacts';
import Container from '../_components/Container';

export default function AboutUsPage() {

    return (
        <>
            <Head>
                <title>About Us - Vasilkoff</title>
                <meta
                    name="description"
                    content="Learn more about Vasilkoff, a full-stack mobile apps and web-development company. Discover our mission, vision, team, and why we're the right choice for your mobile apps and web-development needs."
                />
            </Head>

            <section className="relative overflow-hidden pt-14 mt-40 lg:pt-[100px]">
                <Container className=" relative z-[1]">
                    <div className="text-center lg:w-1/2 lg:text-left">
                        <div className="heading">
                            <h1>About Us</h1>
                            <h2>Your Trusted IT Partner</h2>
                        </div>
                        <div className="font-medium pb-10 text-lg leading-[30px]">
                            <p >
                                Our team of IT professionals, primarily based in Cyprus and Ukraine, is dedicated to delivering exceptional technology solutions that empower your business.
                            </p>
                            <p className="font-semibold">
                                🇺🇦 By supporting Ukraine, we showcase our commitment to our team members and the communities we serve.
                            </p>
                        </div>
                    </div>

                    <AIContacts />
                </Container>
            </section>

        </>
    );
};

