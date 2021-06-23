
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-between">
        <div className="col">
          <h1 className={`display-1 ${styles.title}`}>David Furby</h1>
          <p className={`${styles.desc}`}>Jag heter David Furby och är 23 år. Nyligen gjorde jag klart min utbildning i Java och
            webbutvecklings på yrkeshögskolan i Mölndal, och söker just nu anställning. Jag har
            studerat på Campus Mölndal i två år, och har bland annat jobbat med Java, JavaScript,
            React, Vue, Native, PostgreSQL, Firebase, Spring Boot och MongoDB. Under studietiden har jag även jobbat med ett startupföretag som heter Krogis. Där jag har rollen att bygga deras
            frontend. </p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgShadow}>
            <img className={`${styles.img} img-fluid`}  src="/Me.jpg"  />
            <div className="container">
              <div className="row justify-content-around mt-5">
                <div className="col-md-auto" >
                  <a href="https://github.com/DavidFurby">
                    <img className={`${styles.icon} img-fluid`}  alt="github" src="/Github.png" width={42} height={41.02} />
                  </a>
                </div>
                <div className="col-md-auto">
                  <a href="https://www.linkedin.com/in/david-furby-62a40b134/">
                    <img className={`${styles.icon} img-fluid`}  alt="linkedIn" src="/LinkedIn.png" width={42} height={41.02} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
