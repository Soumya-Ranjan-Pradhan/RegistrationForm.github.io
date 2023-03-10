import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./App.css"
import { useFormik } from 'formik'
import { signUpSchema } from './schemas'
const initialValues ={
  fame:"",
  date:"",
  email:"",
  father:"",
  mother:"",
  nationality:"",
  address:"",
  tel:"",
  mobile:"",
}
const Form = () => {
// const initialValues = {name:"",last:"",date:"",email:"",radio:"",nationality:"",address:"",city:"",tel:""}
const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
  initialValues: initialValues,
  validationSchema: signUpSchema,
  onSubmit : (values) =>{
console.log("🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values", values)
  }
})
console.log(errors)

const navigate =useNavigate();
const handleClick = () =>{
  navigate("/next1")
}
  return (
    <>
    <div className="img-nrt">
    <a href="https://www.nettantra.com/"><img src="./img/logo.svg" alt="" /></a>
    </div>
    <div className="container">
    <h1>Resignation Form</h1>
        {/* <div className="modal-container"> */}
          {/* <div className="modal-middle"> */}
            {/* <pre>{JSON.stringify(formValues, undefined,2)}</pre> */}
            <form onSubmit={handleSubmit} method="POST">
              <div className="input-block">
                <label htmlFor="name">Name<span>*</span></label>
                <br />
                <input type="text" autoComplete='off' name='fame' placeholder='First' size="35" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                <input type="text" autoComplete='off' name='last' placeholder='Last' 
                value={values.last} onChange={handleChange} onBlur={handleBlur} style={{marginLeft:"12px"}} 
                  size="35"
                />
              </div>
              {errors.fame && touched.fame ? (
                      <p className="form-error">{errors.fame}</p>
                    ) : null}
              {/* <div className="input-block-1">
                <label htmlFor="name">Last</label>
                <br />
                <input type="name" autoComplete='off' name='name' placeholder='Last' />
                <p className='form-error'></p>
              </div> */}
  
              <div className="input-block">
              <label htmlFor="name">Date Of Birth<span>*</span></label>
              <br />
              <input type="date" name='date' placeholder='MM/DD/YYYY' value={values.date} onChange={handleChange} onBlur={handleBlur} style={{width:"88.3%",
              }} />
              </div>
              {errors.date && touched.date ? (
                      <p className="form-error">{errors.date}</p>
                    ) : null}

              <div className="input-block">
                <label htmlFor="email" className='input-label'>Email<span>*</span></label>
                <br />
                <input type="email" id="emails" name="email" autoComplete='off' size="78" value={values.email} onChange={handleChange} onBlur={handleBlur} />
              </div>
              {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}

              <div className="input-block">
                <label htmlFor="name">Father's name <span>*</span></label>
                <br />
                <input type="text" autoComplete='off' name='father' size="35" value={values.father} onChange={handleChange} onBlur={handleBlur}
                 />
                <input type="name" autoComplete='off' name='last' placeholder='Last' style={{marginLeft:"12px"}}
                  size="35"/>
              </div>
              {errors.father && touched.father ? (
                      <p className="form-error">{errors.father}</p>
                    ) : null}
              
              <div className="input-block">
                <label htmlFor="name">Mother's name<span>*</span></label>
                <br />
                <input type="name" autoComplete='off' name='mother' placeholder='First' value={values.mother} onChange={handleChange} onBlur={handleBlur}
                  size="35"
                />
                <input type="name" autoComplete='off' name='last' placeholder='Last' style={{marginLeft:"12px"}}
                  size="35"
                />
              </div>
              {errors.mother && touched.mother ? (
                      <p className="form-error">{errors.mother}</p>
                    ) : null}

              <div className="input-block">
             <label htmlFor="radio">Gender<span>*</span></label>
             <br />
              <input type="radio" id="m" name="radio" />M
              <br />
                <input type="radio" id="m" name="radio" />F
              </div>
               
              <div className="input-block">
                <label htmlFor="name">Nationality<span>*</span></label>
                <br />
                <input type="name" autoComplete='off' name='nationality' size="77" value={values.nationality} onChange={handleChange} onBlur={handleBlur} />
              </div>
              {errors.nationality && touched.nationality ? (
                      <p className="form-error">{errors.nationality}</p>
                    ) : null}

              <div className="input-block">
                <label htmlFor="name">Home Address<span>*</span></label>
                <br />
                <input type="name" autoComplete='off' name='address' placeholder='Street Address' size="77" value={values.address} onChange={handleChange} onBlur={handleBlur} />
                <br />
                <input type="name" autoComplete='off' name='city' placeholder='City' size="35" />
    
                <select id="country" name="name" style={{width:"43.5%",marginLeft:"12px",
                height:"1.9rem",marginTop:"0.5rem",backgroundColor:"#fff",border:"1px solid rgb(167, 162, 162)",
                }}>
    <option>Country</option>
    <option value="AF">Afghanistan</option>
    <option value="AX">Aland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AQ">Antarctica</option>
    <option value="AG">Antigua and Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia</option>
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="CV">Cape Verde</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the Congo</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="CI">Cote D'Ivoire</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curacao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard Island and Mcdonald Islands</option>
    <option value="VA">Holy See (Vatican City State)</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran, Islamic Republic of</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KP">Korea, Democratic People's Republic of</option>
    <option value="KR">Korea, Republic of</option>
    <option value="XK">Kosovo</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libyan Arab Jamahiriya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia, Federated States of</option>
    <option value="MD">Moldova, Republic of</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestinian Territory, Occupied</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="RE">Reunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="BL">Saint Barthelemy</option>
    <option value="SH">Saint Helena</option>
    <option value="KN">Saint Kitts and Nevis</option>
    <option value="LC">Saint Lucia</option>
    <option value="MF">Saint Martin</option>
    <option value="PM">Saint Pierre and Miquelon</option>
    <option value="VC">Saint Vincent and the Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia and Montenegro</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SX">Sint Maarten</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia and the South Sandwich Islands</option>
    <option value="SS">South Sudan</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syrian Arab Republic</option>
    <option value="TW">Taiwan, Province of China</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania, United Republic of</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Turkey</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks and Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Viet Nam</option>
    <option value="VG">Virgin Islands, British</option>
    <option value="VI">Virgin Islands, U.s.</option>
    <option value="WF">Wallis and Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
</select>
              </div>
              {errors.address && touched.address ? (
                      <p className="form-error">{errors.address}</p>
                    ) : null}

              <div className="input-block">
              <label htmlFor="phone">Telephone-Home <span>*</span></label>
              <br />
              <input type="tel" name="tel" pattern="[0-9]{10}" placeholder='### ### ####' size="77" value={values.tel} onChange={handleChange} onBlur={handleBlur}
                autoComplete='off'
              />     
              </div>
              {errors.tel && touched.tel ? (
                      <p className="form-error">{errors.tel}</p>
                    ) : null}

              <div className="input-block">
              <label htmlFor="phone">Telephone-Mobile <span>*</span></label>
              <br />
              <input type="tel" name="mobile" pattern="[0-9]{10}" placeholder='### ### ####' size="77"  value={values.mobile} onChange={handleChange} onBlur={handleBlur}
              autoComplete='off' maxLength="10" />     
              </div>
              {errors.mobile && touched.mobile ? (
                      <p className="form-error">{errors.mobile}</p>
                    ) : null}
                <br />
              {/* 2nd pages validation */}
              <div className="btn">
              <button>Enter Now</button>
              <button onClick={handleClick}>Next Page</button>
              </div>
            </form>
          </div>
          </>
  )
}

export default Form