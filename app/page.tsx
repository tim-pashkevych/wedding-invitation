'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import clsx from 'clsx';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { isIOS } from 'react-device-detect';
import AOS from 'aos';
import 'aos/dist/aos.css';

import useWindowDimensions from '@/app/ui/hooks/useWindowDimension';
import { karlotte, betmo } from '@/app/ui/fonts';
import {
  AttendanceForm,
  BacktickTimer,
  Section,
  Container,
} from '@/app/ui/components';

export default function Home() {
  const [mapsLink, setMapsLink] = useState(
    'https://maps.app.goo.gl/7da9W9QKmnx563p26?g_st=it',
  );
  const [mapsLinkTitle, setMapsLinkTitle] = useState('Open Google Maps');
  const { width, height } = useWindowDimensions();
  const screenWidth = width ? width : 0;
  const screenHeight = height ? height : 0;

  const smWidth = screenWidth < 640;
  const mdWidth = screenWidth > 640;
  const lgWidth = screenWidth > 768;
  const xlWidth = screenWidth > 1024;
  const xxlWidth = screenWidth > 1280;

  useEffect(() => {
    AOS.init();

    if (isIOS) {
      setMapsLink(
        'https://maps.apple.com/?address=10220%20SE%20Causey%20Ave,%20Happy%20Valley,%20OR%20%2097086,%20United%20States&ll=45.440179,-122.557736&q=10220%20SE%20Causey%20Ave&t=m',
      );
      setMapsLinkTitle('Open Maps');
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Section className="h-screen w-full">
        <ParallaxBanner
          style={{ aspectRatio: '2 / 1' }}
          className="flex h-screen flex-col items-center"
        >
          <ParallaxBannerLayer speed={-20}>
            {smWidth && (
              <Image
                src="/hero.jpg"
                alt="Konstantin and Valentina"
                fill
                style={{
                  objectFit: 'contain',
                }}
                quality={100}
              />
            )}
            {mdWidth && screenHeight < 376 && (
              <Image
                src="/hero.jpg"
                alt="Konstantin and Valentina"
                fill
                style={{
                  objectFit: 'none',
                  objectPosition: 'top',
                }}
                quality={100}
              />
            )}
            {mdWidth && screenHeight > 376 && (
              <Image
                src="/hero-org.jpg"
                alt="Konstantin and Valentina"
                fill
                style={{
                  objectFit: 'none',
                  objectPosition: 'top',
                }}
                quality={100}
              />
            )}
          </ParallaxBannerLayer>

          <div className="absolute z-10 h-full w-full bg-gradient-to-b from-black/10 from-0% to-black/40 to-100%"></div>
          <Container
            className={clsx({
              'flex-item h-screen gap-12 text-white': true,
              'justify-end': screenHeight < 1200,
              'justify-center': screenHeight > 1200,
              'pb-24': screenHeight < 739,
              'pb-36': screenHeight > 739 && screenHeight < 800,
              'pb-48': screenHeight > 800 && screenHeight < 850,
              'pb-56': screenHeight > 850 && screenHeight < 1200,
              'pb-64': screenHeight > 1200,
            })}
          >
            {screenHeight > 430 && (
              <div className="z-10 flex justify-center">
                <p
                  className="flex w-1/2 flex-col border-r-2 px-4 text-right"
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
                  className={`${karlotte.className} w-1/2 px-4 text-2xl uppercase`}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Wedding day
                </p>
              </div>
            )}
            <h1
              className={`${karlotte.className} z-10 flex flex-col gap-3 text-center text-5xl uppercase md:gap-6 md:text-6xl lg:flex-row`}
            >
              <span
                className=""
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="100"
                data-aos-delay="100"
              >
                Konstantin
              </span>
              <span
                className=""
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-offset="100"
                data-aos-delay="100"
              >
                &
              </span>
              <span
                className=""
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-offset="10"
                data-aos-delay="100"
              >
                Valentina
              </span>
            </h1>
          </Container>
        </ParallaxBanner>
      </Section>
      <Section className="pt-10">
        <Container className="pb-0 pt-10">
          <h2
            className="relative mb-10 flex w-auto flex-col text-center text-5xl uppercase md:text-6xl"
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
      <Section className="pb-10 text-center">
        <Container className="pb-10 pt-5">
          <p
            className="mb-5 text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            On this special day, a very important event will take place for the
            both of us.
          </p>
          <p
            className="pb-6 text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            We would be honored to have you as guests and witnesses to the
            beginning of this new chapter in our lives.
          </p>
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
            href={mapsLink}
            target="_blank"
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <MapPinIcon className="size-6" />
            {mapsLinkTitle}
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
              data-aos-duration="1000"
              data-aos-delay="100"
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
              <p className="text-lg uppercase">Welcome</p>
              <div className="my-4 h-20 w-px border border-white"></div>
            </div>

            <div
              className="mb-4 flex flex-col items-center justify-center"
              data-aos="flip-up"
              data-aos-duration="2000"
              data-aos-delay="100"
              data-aos-offset="200"
            >
              <p className={`${karlotte.className} text-5xl md:text-6xl`}>
                16:00
              </p>
              <p className="text-lg uppercase">Wedding ceremony</p>
              <div className="my-4 h-20 w-px border border-white"></div>
            </div>

            <div
              className="mb-4 flex flex-col items-center justify-center"
              data-aos="flip-up"
              data-aos-duration="2000"
              data-aos-delay="100"
              data-aos-offset="200"
            >
              <p className={`${karlotte.className} text-5xl md:text-6xl`}>
                17:00
              </p>
              <p className="text-lg uppercase">Dinner</p>
              <div className="my-4 h-20 w-px border border-white"></div>
            </div>

            <div
              className="mb-4 flex flex-col items-center justify-center"
              data-aos="flip-up"
              data-aos-duration="2000"
              data-aos-delay="100"
              data-aos-offset="300"
            >
              <p className={`${karlotte.className} text-5xl md:text-6xl`}>
                21:00
              </p>
              <p className="text-lg uppercase">Farewell</p>
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
            data-aos-offset="200"
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
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-offset="200"
          >
            <AttendanceForm />
          </div>
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

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <p className="mb-4">For any questions, please call</p>

            <a
              href="tel:3609490636"
              className="mb-5 flex w-full items-center gap-1 rounded-xl bg-white/[.2] p-5 text-lg"
            >
              <PhoneIcon className="size-6"></PhoneIcon>(360) 949-0636
              <span className="text-sm">(Konstantin)</span>
            </a>
            <a
              href="tel:5039847066"
              className="mb-5 flex w-full items-center gap-1 rounded-xl bg-white/[.2] p-5 text-lg"
            >
              <PhoneIcon className="size-6"></PhoneIcon>(503) 984-7066{' '}
              <span className="text-sm">(Valentina)</span>
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}
