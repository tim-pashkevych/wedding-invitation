import Image from 'next/image';
import Link from 'next/link';

import { karlotte } from '@/app/ui/fonts';
import {
  AttendanceForm,
  BacktickTimer,
  Section,
  Container,
} from '@/app/ui/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Section className="h-screen w-full bg-[url('/hero-bg.jpg')] bg-cover bg-fixed bg-top bg-no-repeat">
        <div className="absolute h-full w-full bg-gradient-to-b from-black/10 from-0% to-black/40 to-100%"></div>

        <Container className="flex-item h-screen justify-center gap-20 py-40 text-white lg:justify-center">
          <div className="z-10 flex items-end">
            <p className="flex flex-col border-r-2 px-4 text-right">
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
            <p className={`${karlotte.className} px-4 text-2xl uppercase`}>
              Wedding day
            </p>
          </div>
          <h1
            className={`${karlotte.className} z-10 flex flex-col gap-3 text-center text-5xl uppercase md:gap-6 md:text-6xl lg:flex-row`}
          >
            <span className="">Konstantin</span>
            <span className="">&</span>
            <span className="">Valentina</span>
          </h1>
        </Container>
      </Section>
      <Section className="text-center">
        <Container>
          <p className="text-xl">Дорогие друзья!</p>
          <p className="text-xl">
            Приглашаем Вас разделить с нами самое важное событие в нашей жинзи -
            день нашей свадьбы
          </p>
          <p
            className={`${karlotte.className} text-5xl  uppercase md:text-6xl`}
          >
            08.12.2024
          </p>
          <p className="text-xl">
            Мы будем очень рады видеть вас в кругу наших гостей!
          </p>
          <p className="text-xl">Константин и Валентина</p>
        </Container>
      </Section>
      <Section title="Save the day" titleDescription="special">
        <Container>
          <BacktickTimer />
        </Container>
      </Section>
      <Section
        title="Location"
        titleDescription="for you"
        className="w-full bg-lime-950 pb-10 pt-20 text-white"
        descriptionClassName="text-white/[.2]"
      >
        <Container>
          <p className="text-xl">Ждем вас по адресу:</p>
          <address className="text-center text-xl not-italic">
            <div>12345 street</div>
            <div>Vancouver, WA 112233</div>
          </address>
          <Link href="#">Перейти на карту</Link>
        </Container>
      </Section>
      <Section title="Timing" titleDescription="special">
        <Container>
          <div className="mb-4 flex flex-col items-center justify-center">
            <p className={`${karlotte.className} text-5xl md:text-6xl`}>
              14:00
            </p>
            <p>Сбор гостей</p>
            <div className="my-4 h-20 w-px border border-black"></div>
          </div>
          <div className="mb-4 flex flex-col items-center justify-center">
            <p className={`${karlotte.className} text-5xl md:text-6xl`}>
              15:00
            </p>
            <p>Банкет</p>
            <div className="my-4 h-20 w-px border border-black"></div>
          </div>
          <div className="mb-4 flex flex-col items-center justify-center">
            <p className={`${karlotte.className} text-5xl md:text-6xl`}>
              18:00
            </p>
            <p>Свадебный торт</p>
          </div>
        </Container>
      </Section>
      <Section
        title="Will You Attend?"
        titleDescription="invited"
        className="mb-0 w-full bg-lime-950 pb-10 pt-20 text-white"
        descriptionClassName="text-white/[.2]"
      >
        <Container>
          <AttendanceForm />
        </Container>
      </Section>
    </main>
  );
}
