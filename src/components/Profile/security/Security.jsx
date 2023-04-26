import './Security.css'
import qrbar_code from "../../../assets/qr_code.png"

const Security = () => {
  return (
  	<div className="sec_con">
	    <div className="sec_info">
	      <div className="secure_text">
	      	Secure your account with
	      </div>

	      <div className="auth_text">
	      	Google Authenticator
	      </div>

	      <div className="sec_btn_con">
	      	<div className="sec_btn">
	      		Download on Android
	      	</div>

	      	<div className="sec_btn">
	      		Download on iOS
	      	</div>
	      </div>

	      <div className="scan_text">
	      	Scan the QRcode, enter your code and validate
	      </div>
	    </div>

	    <div className="sec_qr_con">
    		<img src={qrbar_code} className="qr_code" alt="" />

    		<input type="text" pattern="[0-9]{6}" maxlength="6" placeholder="******" />

    		<input type="submit" value="Validate" />
	    </div>
    </div>
  )
}

export default Security