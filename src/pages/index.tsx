import * as React from "react";
import { css } from "@emotion/react";
import { Helmet } from "react-helmet";
import { Carousel } from "antd";
import Header, { OtherYears } from "../components/page-header";
import WorkshopTemplate from "../components/workshop/WorkshopTemplate";
import { Section } from "../components/text-helpers";
import data from "../content/workshops/data";

const galleryPhotos = [
  {
    src: "/images/data/gallery/1-session-group.jpg",
    caption: "Organizers, speakers, and attendees at the AI x Space Exploration session.",
  },
  {
    src: "/images/data/gallery/2-talk-mapping.jpg",
    caption: "Tiberiu-Ioan Szatmari presenting Federated Multi-Agent Mapping for Planetary Exploration.",
  },
  {
    src: "/images/data/gallery/3-audience-astra.jpg",
    caption: "Bethany P. Theiling presenting on Objective-Based AI for spaceflight.",
  },
  {
    src: "/images/data/gallery/4-social-tea.jpg",
    caption: "Continuing the conversation over tea in Granada.",
  },
  {
    src: "/images/data/gallery/5-social-dinner.jpg",
    caption: "Speakers and organizers gathering after the session.",
  },
];

const galleryFrame = css`
  position: relative;
  height: 460px;
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(120% 120% at 50% 0%, #1b2540 0%, #0c1322 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 600px) {
    height: 300px;
  }
`;

const galleryCaption = css`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px 20px 34px;
  font-size: 14px;
  color: #f3f6fb;
  text-align: center;
  background: linear-gradient(180deg, rgba(8, 12, 24, 0) 0%, rgba(8, 12, 24, 0.78) 100%);
`;

const noteCard = css`
  background: linear-gradient(135deg, #f4f7fd 0%, #eaf0fa 100%);
  border: 1px solid #e0e7f4;
  border-radius: 14px;
  padding: 24px 28px;

  p {
    line-height: 1.65;
    color: #2a3340;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`;

const noteSignoff = css`
  margin-top: 16px;
  font-weight: 600;
  color: #1d2b4a;
`;

const Cai2026Page = () => (
  <>
    <Helmet>
      <title>Space Robotics Workshop - AI x Space Exploration @ IEEE CAI 2026</title>
    </Helmet>
    <Header
      title="AI x Space Exploration"
      conference="IEEE CAI 2026 | Granada, Spain"
      rightSide={<OtherYears onConference="IEEE CAI 2026" />}
      leftSide={null}
      headerGradient="linear-gradient(120deg, #0b1020, #2b4b7c)"
      headerStyle={css`
        color: #f5f6f8 !important;
        button {
          &:hover {
            color: #e3e8f5 !important;
          }
        }
      `}
      headerContainer={{ style: { display: "none" } }}
      imageContent={{}}
    />
    <div
      css={css`
        min-height: 100vh;
        background:
          radial-gradient(
            1200px 480px at 50% -120px,
            rgba(43, 75, 124, 0.1),
            rgba(43, 75, 124, 0) 60%
          ),
          linear-gradient(180deg, #eef2f9 0%, #f6f8fc 38%, #f3f6fb 100%);
      `}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 20px 48px" }}>
        <WorkshopTemplate data={data} />

        <Section title="Gallery">
          <Carousel autoplay autoplaySpeed={4500} draggable>
            {galleryPhotos.map(photo => (
              <div key={photo.src}>
                <div css={galleryFrame}>
                  <img src={photo.src} alt={photo.caption} loading="lazy" />
                  <div css={galleryCaption}>{photo.caption}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </Section>

        <Section title="A Note from the Organizers">
          <div css={noteCard}>
            <p>
              We had a fantastic session bringing together researchers from both
              sides of the Atlantic to explore the intersection of AI and space
              exploration.
            </p>
            <p>
              One theme came through clearly: AI is becoming a mission-enabling
              capability for this new era of exploration.
            </p>
            <p>
              Space is one of the hardest proving grounds for this technology.
              Systems need to operate with limited compute, constrained
              communications, uncertainty, radiation, and very little margin for
              failure. At the same time, AI has the potential to expand how we
              explore and understand the universe through more adaptive, capable,
              and trustworthy autonomous systems.
            </p>
            <p>
              But bringing recent AI advances into flight is still hard. It
              requires resource-efficient computing, reliability, verification and
              validation, and faster testing and iteration cycles.
            </p>
            <p>
              That is why forums like this matter. They give the AI and space
              communities a place to compare ideas, surface hard technical gaps,
              and build the collaborations needed to move promising research closer
              to real mission impact.
            </p>
            <p css={noteSignoff}>— The organizing team</p>
          </div>
        </Section>
      </div>
    </div>
  </>
);

export default Cai2026Page;
