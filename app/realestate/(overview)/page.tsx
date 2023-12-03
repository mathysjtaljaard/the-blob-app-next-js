import { Container, Grid } from "@mui/material";

export default function Page() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>Real Estate Dashboard</h1>
        </Grid>
        <Grid item xs={4}>
          <h2>Things to be done</h2>
        </Grid>
      </Grid>
    </Container>
  );
}
