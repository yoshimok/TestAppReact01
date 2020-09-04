import React, { useState } from "react";
import styles from "./TestPage.module.scss";
import { useMediaQuery } from "react-responsive";
import smoothscroll from "smoothscroll-polyfill";
import dayjs from "dayjs";

import { Footer } from "components/organisms/Footer/Footer";
import { Header } from "components/organisms/Header/Header";

smoothscroll.polyfill();

export type Props = {};

const mockHeaderProps = {
  headerTitle: "test page master",
  clickHamburger: () => { },
  contents: [
    {
      title: "hogetest",
      href: ``,
    },
    {
      title: "test",
      href: ``,
    },
    {
      title: "test",
      href: ``,
    },
    {
      title: "test",
      href: ``,
    },
    {
      title: "test",
      href: ``,
    },
  ],
};

export const TestPage: React.FC<Props> = (props: Props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 960px)",
  });
  const [now, setNow] = useState(dayjs().format('YYYY-MM-DDTHH:mm:ss.SSSZ'));

  setInterval(() => { setNow(dayjs().format('YYYY-MM-DDTHH:mm:ss.SSSZ')) }, 50)

  return (
    <div>
      <Header
        {...mockHeaderProps}
        withMenu={isDesktopOrLaptop}
      />
      <div className={styles.body}>
        <div>テスト用ページです。</div>
        <div className={styles.time}>{now}</div>
      </div>
      <Footer copyRight="© 2020 maeda.yoshitaka" />
    </div>
  );
};
