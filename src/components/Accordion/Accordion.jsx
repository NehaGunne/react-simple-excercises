import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import styles from "./accordion.module.css";

const Accordion = ({item}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.accLabel} onClick={() => setOpen((prev) => !prev)}>
        <span>{item.label}</span>
        <MdExpandMore size={25} />
      </div>
      <hr />
      {open && <div>{item.summary}</div>}
    </div>
  );
};

export default Accordion;
