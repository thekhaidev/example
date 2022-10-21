import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Avatar from "@mui/material/Avatar";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormLabel from "@mui/material//FormLabel";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Copyright from "../components/Copyright";

import SwipeableViews from "react-swipeable-views";

//Icons
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

//images

//Redacted
const axios = require("axios").default;

export default function Index() {
  const [profile, setProfile] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [help, setHelp] = useState(false);
  const [hovering, setHover] = useState(false);
  const [hovering2, setHover2] = useState(false);
  const [hovering3, setHover3] = useState(false);
  const [hovering4, setHover4] = useState(false);
  const [likeForm, setLikeForm] = useState(false);
  const [superlikeForm, setSuperLikeForm] = useState(false);
  const [dislikeForm, setDisLikeForm] = useState(false);
  const [formObj, setFormObj] = useState({ name: "", email: "", message: "" });

  const cardImages = [
    {
      img: glasses,
      title: "Khai Tran",
      text: "31/Male/Anxious Millenial Eboy",
      alt: "Anxious Millenial Eboy",
    },
    {
      img: betrothed,
      title: "Betrothed | Project",
      text: "Model wedding registry site made with React, Bootstrap, and Node/Express",
      alt: "Betrothed",
    },
    {
      img: otherstare,
      title: "Khai Tran ",
      text: "Software Engineer with a passion for keeping things neat, clean, and organized",
      alt: "Image 2",
    },
    {
      img: loungeo,
      title: "Loungeo | Project",
      text: "Model ecommerce product page made with React and Styled Components ",
      alt: "Loungeo",
    },

    {
      img: mirror,
      title: "Khai Tran",
      text: "Fun fact, I was on worldstar hip hop once",
      alt: "Stare",
    },

    {
      img: api,
      title: "Loungeo API | Project",
      text: "A backend upgrade to Loungeo made with MySQL and Node/Express, deployed to AWS with NGINX loadbalance",
      alt: "API",
    },
  ];

  const hideProfile = () => {
    setProfile(!profile);
    handleExpand();
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleHelp = (e) => {
    setHelp(!help);
    console.log(e);
  };

  const handleLike = () => {
    setLikeForm(!likeForm);
  };

  const handleDisLike = () => {
    setDisLikeForm(!dislikeForm);
  };

  const handleSuperLike = () => {
    setSuperLikeForm(!superlikeForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id } = e.target;
    axios
      .post(`https://damp-cliffs-34387.herokuapp.com/${id}`, formObj)
      .then(() => {
        if (id === "dislike") {
          handleDisLike();
        }
      })
      .then(() => {
        if (id === "superlike") {
          handleSuperLike();
        }
      })
      .then(() => {
        if (id === "like") {
          handleLike();
        }
      })
      .catch((e) => console.log(e));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container sx={{ position: "relative" }} maxWidth="sm">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={1}
        mb={0}
      >
        <Grid xs={2} sm={2} md={3} item>
          <Avatar
            style={{ float: "left" }}
            alt="Khai Tran"
            src="/static/img/stare.jpg"
            sx={{ width: 50, height: 50 }}
          />
        </Grid>
        <Grid
          style={{ marginTop: "15px" }}
          xs={"auto"}
          sm={"auto"}
          md={"auto"}
          item
        >
          <img
            alt="The Khai Dot Dev"
            src={Tkd}
            style={{ width: 200, height: 30 }}
          />{" "}
        </Grid>
        <Grid xs={2} sm={2} md={3} item>
          <Tooltip title="Help" arrow>
            <HelpOutlineOutlinedIcon
              onClick={handleHelp}
              style={{
                float: "right",
                width: 50,
                height: 50,
              }}
            />
          </Tooltip>
        </Grid>
        <Drawer anchor="right" open={help} onClose={handleHelp}>
          <Box
            sx={{ width: 350, padding: "5px" }}
            role="presentation"
            onClick={handleHelp}
            onKeyDown={handleHelp}
          >
            <Typography align="center" variant="h3">
              Hello, world
            </Typography>
            <Typography align="center" variant="body1">
              This is Khai
            </Typography>
            &nbsp;
            <Typography align="center" variant="body2">
              Welcome to my little part of the internet.
            </Typography>
            &nbsp;
            <Typography align="center" variant="body2">
              My new years resolution for 2021 was to study for, attend, and
              graduate from Hack Reactor San Francisco. I'm happy to say that I
              accomplished just that as of Dec 23rd, 2021.
            </Typography>
            &nbsp;
            <Typography align="center" variant="body2">
              So my new years resolution going in to 2022 is to find a job in
              the software engineering space and go on a date.
            </Typography>
            &nbsp;
            <Typography align="center" variant="body2">
              So, I thought, why not catch two birds with one rock? My dream job
              is Tinder and my dream girl is Sad Alex. I made this site for both
              of them.
            </Typography>
            &nbsp;
            <Typography align="center" variant="body2">
              Feel free to take a look through my pictures and projects by
              sliding left or right. Click on the little info button to get more
              information about me and check out my other social media.
            </Typography>
            &nbsp;
            <Typography align="center" variant="body2">
              And if you're someone hiring at Tinder or{" "}
              <a href="https://twitter.com/imsadalex">Sad Alex</a> herself, feel
              free to slide in the DMs directly.
            </Typography>
            &nbsp;
            <Typography align="center" variant="body2">
              But for anyone else wanting to contact me for a job, hit that like
              button to contact me. For anyone else wanting to go on a date,
              smash that superlike button to get my attention. And if you don't
              want to contact me for either but still want to get a hold of me,
              hit that red ex to send me a message. Hope to hear from you soon!
            </Typography>
          </Box>
        </Drawer>
      </Grid>

      <SwipeableViews enableMouseEvents>
        {cardImages.map((card, i) => (
          <Container key={i} maxWidth="sm">
            <Box sx={{ position: "relative", my: 4 }}>
              <Card style={{ height: "80vh" }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={card.img}
                  alt={card.alt}
                />

                {profile ? (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      background:
                        "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1))",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {card.title}&nbsp;
                        <Tooltip title="More about me!">
                          <InfoIcon
                            arrow
                            onClick={hideProfile}
                            onMouseEnter={() => setHover4(true)}
                            onMouseLeave={() => setHover4(false)}
                            style={{
                              width: hovering4 ? 25 : 15,
                              height: hovering4 ? 25 : 15,
                            }}
                          />
                        </Tooltip>
                      </Typography>

                      <Typography variant="body1">{card.text}</Typography>
                    </CardContent>
                    <CardActions>
                      <Box m="auto">
                        <Tooltip title="Dislike!" arrow>
                          <CloseIcon
                            onClick={handleDisLike}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            style={{
                              width: hovering ? 75 : 60,
                              height: hovering ? 75 : 60,
                              border: "3px solid #E3494F",
                              background: hovering ? "E3494F" : null,
                              borderRadius: "50%",
                              fill: "#E3494F",
                              padding: "10",
                            }}
                          />
                        </Tooltip>
                        <Modal
                          open={dislikeForm}
                          onClose={handleDisLike}
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                          }}
                          aria-labelledby="Dislike Form"
                          aria-describedby="Dislike Form"
                        >
                          <Box sx={style}>
                            <form id="dislike" onSubmit={handleSubmit}>
                              <Grid
                                container
                                alignItems="center"
                                justify="center"
                                direction="column"
                              >
                                <FormLabel>Let's Connect!</FormLabel>
                                <Grid item>
                                  <TextField
                                    required
                                    onChange={handleChange}
                                    id="name-input"
                                    name="name"
                                    label="Name"
                                    type="text"
                                  />
                                </Grid>
                                &nbsp;
                                <Grid item>
                                  <TextField
                                    required
                                    onChange={handleChange}
                                    id="email-input"
                                    name="email"
                                    label="Email"
                                    type="text"
                                  />
                                </Grid>
                                &nbsp;
                                <Grid item>
                                  <TextField
                                    required
                                    onChange={handleChange}
                                    id="message-input"
                                    name="message"
                                    label="Message"
                                    type="text"
                                    multiline
                                    rows={4}
                                  />
                                </Grid>
                                <Grid item>
                                  <Button variant="text" type="submit">
                                    Submit
                                  </Button>
                                </Grid>
                              </Grid>
                            </form>
                          </Box>
                        </Modal>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Tooltip title="Superlike!">
                          <StarIcon
                            onClick={handleSuperLike}
                            onMouseEnter={() => setHover2(true)}
                            onMouseLeave={() => setHover2(false)}
                            style={{
                              width: hovering2 ? 55 : 45,
                              height: hovering2 ? 55 : 45,
                              border: "3px solid #65CDF7",
                              borderRadius: "50%",
                              fill: "#65CDF7",
                              padding: "10",
                              marginBottom: "8",
                            }}
                          />
                        </Tooltip>
                        <Modal
                          open={superlikeForm}
                          onClose={handleSuperLike}
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                          }}
                          aria-labelledby="Superlike Form"
                          aria-describedby="Superlike Form"
                        >
                          <Box sx={style}>
                            <form id="superlike" onSubmit={handleSubmit}>
                              <Grid
                                container
                                alignItems="center"
                                justify="center"
                                direction="column"
                              >
                                <FormLabel>Superlike!</FormLabel>
                                <Grid item>
                                  <TextField
                                    required
                                    onChange={handleChange}
                                    id="name-input"
                                    name="name"
                                    label="Name"
                                    type="text"
                                  />
                                </Grid>
                                &nbsp;
                                <Grid item>
                                  <TextField
                                    required
                                    onChange={handleChange}
                                    id="email-input"
                                    name="email"
                                    label="Email"
                                    type="text"
                                  />
                                </Grid>
                                &nbsp;
                                <Grid item>
                                  <TextField
                                    required
                                    onChange={handleChange}
                                    id="message-input"
                                    name="message"
                                    label="Message"
                                    type="text"
                                    multiline
                                    rows={4}
                                  />
                                </Grid>
                                <Grid item>
                                  <Button variant="text" type="submit">
                                    Submit
                                  </Button>
                                </Grid>
                              </Grid>
                            </form>
                          </Box>
                        </Modal>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Tooltip title="Like!">
                          <FavoriteIcon
                            onClick={handleLike}
                            onMouseEnter={() => setHover3(true)}
                            onMouseLeave={() => setHover3(false)}
                            style={{
                              width: hovering3 ? 75 : 60,
                              height: hovering3 ? 75 : 60,
                              border: "3px solid #7EE6BE",
                              borderRadius: "50%",
                              fill: "#7EE6BE",
                              padding: "10",
                            }}
                          />
                        </Tooltip>
                        <Modal
                          open={likeForm}
                          onClose={handleLike}
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                          }}
                          aria-labelledby="Like Form"
                          aria-describedby="Like Form"
                        >
                          <Box sx={style}>
                            <form id="like" onSubmit={handleSubmit}>
                              <Grid
                                container
                                alignItems="center"
                                justify="center"
                                direction="column"
                              >
                                <FormLabel>Like!</FormLabel>
                                <Grid item>
                                  <TextField
                                    required
                                    onChange={handleChange}
                                    id="name-input"
                                    name="name"
                                    label="Name"
                                    type="text"
                                  />
                                </Grid>
                                &nbsp;
                                <Grid item>
                                  <TextField
                                    required
                                    onChange={handleChange}
                                    id="email-input"
                                    name="email"
                                    label="Email"
                                    type="text"
                                  />
                                </Grid>
                                &nbsp;
                                <Grid item>
                                  <TextField
                                    required
                                    onChange={handleChange}
                                    id="message-input"
                                    name="message"
                                    label="Message"
                                    type="text"
                                    multiline
                                    rows={4}
                                  />
                                </Grid>
                                <Grid item>
                                  <Button variant="text" type="submit">
                                    Submit
                                  </Button>
                                </Grid>
                              </Grid>
                            </form>
                          </Box>
                        </Modal>
                      </Box>
                    </CardActions>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <CardActions>
                      <Tooltip title="Close">
                        <ArrowCircleRightIcon
                          onClick={hideProfile}
                          transform="rotate(90)"
                          style={{
                            position: "absolute",
                            bottom: -50,
                            right: 0,
                            color: "#E34A45",
                            width: 70,
                            height: 70,
                            background:
                              "radial-gradient(white, white, rgba(255, 255, 255, 0),rgba(255, 255, 255, 0),rgba(0, 0, 0, 0))",
                            borderRadius: "50%",
                            margin: "10px",
                          }}
                        />
                      </Tooltip>
                    </CardActions>
                  </Box>
                )}
              </Card>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography>
                  <ul
                    style={{
                      listStyleType: "none",
                      margin: "0",
                      padding: "0",
                    }}
                  >
                    <li>
                      <WorkOutlineOutlinedIcon /> Software Engineer
                    </li>
                    <li>
                      <SchoolOutlinedIcon /> Hack Reactor San Francisco
                    </li>
                    <li>
                      <PersonOutlineOutlinedIcon /> He/Him/His
                    </li>
                    <li>
                      <HomeOutlinedIcon /> Manhattan, KS
                    </li>
                    <li>
                      <LocationOnOutlinedIcon /> Open to remote / relocation
                    </li>
                  </ul>
                </Typography>
                <br />
                <Divider />
                <br />
                <Typography variant="h5" gutterBottom>
                  About me
                </Typography>
                <Typography paragraph>
                  {" "}
                  Hi, this is Khai. I'm a former retail store manager turned
                  Software Engineer. I like looking good, reading books, and
                  Thursday nights. Generally I tend to do stuff and things.
                </Typography>

                <Divider />
                <br />
                <Typography variant="h5" gutterBottom>
                  Skills
                </Typography>

                <Typography mt={2} paragraph>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container direction="row" spacing={2}>
                      <Grid item xs="auto">
                        {" "}
                        <span
                          style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "6px",
                          }}
                        >
                          HTML
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        {" "}
                        <span
                          style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "6px",
                          }}
                        >
                          CSS
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        {" "}
                        <span
                          style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "6px",
                          }}
                        >
                          Javascript (ES5/ES6)
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        {" "}
                        <span
                          style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "6px",
                          }}
                        >
                          React
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        {" "}
                        <span
                          style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "6px",
                          }}
                        >
                          Node/Express
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        {" "}
                        <span
                          style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "6px",
                          }}
                        >
                          MongoDB
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        {" "}
                        <span
                          style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "6px",
                          }}
                        >
                          MySQL
                        </span>
                      </Grid>
                    </Grid>
                  </Box>
                </Typography>
                <Divider />
                <br />
                <Typography variant="h5" gutterBottom>
                  Passions
                </Typography>

                <Typography mt={2} paragraph>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container direction="row" spacing={2}>
                      <Grid item xs="auto">
                        {" "}
                        <span
                          style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "6px",
                          }}
                        >
                          Vlogging
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        {" "}
                        <span
                          style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "6px",
                          }}
                        >
                          Mental Health Awareness
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        {" "}
                        <span
                          style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "6px",
                          }}
                        >
                          Dancing
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        {" "}
                        <span
                          style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "6px",
                          }}
                        >
                          Grab a drink
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        {" "}
                        <span
                          style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "6px",
                          }}
                        >
                          Movies
                        </span>
                      </Grid>
                    </Grid>
                  </Box>
                </Typography>

                <br />
                <Divider />
                <br />
                <Typography variant="h5" gutterBottom>
                  Socia Media
                </Typography>

                <Typography mt={2} paragraph>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container direction="row" spacing={2}>
                      <Grid item xs="auto">
                        {" "}
                        <span>
                          <GitHubIcon
                            onClick={() => {
                              window.open("https://github.com/thekhaidev");
                            }}
                          />
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        {" "}
                        <span>
                          <LinkedInIcon
                            onClick={() => {
                              window.open(
                                "https://www.linkedin.com/in/thekhai/"
                              );
                            }}
                          />
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        {" "}
                        <span>
                          <TwitterIcon
                            onClick={() => {
                              window.open("https://twitter.com/TheKhaiDev");
                            }}
                          />
                        </span>
                      </Grid>
                    </Grid>
                  </Box>
                </Typography>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Click here if you work at Tinder</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Hi, Tinder became my source of connection during the early
                      pandemic lockdowns. While studying to become a software
                      engineer I met so many great people through your app and
                      would love to contribute to such a great product that
                      helps people connect.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Click here if you're Sad Alex</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Hi. My favorite song is all the small things. Iykyk. Dms
                      are open.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Divider />
                <Typography mb={2} variant="h5" gutterBottom>
                  My Anthem
                </Typography>
                <iframe
                  title="anthem"
                  src="https://open.spotify.com/embed/track/6ypSVHZWCXAk3siHdJOspd?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
                <CardActions>
                  <Box m="auto">
                    <CloseIcon
                      onClick={handleDisLike}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      style={{
                        width: hovering ? 75 : 60,
                        height: hovering ? 75 : 60,
                        borderWidth: "3px",
                        borderStyle: "solid",
                        borderColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: "50%",
                        fill: "#E3494F",
                        padding: "10",
                      }}
                    />
                    <Modal
                      open={dislikeForm}
                      onClose={handleDisLike}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                      }}
                      aria-labelledby="Dislike Form"
                      aria-describedby="Dislike Form"
                    >
                      <Box sx={style}>
                        <form id="dislike" onSubmit={handleSubmit}>
                          <Grid
                            container
                            alignItems="center"
                            justify="center"
                            direction="column"
                          >
                            <FormLabel>Let's Connect!</FormLabel>
                            <Grid item>
                              <TextField
                                required
                                onChange={handleChange}
                                id="name-input"
                                name="name"
                                label="Name"
                                type="text"
                              />
                            </Grid>
                            &nbsp;
                            <Grid item>
                              <TextField
                                required
                                onChange={handleChange}
                                id="email-input"
                                name="email"
                                label="Email"
                                type="text"
                              />
                            </Grid>
                            &nbsp;
                            <Grid item>
                              <TextField
                                required
                                onChange={handleChange}
                                id="message-input"
                                name="message"
                                label="Message"
                                type="text"
                                multiline
                                rows={4}
                              />
                            </Grid>
                            <Grid item>
                              <Button variant="text" type="submit">
                                Submit
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                      </Box>
                    </Modal>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <StarIcon
                      onClick={handleSuperLike}
                      onMouseEnter={() => setHover2(true)}
                      onMouseLeave={() => setHover2(false)}
                      style={{
                        width: hovering2 ? 55 : 45,
                        height: hovering2 ? 55 : 45,
                        borderWidth: "3px",
                        borderStyle: "solid",
                        borderColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: "50%",
                        fill: "#65CDF7",
                        padding: "10",
                        marginBottom: "8",
                      }}
                    />
                    <Modal
                      open={superlikeForm}
                      onClose={handleSuperLike}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                      }}
                      aria-labelledby="Superlike Form"
                      aria-describedby="Superlike Form"
                    >
                      <Box sx={style}>
                        <form id="superlike" onSubmit={handleSubmit}>
                          <Grid
                            container
                            alignItems="center"
                            justify="center"
                            direction="column"
                          >
                            <FormLabel>Superlike!</FormLabel>
                            <Grid item>
                              <TextField
                                required
                                onChange={handleChange}
                                id="name-input"
                                name="name"
                                label="Name"
                                type="text"
                              />
                            </Grid>
                            &nbsp;
                            <Grid item>
                              <TextField
                                required
                                onChange={handleChange}
                                id="email-input"
                                name="email"
                                label="Email"
                                type="text"
                              />
                            </Grid>
                            &nbsp;
                            <Grid item>
                              <TextField
                                required
                                onChange={handleChange}
                                id="message-input"
                                name="message"
                                label="Message"
                                type="text"
                                multiline
                                rows={4}
                              />
                            </Grid>
                            <Grid item>
                              <Button variant="text" type="submit">
                                Submit
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                      </Box>
                    </Modal>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FavoriteIcon
                      onClick={handleLike}
                      onMouseEnter={() => setHover3(true)}
                      onMouseLeave={() => setHover3(false)}
                      style={{
                        width: hovering3 ? 75 : 60,
                        height: hovering3 ? 75 : 60,
                        borderWidth: "3px",
                        borderStyle: "solid",
                        borderColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: "50%",
                        fill: "#7EE6BE",
                        padding: "10",
                      }}
                    />
                    <Modal
                      open={likeForm}
                      onClose={handleLike}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                      }}
                      aria-labelledby="Like Form"
                      aria-describedby="Like Form"
                    >
                      <Box sx={style}>
                        <form id="like" onSubmit={handleSubmit}>
                          <Grid
                            container
                            alignItems="center"
                            justify="center"
                            direction="column"
                          >
                            <FormLabel>Like!</FormLabel>
                            <Grid item>
                              <TextField
                                required
                                onChange={handleChange}
                                id="name-input"
                                name="name"
                                label="Name"
                                type="text"
                              />
                            </Grid>
                            &nbsp;
                            <Grid item>
                              <TextField
                                required
                                onChange={handleChange}
                                id="email-input"
                                name="email"
                                label="Email"
                                type="text"
                              />
                            </Grid>
                            &nbsp;
                            <Grid item>
                              <TextField
                                required
                                onChange={handleChange}
                                id="message-input"
                                name="message"
                                label="Message"
                                type="text"
                                multiline
                                rows={4}
                              />
                            </Grid>
                            <Grid item>
                              <Button variant="text" type="submit">
                                Submit
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                      </Box>
                    </Modal>
                  </Box>
                </CardActions>
              </CardContent>
            </Collapse>
          </Container>
        ))}
      </SwipeableViews>

      <Copyright />
    </Container>
  );
}
