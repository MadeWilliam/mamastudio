import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Toolbar, Button, Typography, Container } from "@material-ui/core";
import "react-owl-carousel2/lib/styles.css";

const Course = props => {
  return (
    <Container
      style={{
        flex: "1 0 25%",
        maxWidth: "364px",
        maxHeight: "750px",
        padding: 0,
        backgroundColor: "#F1F0FF",
        margin: "20px 10px",
        borderRadius: "24px",
        textAlign: "center"
      }}
    >
      <Container
        style={{
          position: "relative",
          minHeight: "300px",
          margin: 0,
          padding: 0
        }}
      >
        <img
          style={{
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            width: "100%",
            height: "100%"
          }}
          src={props.img}
          alt="image-slidder"
        />
        <Button
          style={{
            backgroundColor: props.color,
            fontWeight: "900",
            borderRadius: "24px",
            color: "white",
            marginBottom: "10px",
            position: "absolute",
            top: 20,
            left: 20
          }}
          href="#"
          variant="contained"
        >
          {props.button}
        </Button>
      </Container>
      <Container
        style={{
          minHeight: "150px",
          margin: 0,
          paddingLeft: 0,
          paddingRight: 0
        }}
      >
        <Typography style={{ color: "#EC9120" }} variant="h4">
          {props.title}
        </Typography>
        <Typography style={{ marginTop: "10px" }} variant="h5">
          {props.desc}
        </Typography>
        <Typography style={{ marginTop: "10px" }} variant="body2">
          {props.lessons}
        </Typography>
        <Typography
          style={{ color: "purple", margin: "10px", textAlign: "right" }}
          variant="h5"
        >
          {props.price}
        </Typography>
      </Container>
    </Container>
  );
};

class Courses extends Component {
  render() {
    return (
      <Container
        style={{
          minHeight: "600px",
          margin: "0 auto",
          padding: 0,
          marginTop: "100px"
        }}
      >
        <Container
          fixed
          style={{
            margin: "20px",
            paddingTop: 20,
            height: "100%",
            borderRadius: "25px"
          }}
        >
          <Typography
            component="h1"
            align="center"
            variant="h1"
            style={{ textAlign: "center", color: "#EC9120" }}
          >
            Pilihan Paket Kursus
          </Typography>
          <Toolbar
            style={{
              margin: 40,
              borderRadius: "24px",
              display: "flex",
              backgroundColor: "#F1F0FF",
              justifyContent: "space-around",
            }}
          >
            <NavLink
              style={{
                display: "inline-block",
                textDecoration: "none"
              }}
              to="/"
              exact
            >
              <Typography variant="h5">All</Typography>
            </NavLink>
            <NavLink
              style={{
                display: "inline-block",
                textDecoration: "none"
              }}
              to="/about-us"
            >
              <Typography variant="h5">Website</Typography>
            </NavLink>
            <NavLink
              style={{
                display: "inline-block",
                textDecoration: "none"
              }}
              to="/courses"
            >
              <Typography variant="h5">Mobile</Typography>
            </NavLink>
            <NavLink
              style={{
                display: "inline-block",
                textDecoration: "none"
              }}
              to="/news"
            >
              <Typography variant="h5">Design</Typography>
            </NavLink>
            <NavLink
              style={{
                display: "inline-block",
                textDecoration: "none"
              }}
              to="/gallery"
            >
              <Typography variant="h5">Office</Typography>
            </NavLink>
            <NavLink
              style={{
                display: "inline-block",
                textDecoration: "none"
              }}
              to="/contact"
            >
              <Typography variant="h5">SEO</Typography>
            </NavLink>
            <NavLink
              style={{
                display: "inline-block",
                textDecoration: "none"
              }}
              to="/contact"
            >
              <Typography variant="h5">Marketing</Typography>
            </NavLink>
          </Toolbar>
          <Container
            fixed
            style={{ height: "90%", marginTop: 20, width: "100%" }}
          >
            <Container
              style={{
                display: "flex",
                borderRadius: "25px",
                flexWrap: "wrap",
                height: "100%",
                padding: 0,
                marginTop: 20
              }}
            >
              <Course
                img={require("../images/image1.jpg")}
                title="Quantum Computers"
                desc="Ivan Cornejo"
                lessons="10 Lessons"
                button="website"
                color="#50C4EE"
                price="Rp 7,5JT"
              />
              <Course
                img={require("../images/image2.jpg")}
                title="Mechanics"
                desc="Chikanso Chima"
                lessons="10 Lessons"
                button="design"
                color="#EE71C7"
                price="Rp 7,5JT"
              />
              <Course
                img={require("../images/image3.jpg")}
                title="Neuroscience"
                desc="Leonardo Oliveira"
                lessons="10 Lessons"
                button="php"
                color="#9177F5"
                price="Rp 7,5JT"
              />
              <Course
                img={require("../images/image1.jpg")}
                title="Human Evolution"
                desc="Joslin Rodgers"
                lessons="10 Lessons"
                button="react"
                color="#5C4CEB"
                price="Rp 7,5JT"
              />
              <Course
                img={require("../images/image2.jpg")}
                title="Genetic Models"
                desc="Kita Chihoko"
                lessons="10 Lessons"
                button="music"
                color="#95D354"
                price="Rp 7,5JT"
              />
              <Course
                img={require("../images/image3.jpg")}
                title="Catalytic Conversions"
                desc="Svyatoslav Taushev"
                lessons="10 Lessons"
                button="medicine"
                color="#603DBB"
                price="Rp 7,5JT"
              />
              <Course
                img={require("../images/image1.jpg")}
                title="Quantum Computers"
                desc="Ivan Cornejo"
                lessons="10 Lessons"
                button="nodejs"
                color="red"
                price="Rp 7,5JT"
              />
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default Courses;