import { useContext, useEffect, useState } from "react";
import "./ProfileSettings.css";
import { IoIosArrowBack } from "react-icons/io";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProfileSettings = () => {
  const { user } = useContext(UserContext);
  const [cookies, setCookie] = useCookies(["user"]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.userToken) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [fullName, setFullName] = useState("");
  const [language, setLanguage] = useState("");
  const [currency, setCurrency] = useState("");

  const updateProfile = async (e) => {
    e.preventDefault();
    await axios
      .put(
        "https://duplitrades-server.onrender.com/pent/user/updateProfile/",
        {
          email: user?.email,
          userDetails: {
            fullName: fullName,
            language: language,
            currency: currency,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Form data");
  };

  return (
    <section class="profile_container">
      <form class="profile_form" onSubmit={updateProfile}>
        <div class="form_left">
          <label for="name">your name</label>
          <input
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            id="name"
            value={user?.fullName}
            placeholder="Your name"
          />

          <label for="language">language</label>
          <select id="language" onChange={(e) => setLanguage(e.target.value)}>
            <option value="ar">Arabic</option>
            <option value="bn">Bengali</option>
            <option value="cn">Chinese</option>
            <option value="cs">Czech</option>
            <option value="de">German</option>
            <option value="en" selected>
              English
            </option>
            <option value="es">Spanish</option>
            <option value="et">Estonian</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
            <option value="hr">Croatian</option>
            <option value="hy">Armenian</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="lt">Lithuanian</option>
            <option value="lv">Latvian</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="rom">Romani</option>
            <option value="ru">Russian</option>
            <option value="tr">Turkish</option>
            <option value="vi">Vietnamese</option>
            <option value="zh-CN">Chinese Simplified</option>
          </select>

          <label for="change_password">change your password</label>
          <input type="password" disabled id="change_password" />
        </div>

        <div class="form_right">
          <label for="email">your e-mail address</label>
          <input
            type="email"
            disabled
            value={user?.email}
            id="email"
            placeholder="Your e-mail address"
          />

          <label for="currency">currency</label>
          <select id="currency" onChange={(e) => setCurrency(e.target.value)}>
            <option selected="" value="USD">
              US Dollars (USD)
            </option>
            <option value="GBP">Pounds Sterling (GBP)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="AUD">Australian Dollars (AUD)</option>
            <option value="CAD">Canadian Dollars (CAD)</option>
            <option value="ZAR">Rand (ZAR)</option>
            <option value="THB">Baht (THB)</option>
            <option value="NOK">Krone (NOK)</option>
            <option value="TRL">Liras (TRL)</option>
            <option value="NGN">Nairas (NGN)</option>
            <option value="ILS">New Shekels (ILS)</option>
            <option value="SAR">Riyals (SAR)</option>
            <option value="RUB">Russian Rubles (RUB)</option>
            <option value="PLN">Zlotych (PLN)</option>
            <option value="AFN">Afghanis (AFN)</option>
            <option value="ARS">Argentine Pesos (ARS)</option>
            <option value="BSD">Bahamian Dollars (BSD)</option>
            <option value="PAB">Balboa (PAB)</option>
            <option value="BBD">Barbados Dollars (BBD)</option>
            <option value="BYR">Belarussian Rubles (BYR)</option>
            <option value="VEF">Bolivares Fuertes (VEF)</option>
            <option value="BOB">Bolivianos (BOB)</option>
            <option value="BND">Brunei Dollars (BND)</option>
            <option value="GHC">Cedis (GHC)</option>
            <option value="CLP">Chilean Pesos (CLP)</option>
            <option value="COP">Colombian Pesos (COP)</option>
            <option value="CRC">Colón (CRC)</option>
            <option value="SVC">Colones (SVC)</option>
            <option value="BAM">Convertible Marka (BAM)</option>
            <option value="NIO">Cordobas (NIO)</option>
            <option value="RSD">Dinars (RSD)</option>
            <option value="DOP">Dominican Pesos (DOP)</option>
            <option value="VND">Dong (VND)</option>
            <option value="EGP">Egyptian Pounds (EGP)</option>
            <option value="HUF">Forint (HUF)</option>
            <option value="GIP">Gibraltar Pounds (GIP)</option>
            <option value="PYG">Guarani (PYG)</option>
            <option value="GGP">Guernsey Pounds (GGP)</option>
            <option value="HKD">Hong Kong Dollars (HKD)</option>
            <option value="UAH">Hryvnia (UAH)</option>
            <option value="INR">Indian Rupees (INR)</option>
            <option value="IRR">Iranian Rials (IRR)</option>
            <option value="JMD">Jamaican Dollars (JMD)</option>
            <option value="CZK">Koruny (CZK)</option>
            <option value="DKK">Kroner (DKK)</option>
            <option value="SEK">Kronor (SEK)</option>
            <option value="ISK">Kronur (ISK)</option>
            <option value="HRK">Kuna (HRK)</option>
            <option value="LBP">Lebanese Pounds (LBP)</option>
            <option value="ALL">Leke (ALL)</option>
            <option value="HNL">Lempiras (HNL)</option>
            <option value="BGN">Leva (BGN)</option>
            <option value="TRY">Lira (TRY)</option>
            <option value="MUR">Mauritius Rupees (MUR)</option>
            <option value="MZN">Meticais (MZN)</option>
            <option value="MXN">Mexican Pesos (MXN)</option>
            <option value="NAD">Namibia Dollars (NAD)</option>
            <option value="NPR">Nepalese Rupees (NPR)</option>
            <option value="TWD">New Dollars (TWD)</option>
            <option value="RON">New Lei (RON)</option>
            <option value="AZN">New Manats (AZN)</option>
            <option value="NZD">New Zealand Dollars (NZD)</option>
            <option value="PEN">Nuevos Soles (PEN)</option>
            <option value="PKR">Pakistan Rupees (PKR)</option>
            <option value="UYU">Pesos Uruguayo (UYU)</option>
            <option value="PHP">Philippine Pesos (PHP)</option>
            <option value="BWP">Pula (BWP)</option>
            <option value="QAR">Qatari Rials (QAR)</option>
            <option value="GTQ">Quetzales (GTQ)</option>
            <option value="BRL">Reais (BRL)</option>
            <option value="OMR">Rials Omani (OMR)</option>
            <option value="KHR">Riels (KHR)</option>
            <option value="MYR">Ringgits (MYR)</option>
            <option value="IDR">Rupiahs (IDR)</option>
            <option value="SGD">Singapore Dollars (SGD)</option>
            <option value="SBD">Solomon Islands Dollars (SBD)</option>
            <option value="KGS">Soms (KGS)</option>
            <option value="LKR">Sri Lanka Rupees (LKR)</option>
            <option value="UZS">Sums (UZS)</option>
            <option value="CHF">Switzerland Francs (CHF)</option>
            <option value="KZT">Tenge (KZT)</option>
            <option value="TTD">Trinidad and Tobago Dollars (TTD)</option>
            <option value="KRW">Won (KRW)</option>
            <option value="JPY">Yen (JPY)</option>
            <option value="CNY">Yuan Renminbi (CNY)</option>
          </select>

          <label for="repeat_password">repeat password</label>
          <input type="password" disabled id="repeat_password" />
        </div>
      </form>

      <footer className="profileSet_footer">
        <a href="#">
          <IoIosArrowBack />
          Back
        </a>

        <input type="submit" value="Validate" />
      </footer>
    </section>
  );
};

export default ProfileSettings;
