"use client"; // This is a client component
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import React from "react";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

let typedSpan: any;
const totype = ["Team Lead", "Frontend Developer", "Backend Developer", "Explorer :)"]

const delayTyping_char = 150;
const delayErasing_text = 50;
const delayTyping_text = 1000;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
	if (charIndex < totype[totypeIndex].length) {
		typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
		charIndex++;
		setTimeout(typeText, delayTyping_char);
	}
	else {
		setTimeout(eraseText, delayTyping_text);
	}
}

function eraseText() {
	if (charIndex > 0) {
		typedSpan.textContent = totype[totypeIndex].substring(0, charIndex-1);
		charIndex = charIndex-1;
		setTimeout(eraseText, delayErasing_text);
	}
	else {
		totypeIndex++;

		if (totypeIndex >= totype.length)
			totypeIndex = 0;
			setTimeout(typeText, delayTyping_text);
	}
}


export default function Home() {
  const ref = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    let el = document.getElementById("typed");
    typedSpan = el;

    if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
  }, [])

  

  return (
    <main className={styles.main}>


      <div className={styles.center}>

        <div className={styles.about_container}>
            <div className={styles.hero}>
                <h2>Hi hooman, I&apos;m JC! I help companies to have a successful Team and provide solutions.</h2>
                <h1 className="mt-sm">I am a <span id="typed" ref={ref}></span><span className={styles.cursor}></span></h1>
            </div>
            
            <a className={[styles.bouncing, "mt-sm"].join(" ")} href="#experiences" id="seeMore"><i className="fa-solid fa-chevron-down"></i></a>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span></span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
