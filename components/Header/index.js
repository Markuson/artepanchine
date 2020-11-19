import Navbar from '../Navbar'
import Image from 'next/image'

import { bgWrap, bgText, hContainer } from '../../styles/styles.module.css'

export default function Header() {

  return <div className={hContainer}>
    <Navbar />

    <div className={bgWrap}>
    <Image
        className="uk-animation-fade"
        id="principal"
        src="/images/portada.jpg"
        alt="Tienda Artepan Chine"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className={bgText}>
      <p className="uk-animation-scale-up">
        Artepan Chiné
        <br />
        Lema...
      </p>
    </div>
  </div>
}
