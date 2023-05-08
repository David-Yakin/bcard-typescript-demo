import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          repellendus nostrum. Dolorem voluptatem dolor ipsam, ab voluptates
          laboriosam qui voluptate cum consectetur exercitationem, tempore
          facere quod iste nemo modi rerum natus libero cupiditate quidem esse
          soluta assumenda veritatis porro fuga? Officiis voluptatem ex odio
          itaque. Delectus, quod qui eligendi cupiditate, asperiores ratione
          iusto aspernatur veniam accusamus molestiae ipsum, dignissimos
          voluptatem perferendis quibusdam! Accusamus consequatur tenetur
          provident odio magni, debitis placeat commodi cupiditate? Eum officia
          fuga corrupti aut adipisci totam? Voluptatum fugiat, perspiciatis
          eveniet ad repellat molestiae eligendi aliquam ratione nostrum est
          quia ab et, mollitia blanditiis reiciendis minus deserunt eos. Vitae,
          reiciendis sunt autem, error illum, deleniti ratione quos doloremque
          accusantium in ipsa rem placeat! Assumenda quibusdam tenetur
          repellendus quod commodi! Ducimus eaque ratione non sint nulla rem
          impedit voluptas tenetur labore, enim adipisci voluptate accusamus.
          Eius, velit nesciunt tempore reprehenderit hic sint, adipisci iure
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
          }}>
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
