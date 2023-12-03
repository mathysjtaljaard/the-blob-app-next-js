import dbConnect from "../server/db/db_connector/mongodb.connector";
import { Fragment, Suspense } from "react";
import Loading from "./(overview)/loading";


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return <Fragment>{children}</Fragment>;
}
