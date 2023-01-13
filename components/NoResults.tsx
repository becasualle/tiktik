import { NextPage } from "next";
import React from "react";

type Props = { text: string };

const NoResults: NextPage<Props> = ({ text }) => {
  return <div>NoResults</div>;
};

export default NoResults;
