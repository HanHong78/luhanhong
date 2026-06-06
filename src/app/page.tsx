import type { Metadata } from "next";
import "./luhanhong.css";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Han Lu 吕汉鸿 — Bridging China & the World",
  description: "25 years engineering across 5 countries. Singapore Chinese, educated in Germany, shaped by the US Midwest.",
};

export default function Home() {
  return <HomeClient />;
}