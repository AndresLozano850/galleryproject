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
    <div className="container mt-4 father">
        <Link to="/bichon_maltes" className="links">
          <figure className="image-size">
            <Bichon_maltes />
            <figcaption>Bichon Maltes</figcaption>
          </figure>
        </Link>
        <Link to="/bulldog" className="links">
          <figure className="image-size">
            <Bulldog />
            <figcaption>Bulldog</figcaption>
          </figure>
        </Link>
        <Link to="/chihuahua" className="links">
          <figure className="image-size">
            <Chihuahua />
            <figcaption>Chihuahua</figcaption>
          </figure>
        </Link>
        <Link to="/chow_chow" className="links">
          <figure className="image-size">
            <Chow_chow />
            <figcaption>Chow Chow</figcaption>
          </figure>
        </Link>
        <Link to="/cocker_spaniel" className="links">
          <figure className="image-size">
            <Cocker_spaniel />
            <figcaption>Cocker Spaniel</figcaption>
          </figure>
        </Link>
        <Link to="/doberman" className="links">
          <figure className="image-size">
            <Doberman />
            <figcaption>Doberman</figcaption>
          </figure>
        </Link>
        <Link to="/golden_retriever" className="links">
          <figure className="image-size">
            <Golden_retriever />
            <figcaption>Golden Retriever</figcaption>
          </figure>
        </Link>
        <Link to="/husky_siberiano" className="links">
          <figure className="image-size">
            <Husky_siberiano />
            <figcaption>Husky Siberiano</figcaption>
          </figure>
        </Link>
        <Link to="/labrador" className="links">
          <figure className="image-size">
            <Labrador />
            <figcaption>Labrador</figcaption>
          </figure>
        </Link>
        <Link to="/schnauzer" className="links">
          <figure className="image-size">
            <Schnauzer />
            <figcaption>Schnauzer</figcaption>
          </figure>
        </Link>
    </div>
  )
}

export default Navigation