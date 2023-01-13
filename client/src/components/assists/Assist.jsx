import Assistcell from "../assistCell/Assistcell";
import React from "react";

import "./assist.scss";
import {
  AccessAlarm,
  PlaylistAdd,
  LocalShipping,
  WatchLater,
} from "@material-ui/icons";

export default function Assist() {
  return (
    <div className="assist">
      <div className="intro">
        <div className="header">Sheba Your Medical Assist</div>
        <div className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          similique tempore <br />
          nostrum veritatis quam explicabo? In reiciendis eius
        </div>
        <div className="break"></div>
      </div>
      <div className="cellContainer">
        <Assistcell
          logo={() => <AccessAlarm />}
          name={"Since 2002"}
          desc={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolorum distinctio natus totam reprehenderit. Eum voluptas nesciunt illo modi porro et numquam odit delectus quidem. Adipisci accusantium culpa aperiam quis.
          `}
          btn={"More Info"}
        />

        <Assistcell
          logo={() => <LocalShipping />}
          name={"Emergency Calls"}
          desc={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolorum distinctio natus totam reprehenderit. Eum voluptas nesciunt illo modi porro et numquam odit delectus quidem. Adipisci accusantium culpa aperiam quis.
          `}
          btn={"Call Us"}
        />

        <Assistcell
          logo={() => {
            return <PlaylistAdd />;
          }}
          name={"Appintmeents"}
          desc={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolorum distinctio natus totam reprehenderit. Eum voluptas nesciunt illo modi porro et numquam odit delectus quidem. Adipisci accusantium culpa aperiam quis.
          `}
          btn={"Make An Appintment"}
        />

        <Assistcell
          logo={() => <WatchLater />}
          name={"Since 2002"}
          desc={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolorum distinctio natus totam reprehenderit. Eum voluptas nesciunt illo modi porro et numquam odit delectus quidem. Adipisci accusantium culpa aperiam quis.
         `}
          btn={"More Info"}
        />
      </div>
    </div>
  );
}
