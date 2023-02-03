import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "@/components/HomePage";
import LandingMeta from "./LandingMeta";

const Home = () => {
  return (
    <>
      <LandingMeta />
      <HomePage />
    </>
  );
};

export default Home;
