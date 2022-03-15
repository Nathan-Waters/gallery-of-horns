import React from "react";
import HornedBeast from "./HornedBeast.js";

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast
          title="dog"
          imageUrl="https://res.cloudinary.com/teepublic/image/private/s--qpRnpMCM--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1587023958/production/designs/9157583_0.jpg"
          discription="A beautiful dog"
        />
        <HornedBeast
          title="cat"
          imageUrl="https://cdn2.iconfinder.com/data/icons/monster-v-2-1/512/MonsterV2-12-512.png"
          discription="A beautiful cat"
        />
      </main>
    )
  }
}

export default Main;