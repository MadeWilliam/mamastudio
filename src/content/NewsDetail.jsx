import React, { Component } from "react";

import { NewsProps } from "./News";
import { Typography, Container } from "@material-ui/core";
import "react-owl-carousel2/lib/styles.css";

const NewsPropsDetail = props => {
  return (
    <Container
      style={{
        display: "flex",
        borderRadius: "25px",
        flexWrap: "wrap",
        backgroundColor: "lightgrey",
        height: "100%",
        padding: 0,
        marginTop: 40,
        paddingTop: 20
      }}
    >
      <Container
        style={{
          width: "40%",
          float: "left",
          margin: 0,
          marginLeft: 10
        }}
      >
        <NewsProps
          img={props.img}
          title={props.title}
          author={props.author}
          button={props.button}
          buttonColor={props.buttonColor}
          backgroundColor="whitesmoke"
        />
      </Container>
      <Container
        style={{
          margin: 0,
          paddingTop: 40,
          width: "55%",
          position: "relative"
        }}
      >
        <Typography
          component="h3"
          variant="h4"
          style={{ marginBottom: 30, fontWeight: 700 }}
        >
          Author : {props.author}
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          style={{ color: "#EC9120", marginBottom: 30 }}
        >
          {props.title}
        </Typography>
        <Typography
          component="h3"
          variant="h5"
          style={{ marginBottom: 30, fontWeight: 500 }}
        >
          November, 28th
        </Typography>
        <Typography
          component="h3"
          variant="p"
          style={{
            lineHeight: 1.5,
            fontSize: "20px",
            fontWeight: 400,
            marginBottom: 30
          }}
        >
          {props.desc}
        </Typography>
        <Typography
          component="h3"
          variant="p"
          style={{
            lineHeight: 1.5,
            fontSize: "20px",
            fontWeight: 400,
            marginBottom: 30
          }}
        >
          {props.desc}
        </Typography>
      </Container>
    </Container>
  );
};

class NewsDetail extends Component {
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
        <Container
          style={{
            backgroundColor: "#F1F0FF",
            borderBottomLeftRadius: "80%",
            width: "50%",
            height: "50%",
            position: "absolute",
            top: "180%",
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
            top: "240%",
            left: 0,
            zIndex: -1
          }}
        ></Container>
        <Container
          style={{
            backgroundColor: "#F1F0FF",
            borderBottomLeftRadius: "80%",
            width: "50%",
            height: "50%",
            position: "absolute",
            top: "340%",
            right: 0,
            zIndex: -1
          }}
        ></Container>
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
            News Detail
          </Typography>
          <Container
            fixed
            style={{
              height: "90%",
              marginTop: 20,
              width: "100%"
            }}
          >
            <NewsPropsDetail
              img={require("../images/image1.jpg")}
              title="Quantum Computers"
              author="Ivan Cornejo"
              lessons="10 Lessons"
              button="website"
              buttonColor="#50C4EE"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
            <NewsPropsDetail
              img={require("../images/image2.jpg")}
              title="Mechanics"
              author="Chikanso Chima"
              lessons="10 Lessons"
              button="design"
              buttonColor="#EE71C7"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
            <NewsPropsDetail
              img={require("../images/image3.jpg")}
              title="Neuroscience"
              author="Leonardo Oliveira"
              lessons="10 Lessons"
              button="php"
              buttonColor="#9177F5"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
            <NewsPropsDetail
              img={require("../images/image1.jpg")}
              title="Human Evolution"
              author="Joslin Rodgers"
              lessons="10 Lessons"
              button="react"
              buttonColor="#5C4CEB"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
            <NewsPropsDetail
              img={require("../images/image2.jpg")}
              title="Genetic Models"
              author="Kita Chihoko"
              lessons="10 Lessons"
              button="music"
              buttonColor="#95D354"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
            <NewsPropsDetail
              img={require("../images/image3.jpg")}
              title="Catalytic Conversions"
              author="Svyatoslav Taushev"
              lessons="10 Lessons"
              button="medicine"
              buttonColor="#603DBB"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
            <NewsPropsDetail
              img={require("../images/image1.jpg")}
              title="Quantum Computers"
              author="Ivan Cornejo"
              lessons="10 Lessons"
              button="nodejs"
              buttonColor="red"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
          </Container>
        </Container>
      </Container>
    );
  }
}

export default NewsDetail;
