import { Container, Grid } from "@mui/material";
import { Suspense } from "react";
import Loading from "./loading";
import dbConnect from "@/app/server/db/db_connector/mongodb.connector";

let state = 0;

const connect = async () => {
  console.log("connecting to db");
  const dbConnection = await dbConnect();
  console.log("waiting");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("done waiting 3 seconds");
  state = dbConnection.connection.readyState;
  console.log("state", state);
};

export default async function Page() {
  const dbConnection = await connect();
  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h1>Real Estate Dashboard</h1>
            <div> Data </div>
          </Grid>
          <Grid item xs={4}>
            <h2>Things to be done</h2>
          </Grid>
        </Grid>
      </Container>
    </Suspense>
  );
}
