import React from "react";
import styles from "./HeaderMenu.module.scss";

import { HeaderMenuItem } from "components/atoms/HeaderMenuItem/HeaderMenuItem";

import { IHeaderMenuItem } from "model/interfaces";
import { scrotllToTop } from "common/scrollToTop";

const jumpTo = (id: string) => {
  scrotllToTop()
};

export type Props = {
  menuItems: IHeaderMenuItem[];
};

const menu = (menuItems: IHeaderMenuItem[]) => {
  return menuItems.map((item, index) => (
    <HeaderMenuItem title={item.title} click={() => jumpTo(item.href)} />
  ));
};

export const HeaderMenu: React.FC<Props> = (props: Props) => {
  return <div className={styles.container}>{menu(props.menuItems)}</div>;
};
