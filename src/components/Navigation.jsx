import React from 'react'
import {Link}  from 'react-router-dom'
import Bichon_maltes from './Bichon_maltes'
import Bulldog from './Bulldog'
import Chihuahua from './Chihuahua'
import Chow_chow from './Chow_chow'
import Cocker_spaniel from './Cocker_spaniel'
import Doberman from './Doberman'
import Golden_retriever from './Golden_retriever'
import Husky_siberiano from './Husky_siberiano'
import Labrador from './Labrador'
import Schnauzer from './Schnauzer'
const Navigation = () => {
  return (
    <div>
        <Link to="/bichon_maltes">
          <figure>
            <Bichon_maltes />
            <figcaption>Bichon Maltes</figcaption>
          </figure>
        </Link>
        <Link to="/bulldog">
          <figure>
            <Bulldog />
            <figcaption>Bulldog</figcaption>
          </figure>
        </Link>
        <Link to="/chihuahua">
          <figure>
            <Chihuahua />
            <figcaption>Chihuahua</figcaption>
          </figure>
        </Link>
        <Link to="/chow_chow">
          <figure>
            <Chow_chow />
            <figcaption>Chow Chow</figcaption>
          </figure>
        </Link>
        <Link to="/cocker_spaniel">
          <figure>
            <Cocker_spaniel />
            <figcaption>Cocker Spaniel</figcaption>
          </figure>
        </Link>
        <Link to="/doberman">
          <figure>
            <Doberman />
            <figcaption>Doberman</figcaption>
          </figure>
        </Link>
        <Link to="/golden_retriever">
          <figure>
            <Golden_retriever />
            <figcaption>Golden Retriever</figcaption>
          </figure>
        </Link>
        <Link to="/husky_siberiano">
          <figure>
            <Husky_siberiano />
            <figcaption>Husky Siberiano</figcaption>
          </figure>
        </Link>
        <Link to="/labrador">
          <figure>
            <Labrador />
            <figcaption>Labrador</figcaption>
          </figure>
        </Link>
        <Link to="/schnauzer">
          <figure>
            <Schnauzer />
            <figcaption>Schnauzer</figcaption>
          </figure>
        </Link>
    </div>
  )
}

export default Navigation