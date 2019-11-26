import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Toolbar, Button, Typography, Container } from "@material-ui/core";
import "react-owl-carousel2/lib/styles.css";

export const NewsProps = props => {
  return (
    <Container
      style={{
        padding: 0,
        margin: "20px 10px",
        borderRadius: "24px",
        textAlign: "center",
        marginBottom: "150px"
      }}
    >
      <NavLink
        style={{
          display: "inline-block",
          position: "relative",
          textDecoration: "none"
        }}
        to="/news-detail"
        exact
      >
        <Container
          style={{
            position: "relative",
            margin: 0,
            padding: 0
          }}
        >
          <img
            style={{
              borderRadius: "24px",
              width: "100%",
              height: props.imgHeight
            }}
            src={props.img}
            alt="image-slidder"
          />
          <Button
            style={{
              backgroundColor: props.buttonColor,
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
            backgroundColor: props.backgroundColor,
            width: "80%",
            position: "absolute",
            bottom: -100,
            left: "50%",
            transform: "translateX(-50%)",
            border: "1px solid gray",
            borderRadius: "5px",
            padding: 8
          }}
        >
          <Typography style={{ color: "#EC9120" }} variant="h4">
            {props.title}
          </Typography>
          <Typography style={{ marginTop: "10px" }} variant="h5">
            {props.author}
          </Typography>
        </Container>
      </NavLink>
    </Container>
  );
};

export class News extends Component {
  render() {
    return (
      <Container
        style={{
          minHeight: "1600px",
          margin: "0 auto",
          width: "100%",
          padding: 0,
          marginTop: "100px"
        }}
      >
        <Container
          style={{
            backgroundColor: "#F1F0FF",
            borderBottomLeftRadius: "80%",
            width: "50%",
            height: "50%",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: -1
          }}
        ></Container>
        <Container
          style={{
            backgroundColor: "#F1F0FF",
            borderRadius: "80%",
            width: "70%",
            height: "80%",
            position: "absolute",
            top: "80%",
            left: 0,
            zIndex: -1
          }}
        ></Container>
        <Typography
          component="h1"
          align="center"
          variant="h1"
          style={{ textAlign: "center", color: "#EC9120" }}
        >
          News List
        </Typography>
        <Container
          fixed
          style={{
            width: "1600px",
            minHeight: "2000px",
            paddingTop: 20,
            margin: 0,
            marginTop: 40,
            overflow: "auto",
            borderRadius: "25px"
          }}
        >
          <Container
            fixed
            style={{
              maxHeight: "1200px",
              float: "left",
              marginTop: 20,
              width: "33%"
            }}
          >
            <Container
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                flexDirection: "row",
                borderRadius: "25px",
                flexWrap: "wrap",
                height: "100%",
                padding: 0,
                marginTop: 20
              }}
            >
              <NewsProps
                img={require("../images/image2.jpg")}
                title="Genetic Models"
                author="Kita Chihoko"
                lessons="10 Lessons"
                button="music"
                buttonColor="#95D354"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image3.jpg")}
                title="Catalytic Conversions"
                author="Svyatoslav Taushev"
                lessons="10 Lessons"
                button="medicine"
                buttonColor="#603DBB"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image1.jpg")}
                title="Quantum Computers"
                author="Ivan Cornejo"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image2.jpg")}
                title="Genetic Models"
                author="Kita Chihoko"
                lessons="10 Lessons"
                button="music"
                buttonColor="#95D354"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image3.jpg")}
                title="Catalytic Conversions"
                author="Svyatoslav Taushev"
                lessons="10 Lessons"
                button="medicine"
                buttonColor="#603DBB"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image1.jpg")}
                title="Quantum Computers"
                author="Ivan Cornejo"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
            </Container>
          </Container>
          <Container
            fixed
            style={{
              maxHeight: "1200px",
              float: "left",
              marginTop: 20,
              width: "33%"
            }}
          >
            <Container
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                borderRadius: "25px",
                flexWrap: "wrap",
                height: "100%",
                padding: 0,
                marginTop: 20
              }}
            >
              <NewsProps
                img={require("../images/image3.jpg")}
                imgHeight="350px"
                title="Genetic Models"
                author="Kita Chihoko"
                lessons="10 Lessons"
                button="music"
                buttonColor="#95D354"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image1.jpg")}
                imgHeight="550px"
                title="Quantum Computers"
                author="Ivan Cornejo"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image2.jpg")}
                imgHeight="350px"
                title="Quantum Computers"
                author="Ivan Cornejo"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image3.jpg")}
                imgHeight="550px"
                title="Quantum Computers"
                author="Ivan Cornejo"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image1.jpg")}
                imgHeight="350px"
                title="Quantum Computers"
                author="Ivan Cornejo"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image2.jpg")}
                imgHeight="550px"
                title="Quantum Computers"
                author="Ivan Cornejo"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
            </Container>
          </Container>
          <Container
            fixed
            style={{
              maxHeight: "1200px",
              float: "left",
              marginTop: 20,
              width: "33%"
            }}
          >
            <Container
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                borderRadius: "25px",
                flexWrap: "wrap",
                height: "100%",
                padding: 0,
                marginTop: 20
              }}
            >
              <NewsProps
                img={require("../images/image1.jpg")}
                imgHeight="600px"
                title="Genetic Models"
                author="Kita Chihoko"
                lessons="10 Lessons"
                button="music"
                buttonColor="#95D354"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image2.jpg")}
                imgHeight="400px"
                title="Quantum Computers"
                author="Ivan Cornejo"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image1.jpg")}
                imgHeight="600px"
                title="Genetic Models"
                author="Kita Chihoko"
                lessons="10 Lessons"
                button="music"
                buttonColor="#95D354"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image3.jpg")}
                imgHeight="400px"
                title="Quantum Computers"
                author="Ivan Cornejo"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image2.jpg")}
                imgHeight="600px"
                title="Genetic Models"
                author="Kita Chihoko"
                lessons="10 Lessons"
                button="music"
                buttonColor="#95D354"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/image1.jpg")}
                imgHeight="400px"
                title="Quantum Computers"
                author="Ivan Cornejo"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
