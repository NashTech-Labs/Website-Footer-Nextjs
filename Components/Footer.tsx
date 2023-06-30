import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <>
      <Grid
        container
        justifyContent="space-around"
        className={styles.container}
      >
        <Grid item lg={3}>
          <Grid container direction="column">
            <Grid item mb={2} lg={6}>
              <Box className={styles["logo-box"]}>
                <Image
                  src="/logo.jpg"
                  alt="logo"
                  width={80}
                  height={50}
                  className={styles["logo-img"]}
                />
                <Typography
                  className={styles["menu-name"]}
                  sx={{ fontStyle: "italic", ml: 1 }}
                >
                  Vroom Cars
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="body2" className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati sint aperiam molestias suscipit rem, earum dolore
                eveniet quo dolores possimus ducimus temporibus fuga tempora
                nemo assumenda sed? Temporibus atque aliquid recusandae
                quisquam, voluptatem maxime
              </Typography>
            </Grid>
            <Grid item>
              <Box className={styles["social-icons"]}>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <YouTubeIcon />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item mb={2}>
              <Typography className={styles["menu-name"]}>
                Vroom Cars
              </Typography>
            </Grid>
            <Grid item>
              <Link href="#" className={styles.link}>
                Resources
              </Link>
            </Grid>
            <Grid item mt={1}>
              <Link href="#" className={styles.link}>
                About Us
              </Link>
            </Grid>
            <Grid item mt={1}>
              <Link href="#" className={styles.link}>
                Contact
              </Link>
            </Grid>
            <Grid item mt={1}>
              <Link href="#" className={styles.link}>
                Blogs
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item mb={2}>
              <Typography className={styles["menu-name"]}>Help</Typography>
            </Grid>
            <Grid item>
              <Link href="#" className={styles.link}>
                Support
              </Link>
            </Grid>
            <Grid item mt={1}>
              <Link href="#" className={styles.link}>
                Sign Up
              </Link>
            </Grid>
            <Grid item mt={1}>
              <Link href="#" className={styles.link}>
                Sign In
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item mb={2}>
              <Typography className={styles["menu-name"]}>Products</Typography>
            </Grid>
            <Grid item>
              <Link href="#" className={styles.link}>
                Wind Shield
              </Link>
            </Grid>
            <Grid item mt={1}>
              <Link href="#" className={styles.link}>
                Bumper
              </Link>
            </Grid>
            <Grid item mt={1}>
              <Link href="#" className={styles.link}>
                Doors
              </Link>
            </Grid>
            <Grid item mt={1}>
              <Link href="#" className={styles.link}>
                Spare Parts
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item mb={2}>
              <Typography className={styles["menu-name"]}>Services</Typography>
            </Grid>
            <Grid item>
              <Link href="#" className={styles.link}>
                Washing
              </Link>
            </Grid>
            <Grid item mt={1}>
              <Link href="#" className={styles.link}>
                Polishing
              </Link>
            </Grid>
            <Grid item mt={1}>
              <Link href="#" className={styles.link}>
                Plastic Paint
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box className={styles["copywrite-box"]}>
        <Typography variant="body2">
          &copy; Vroom Cars, 2023. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
