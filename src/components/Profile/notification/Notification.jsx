import './Notification.css'
import notifiMockup from "../../../assets/notification_mockup.png"

const Notification = () => {
  return (
    <section className='notification_container'>
        <main className='notification_main'>
                <div className='notifi_left'>
                        <div className='notifi_head'>
                        Mobile, browser, windows notifications
                        </div>

                        <ul className='list_style alert'>
                                <li>Create price alert</li>
                        </ul>

                        <input type="email" placeholder="Your PushBullet Access Token" />
                        <input type="submit" value="Save" />
                </div>

                <div className='notifi_right'>
                        <img src={notifiMockup} className='right_img' alt="" />
                </div>
        </main>

        <div className='notifi_instruc'>
                <div className='notifi_head'>
                        I need help !
                </div>
                <ul className='list_style'>
                        <li>1. Download PushBullet app on your phone (available for Android & iOS)</li>
                        <li>2. Create an account on it</li>
                        <li>3. Connect with your new account here : <a href="https://www.pushbullet.com/signin">https://www.pushbullet.com/signin</a></li>
                        <li>4. Go on Settings &gt; Account and create an Access token</li>
                        <li>5. Copy the key and paste it on the fill and click on save.</li>
                        <li>6. An notification will be sent to check if connexion is successful.</li>
                </ul>
        </div>
    </section>
  )
}

export default Notification