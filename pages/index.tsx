import type { NextPage } from "next";
import { flexDisplayCol } from "../inlineStyles";
import Head from "next/head";
import { Container } from "@mui/material";
import Pomodoro from "../section/Pomodoro";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pomodoro App</title>
      </Head>
      <Container maxWidth="sm" sx={{ ...flexDisplayCol }}>
        <Pomodoro />
      </Container>
    </>
  );
};

export default Home;
