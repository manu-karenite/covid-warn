import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import { useSelector } from "react-redux";
import { ISO, images, name } from "../../Resources/ISOCode.js";
export default function StateCard({ total, meta }) {
  const { state } = useSelector((state) => ({ ...state }));
  const indexIs = ISO.indexOf(state);
  console.log("META : ", new Date(meta), console.log(typeof new Date(meta)));
  console.log(total);
  //creatimg an object out of it..........
  let totalObject = {};
  for (let i = 0; i < total.length; i++) {
    const newArr = total[i];
    totalObject[newArr[0]] = newArr[1];
  }
  console.log(totalObject);
  const [R, G, B] = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];
  document.title = `Covid Counter | ${name[indexIs]}`;
  return (
    <center>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: `rgb(${R},${G},${B})` }} aria-label="state">
              {state}
            </Avatar>
          }
          title={name[indexIs]}
          subheader={`Updated : ${JSON.stringify(
            new Date(meta).toLocaleString("en-IN")
          )}`}
        />
        <CardMedia
          component="img"
          height="194"
          style={{ objectFit: "contain" }}
          image={images[indexIs]}
          alt="Paella dish"
        />

        <CardContent>
          {" "}
          <Typography color="text.secondary">
            <div className="row">
              <div
                className="col-md-6"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontFamily: "Telex",
                  fontSize: "14px",
                }}
              >
                {totalObject.confirmed && (
                  <p>
                    Confirmed : {totalObject.confirmed.toLocaleString("en-IN")}{" "}
                  </p>
                )}
              </div>
              <div
                className="col-md-6"
                style={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontFamily: "Telex",
                }}
              >
                {totalObject.recovered && (
                  <p>
                    Recovered : {totalObject.recovered.toLocaleString("en-IN")}{" "}
                  </p>
                )}
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6"
                style={{
                  color: "grey",
                  fontWeight: "bold",
                  fontFamily: "Telex",
                  fontSize: "14px",
                }}
              >
                {totalObject.deceased && (
                  <p>
                    Deceased : {totalObject.deceased.toLocaleString("en-IN")}{" "}
                  </p>
                )}
              </div>
              <div
                className="col-md-6"
                style={{
                  color: "blue",
                  fontWeight: "bold",
                  fontFamily: "Telex",
                  fontSize: "14px",
                }}
              >
                {totalObject.tested && (
                  <p>Tested : {totalObject.tested.toLocaleString("en-IN")} </p>
                )}
              </div>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </center>
  );
}
