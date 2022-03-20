import headerItems from "./header.data";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Header() {


  return (
      <div className={styles.header}>
        {headerItems?.map((headerItem, i) => (
          <Link
            className=""
            href={headerItem.path}
            key={i}
          > 
            <button className="font-bold text-sky-600 transition ease-in-out delay-50 px-5 hover:bg-sky-200">
             {headerItem?.label}
            </button>
          </Link>
        ))}
      </div>
  );
}
