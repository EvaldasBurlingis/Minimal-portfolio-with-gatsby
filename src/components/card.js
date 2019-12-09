import React from "react"
import { Image } from "@components"

const Card = ({ filename }) =>  (
    <div className="card--wrapper">
      <Image filename={filename} />
    </div>
  )

export default Card
