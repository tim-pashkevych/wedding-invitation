'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { karlotte, betmo } from '@/app/ui/fonts';
import {
  AttendanceForm,
  BacktickTimer,
  Section,
  Container,
} from '@/app/ui/components';
import { useEffect } from 'react';
import clsx from 'clsx';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Section className="h-screen w-full ">
        <ParallaxBanner
          style={{ aspectRatio: '2 / 1' }}
          className="flex h-screen flex-col items-center"
        >
          <ParallaxBannerLayer speed={-20}>
            <Image
              src="/hero-copy.jpg"
              alt="Konstantin and Valentina"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
              }}
              quality={100}
            />
          </ParallaxBannerLayer>

          <div className="absolute z-10 h-full w-full bg-gradient-to-b from-black/10 from-0% to-black/40 to-100%"></div>
          <Container className="flex-item h-screen justify-end gap-12 text-white lg:justify-center">
            {/* <Container className="flex-item h-screen justify-center gap-20 py-40 text-white lg:justify-center"> */}
            <div className="z-10 flex items-end">
              <p
                className="flex flex-col border-r-2 px-4 text-right"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <span
                  className={`${karlotte.className} relative -top-12 text-5xl uppercase md:text-6xl`}
                >
                  08
                </span>
                <span
                  className={`${karlotte.className} relative -top-12 text-5xl uppercase md:text-6xl`}
                >
                  12
                </span>
                <span
                  className={`${karlotte.className} relative -top-12 text-5xl uppercase md:text-6xl`}
                >
                  24
                </span>
              </p>
              <p
                className={`${karlotte.className} px-4 text-2xl uppercase`}
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Wedding day
              </p>
            </div>
            <h1
              className={`${karlotte.className} z-10 flex flex-col gap-3 text-center text-5xl uppercase md:gap-6 md:text-6xl lg:flex-row`}
            >
              <span
                className=""
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="300"
                data-aos-delay="100"
              >
                Konstantin
              </span>
              <span
                className=""
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-offset="300"
                data-aos-delay="100"
              >
                &
              </span>
              <span
                className=""
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-delay="100"
              >
                Valentina
              </span>
            </h1>
          </Container>
        </ParallaxBanner>
      </Section>
      <Section className="text-center">
        <Container>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <p className="text-xl">Дорогие друзья.</p>
            <p className="text-xl">
              В нашей жизни скоро состоится важное событие - Наша Свадьба
            </p>
            <p className="pb-6 text-xl">
              Позвольте пригласить Вас разделить радость этого дня
            </p>
          </div>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            className={`${karlotte.className} text-5xl  uppercase md:text-6xl`}
          >
            08.12.2024
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2
            className="relative mb-6 flex w-auto flex-col text-center text-5xl uppercase md:text-6xl"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <span className={karlotte.className}>Save the day</span>
            <span
              className={clsx([
                betmo.className,
                'absolute -right-5 top-8 text-6xl normal-case text-black/[.2] md:text-7xl',
              ])}
            >
              special
            </span>
          </h2>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
            <BacktickTimer />
          </div>
        </Container>
      </Section>
      <Section className="w-full bg-lime-950 pb-10 pt-10 text-white">
        <Container>
          <h2
            className="relative mb-16 flex w-auto flex-col text-center text-5xl uppercase md:text-6xl"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <span className={karlotte.className}>Location</span>
            <span
              className={clsx([
                betmo.className,
                'absolute -right-5 top-8 text-6xl normal-case text-white/[.2] md:text-7xl',
              ])}
            >
              for you
            </span>
          </h2>
          <div
            className="mb-5 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <address className="text-center text-xl not-italic">
              <div>10220 SE Causey Ave</div>
              <div>Happy Valley, OR 97086</div>
            </address>
          </div>

          <Link
            className="flex items-center gap-2 rounded-xl bg-white/[.2] p-5 text-xl"
            href="https://maps.app.goo.gl/7da9W9QKmnx563p26?g_st=it"
            target="_blank"
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <MapPinIcon className="size-6" />
            Open Google Map
          </Link>
        </Container>
      </Section>
      <Section className="h-timing mb-0">
        <ParallaxBanner
          style={{ aspectRatio: '2 / 1' }}
          className="flex h-full flex-col items-center"
        >
          <ParallaxBannerLayer speed={-20}>
            <Image
              src="/timing-bg.jpg"
              alt="Timing"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              quality={100}
            />
          </ParallaxBannerLayer>

          <div className="absolute z-10 h-full w-full bg-gradient-to-b from-black/10 from-0% to-black/40 to-100%"></div>
          <Container className="h-auto pt-20 text-white">
            <h2
              className="relative mb-16 flex w-auto flex-col text-center text-5xl uppercase md:text-6xl"
              data-aos="fade-down"
              data-aos-duration="3000"
              data-aos-delay="200"
            >
              <span className={karlotte.className}>Timing</span>
              <span
                className={clsx([
                  betmo.className,
                  'absolute -right-5 top-8 text-6xl normal-case text-white/[.2] md:text-7xl',
                ])}
              >
                special
              </span>
            </h2>

            <div
              className="mb-4 flex flex-col items-center justify-center"
              data-aos="flip-up"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              <p className={`${karlotte.className} text-5xl md:text-6xl`}>
                15:30
              </p>
              <p>Cбор гостей</p>
              <div className="my-4 h-20 w-px border border-white"></div>
            </div>

            <div
              className="mb-4 flex flex-col items-center justify-center"
              data-aos="flip-up"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              <p className={`${karlotte.className} text-5xl md:text-6xl`}>
                16:00
              </p>
              <p>Торжественная церемония</p>
              <div className="my-4 h-20 w-px border border-white"></div>
            </div>

            <div
              className="mb-4 flex flex-col items-center justify-center"
              data-aos="flip-up"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              <p className={`${karlotte.className} text-5xl md:text-6xl`}>
                17:00
              </p>
              <p>Банкет</p>
              <div className="my-4 h-20 w-px border border-white"></div>
            </div>

            <div
              className="mb-4 flex flex-col items-center justify-center"
              data-aos="flip-up"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              <p className={`${karlotte.className} text-5xl md:text-6xl`}>
                21:00
              </p>
              <p>Завершение торжества</p>
            </div>
          </Container>
        </ParallaxBanner>
      </Section>
      <Section className="w-full pb-10 pt-10 ">
        <Container>
          <h2
            className="relative mb-16 flex w-auto flex-col text-center text-5xl uppercase md:text-6xl"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <span className={karlotte.className}>Will You Attend?</span>
            <span
              className={clsx([
                betmo.className,
                'text-balack/[.2] absolute -right-5 top-20 text-6xl normal-case md:text-7xl',
              ])}
            >
              invited
            </span>
          </h2>
          <AttendanceForm />
        </Container>
      </Section>
      <Section className="w-ful bg-lime-950 pb-10 pt-10 text-white">
        <Container className="text-center text-xl not-italic">
          <h2
            className="relative mb-16 flex w-auto flex-col text-center text-5xl uppercase md:text-6xl"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <span className={karlotte.className}>Contacts</span>
            <span
              className={clsx([
                betmo.className,
                'absolute -right-5 top-8 text-6xl normal-case text-white/[.2] md:text-7xl',
              ])}
            >
              questions
            </span>
          </h2>

          <p
            className="mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            По всем возникшим вопросам просьба обращаться по телефону
          </p>

          <a
            href="tel:5032478727"
            className="flex items-end gap-2 rounded-xl bg-white/[.2] p-5"
            data-aos="flip-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <PhoneIcon className="size-6"></PhoneIcon>(503)-427-8727
          </a>
        </Container>
      </Section>
    </main>
  );
}
