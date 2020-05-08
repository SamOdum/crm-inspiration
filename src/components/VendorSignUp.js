import React from 'react';
import { NavLink } from 'react-router-dom';

const VendorSignUp = () => {
  return (
    <div className="main-container col1-layout">
      <div className="container">
        <div className="row">
          <ul className="breadcrumb">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="active">Vendor Signup</li>
          </ul>
          <div className="vendor-create">
            <section className="main-container col1-layout">
              <div className="main container">
                <div className="vendor-form">
                  <form id="w0" className="form-vertical" method="post">
                    <input
                      type="hidden"
                      name="_csrf"
                      value="c_WR8o79OMQjzwrN1rnIIjkXN9Y9F1Bg7BT12F0ye-YQw9OKuJttvE-OUr-x8P5YTVlegQltEiqJQJroE14riA=="
                    />
                    <div className="panel panel-info">
                      <div className="panel-heading">
                        <h3 className="panel-title">Vendor Details</h3>
                      </div>

                      <div className="panel-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label
                                className="control-label"
                                htmlFor="vendor_name"
                              >
                                Vendor Name
                                <input
                                  type="text"
                                  name="vendor_name"
                                  data-validation="required"
                                  mandatory-field
                                  className="form-control"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-info">
                      <div className="panel-heading">
                        <h3 className="panel-title">Contact Details</h3>
                      </div>
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label
                                className="control-label"
                                htmlFor="vendor_firstname"
                              >
                                First name
                                <input
                                  type="text"
                                  name="vendor_firstname"
                                  data-validation="required"
                                  mandatory-field
                                  className="form-control"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label
                                className="control-label"
                                htmlFor="vendor_lastname"
                              >
                                Last Name
                                <input
                                  type="text"
                                  name="vendor_lastname"
                                  data-validation="required"
                                  mandatory-field
                                  className="form-control"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label
                                className="control-label"
                                htmlFor="vendor_email"
                              >
                                Email
                                <input
                                  type="text"
                                  name="vendor_email"
                                  data-validation="required"
                                  email-validation
                                  mandatory-field
                                  className="form-control"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label
                                className="control-label"
                                htmlFor="vendor_phone"
                              >
                                Phone
                                <input
                                  type="text"
                                  name="vendor_phone"
                                  data-validation="required"
                                  num-validation
                                  className="form-control"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label
                                className="control-label"
                                htmlFor="vendor_mobile"
                              >
                                Mobile
                                <input
                                  type="text"
                                  name="vendor_mobile"
                                  data-validation="required"
                                  num-validation
                                  mandatory-field
                                  className="form-control"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label
                                className="control-label"
                                htmlFor="vendor_fax"
                              >
                                Fax
                                <input
                                  type="text"
                                  name="vendor_faxfax"
                                  data-validation="required"
                                  num-validation
                                  className="form-control"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-info">
                      <div className="panel-heading">
                        <h3 className="panel-title">Address Details</h3>
                      </div>
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label
                                className="control-label"
                                htmlFor="vendor_address_1"
                              >
                                Address 1
                                <input
                                  type="text"
                                  name="vendor_address_1"
                                  data-validation="required"
                                  mandatory-field
                                  className="form-control"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label
                                className="control-label"
                                htmlFor="vendor_address_2"
                              >
                                Address 2
                                <input
                                  type="text"
                                  name="vendor_address_2"
                                  className="form-control"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label
                                className="control-label"
                                htmlFor="vendor_zipcode"
                              >
                                Zipcode
                                <input
                                  type="text"
                                  name="vendor_zipcode"
                                  data-validation="required"
                                  mandatory-field
                                  className="form-control"
                                />
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group required">
                              <label
                                className="control-label"
                                htmlFor="vendor_country_id"
                              >
                                Country
                                <select
                                  id="vendor_country_id"
                                  className="form-control"
                                  name="country_id"
                                  data-validation="required"
                                  mandatory-field=""
                                >
                                  <option value="">--Select--</option>
                                  <option value="3">AFGHANISTAN</option>
                                  <option value="16">ALAND ISLANDS</option>

                                  <option value="6">ALBANIA</option>
                                  <option value="61">ALGERIA</option>
                                  <option value="12">AMERICAN SAMOA</option>
                                  <option value="1">ANDORRA</option>
                                  <option value="9">ANGOLA</option>
                                  <option value="5">ANGUILLA</option>
                                  <option value="10">ANTARCTICA</option>
                                  <option value="4">ANTIGUA AND BARBUDA</option>
                                  <option value="11">ARGENTINA</option>
                                  <option value="7">ARMENIA</option>
                                  <option value="15">ARUBA</option>
                                  <option value="14">AUSTRALIA</option>
                                  <option value="13">AUSTRIA</option>
                                  <option value="17">AZERBAIJAN</option>
                                  <option value="32">BAHAMAS</option>
                                  <option value="24">BAHRAIN</option>
                                  <option value="20">BANGLADESH</option>
                                  <option value="19">BARBADOS</option>
                                  <option value="36">BELARUS</option>
                                  <option value="21">BELGIUM</option>
                                  <option value="37">BELIZE</option>
                                  <option value="26">BENIN</option>
                                  <option value="28">BERMUDA</option>
                                  <option value="33">BHUTAN</option>
                                  <option value="30">
                                    BOLIVIA, PLURINATIONAL STATE OF
                                  </option>

                                  <option value="18">
                                    BOSNIA AND HERZEGOVINA
                                  </option>

                                  <option value="35">BOTSWANA</option>
                                  <option value="34">BOUVET ISLAND</option>
                                  <option value="31">BRAZIL</option>
                                  <option value="105">
                                    BRITISH INDIAN OCEAN TERRITORY
                                  </option>

                                  <option value="29">BRUNEI DARUSSALAM</option>
                                  <option value="23">BULGARIA</option>
                                  <option value="22">BURKINA FASO</option>
                                  <option value="25">BURUNDI</option>
                                  <option value="116">CAMBODIA</option>
                                  <option value="47">CAMEROON</option>
                                  <option value="38">CANADA</option>
                                  <option value="52">CAPE VERDE</option>
                                  <option value="123">CAYMAN ISLANDS</option>
                                  <option value="41">
                                    CENTRAL AFRICAN REPUBLIC
                                  </option>
                                  <option value="212">CHAD</option>
                                  <option value="46">CHILE</option>
                                  <option value="48">CHINA</option>
                                  <option value="53">CHRISTMAS ISLAND</option>
                                  <option value="39">
                                    COCOS (KEELING) ISLANDS
                                  </option>
                                  <option value="49">COLOMBIA</option>
                                  <option value="118">COMOROS</option>
                                  <option value="42">CONGO</option>
                                  <option value="40">
                                    CONGO, THE DEMOCRATIC REPUBLIC OF THE
                                  </option>
                                  <option value="45">COOK ISLANDS</option>
                                  <option value="50">COSTA RICA</option>
                                  <option value="44">COTE D&#039;IVOIRE</option>
                                  <option value="97">CROATIA</option>
                                  <option value="51">CUBA</option>
                                  <option value="54">CYPRUS</option>
                                  <option value="55">CZECH REPUBLIC</option>
                                  <option value="58">DENMARK</option>
                                  <option value="57">DJIBOUTI</option>
                                  <option value="59">DOMINICA</option>
                                  <option value="60">DOMINICAN REPUBLIC</option>
                                  <option value="62">ECUADOR</option>
                                  <option value="64">EGYPT</option>
                                  <option value="208">EL SALVADOR</option>
                                  <option value="87">EQUATORIAL GUINEA</option>
                                  <option value="66">ERITREA</option>
                                  <option value="63">ESTONIA</option>
                                  <option value="68">ETHIOPIA</option>
                                  <option value="71">
                                    FALKLAND ISLANDS (MALVINAS)
                                  </option>
                                  <option value="73">FAROE ISLANDS</option>
                                  <option value="70">FIJI</option>
                                  <option value="69">FINLAND</option>
                                  <option value="74">FRANCE</option>
                                  <option value="79">FRENCH GUIANA</option>
                                  <option value="174">FRENCH POLYNESIA</option>
                                  <option value="213">
                                    FRENCH SOUTHERN TERRITORIES
                                  </option>
                                  <option value="75">GABON</option>
                                  <option value="84">GAMBIA</option>
                                  <option value="78">GEORGIA</option>
                                  <option value="56">GERMANY</option>
                                  <option value="81">GHANA</option>
                                  <option value="82">GIBRALTAR</option>
                                  <option value="88">GREECE</option>
                                  <option value="83">GREENLAND</option>
                                  <option value="77">GRENADA</option>
                                  <option value="86">GUADELOUPE</option>
                                  <option value="91">GUAM</option>
                                  <option value="90">GUATEMALA</option>
                                  <option value="80">GUERNSEY</option>
                                  <option value="85">GUINEA</option>
                                  <option value="92">GUINEA-BISSAU</option>
                                  <option value="93">GUYANA</option>
                                  <option value="98">HAITI</option>
                                  <option value="95">
                                    HEARD ISLAND AND MCDONALD ISLANDS
                                  </option>
                                  <option value="233">
                                    HOLY SEE (VATICAN CITY STATE)
                                  </option>
                                  <option value="96">HONDURAS</option>
                                  <option value="94">HONG KONG</option>
                                  <option value="99">HUNGARY</option>
                                  <option value="108">ICELAND</option>
                                  <option value="104">INDIA</option>
                                  <option value="100">INDONESIA</option>
                                  <option value="107">
                                    IRAN, ISLAMIC REPUBLIC OF
                                  </option>
                                  <option value="106">IRAQ</option>
                                  <option value="101">IRELAND</option>
                                  <option value="103">ISLE OF MAN</option>
                                  <option value="102">ISRAEL</option>
                                  <option value="109">ITALY</option>
                                  <option value="111">JAMAICA</option>
                                  <option value="113">JAPAN</option>
                                  <option value="110">JERSEY</option>
                                  <option value="112">JORDAN</option>
                                  <option value="124">KAZAKHSTAN</option>
                                  <option value="114">KENYA</option>
                                  <option value="117">KIRIBATI</option>
                                  <option value="120">
                                    KOREA, DEMOCRATIC PEOPLE&amp;S REPUBLIC OF
                                  </option>
                                  <option value="121">
                                    KOREA, REPUBLIC OF
                                  </option>
                                  <option value="122">KUWAIT</option>
                                  <option value="115">KYRGYZSTAN</option>
                                  <option value="125">
                                    LAO PEOPLE&amp;S DEMOCRATIC REPUBLIC
                                  </option>
                                  <option value="134">LATVIA</option>
                                  <option value="126">LEBANON</option>
                                  <option value="131">LESOTHO</option>
                                  <option value="130">LIBERIA</option>
                                  <option value="135">
                                    LIBYAN ARAB JAMAHIRIYA
                                  </option>
                                  <option value="128">LIECHTENSTEIN</option>
                                  <option value="132">LITHUANIA</option>
                                  <option value="133">LUXEMBOURG</option>
                                  <option value="147">MACAO</option>
                                  <option value="143">MACEDONIA</option>
                                  <option value="141">MADAGASCAR</option>
                                  <option value="155">MALAWI</option>
                                  <option value="157">MALAYSIA</option>
                                  <option value="154">MALDIVES</option>
                                  <option value="144">MALI</option>
                                  <option value="152">MALTA</option>
                                  <option value="142">MARSHALL ISLANDS</option>
                                  <option value="149">MARTINIQUE</option>
                                  <option value="150">MAURITANIA</option>
                                  <option value="153">MAURITIUS</option>
                                  <option value="243">MAYOTTE</option>
                                  <option value="156">MEXICO</option>
                                  <option value="72">
                                    MICRONESIA, FEDERATED STATES OF
                                  </option>
                                  <option value="138">
                                    MOLDOVA, REPUBLIC OF
                                  </option>
                                  <option value="137">MONACO</option>
                                  <option value="146">MONGOLIA</option>
                                  <option value="139">MONTENEGRO</option>
                                  <option value="151">MONTSERRAT</option>
                                  <option value="136">MOROCCO</option>
                                  <option value="158">MOZAMBIQUE</option>
                                  <option value="145">MYANMAR</option>
                                  <option value="159">NAMIBIA</option>
                                  <option value="168">NAURU</option>
                                  <option value="167">NEPAL</option>
                                  <option value="165">NETHERLANDS</option>
                                  <option value="8">
                                    NETHERLANDS ANTILLES
                                  </option>
                                  <option value="160">NEW CALEDONIA</option>
                                  <option value="170">NEW ZEALAND</option>
                                  <option value="164">NICARAGUA</option>
                                  <option value="161">NIGER</option>
                                  <option value="163">NIGERIA</option>
                                  <option value="169">NIUE</option>
                                  <option value="162">NORFOLK ISLAND</option>
                                  <option value="148">
                                    NORTHERN MARIANA ISLANDS
                                  </option>
                                  <option value="166">NORWAY</option>
                                  <option value="171">OMAN</option>
                                  <option value="177">PAKISTAN</option>
                                  <option value="184">PALAU</option>
                                  <option value="182">
                                    PALESTINIAN TERRITORY, OCCUPIED
                                  </option>
                                  <option value="172">PANAMA</option>
                                  <option value="175">PAPUA NEW GUINEA</option>
                                  <option value="185">PARAGUAY</option>
                                  <option value="173">PERU</option>
                                  <option value="176">PHILIPPINES</option>
                                  <option value="180">PITCAIRN</option>
                                  <option value="178">POLAND</option>
                                  <option value="183">PORTUGAL</option>
                                  <option value="181">PUERTO RICO</option>
                                  <option value="186">QATAR</option>
                                  <option value="187">RÉUNION</option>
                                  <option value="188">ROMANIA</option>
                                  <option value="190">
                                    RUSSIAN FEDERATION
                                  </option>
                                  <option value="191">RWANDA</option>
                                  <option value="27">SAINT BARTHLEMY</option>
                                  <option value="198">SAINT HELENA</option>
                                  <option value="119">
                                    SAINT KITTS AND NEVIS
                                  </option>
                                  <option value="127">SAINT LUCIA</option>
                                  <option value="140">SAINT MARTIN</option>
                                  <option value="179">
                                    SAINT PIERRE AND MIQUELON
                                  </option>
                                  <option value="234">
                                    SAINT VINCENT AND THE GRENADINES
                                  </option>
                                  <option value="241">SAMOA</option>
                                  <option value="203">SAN MARINO</option>
                                  <option value="207">
                                    SAO TOME AND PRINCIPE
                                  </option>
                                  <option value="192">SAUDI ARABIA</option>
                                  <option value="204">SENEGAL</option>
                                  <option value="189">SERBIA</option>
                                  <option value="194">SEYCHELLES</option>
                                  <option value="202">SIERRA LEONE</option>
                                  <option value="197">SINGAPORE</option>
                                  <option value="201">SLOVAKIA</option>
                                  <option value="199">SLOVENIA</option>
                                  <option value="193">SOLOMON ISLANDS</option>
                                  <option value="205">SOMALIA</option>
                                  <option value="244">SOUTH AFRICA</option>
                                  <option value="89">
                                    SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS
                                  </option>
                                  <option value="67">SPAIN</option>
                                  <option value="129">SRI LANKA</option>
                                  <option value="195">SUDAN</option>
                                  <option value="206">SURINAME</option>
                                  <option value="200">
                                    SVALBARD AND JAN MAYEN
                                  </option>
                                  <option value="210">SWAZILAND</option>
                                  <option value="196">SWEDEN</option>
                                  <option value="43">SWITZERLAND</option>
                                  <option value="209">
                                    SYRIAN ARAB REPUBLIC
                                  </option>
                                  <option value="225">TAIWAN</option>
                                  <option value="216">TAJIKISTAN</option>
                                  <option value="226">
                                    TANZANIA, UNITED REPUBLIC OF
                                  </option>
                                  <option value="215">THAILAND</option>
                                  <option value="218">TIMOR-LESTE</option>
                                  <option value="214">TOGO</option>
                                  <option value="217">TOKELAU</option>
                                  <option value="221">TONGA</option>
                                  <option value="223">
                                    TRINIDAD AND TOBAGO
                                  </option>
                                  <option value="220">TUNISIA</option>
                                  <option value="222">TURKEY</option>
                                  <option value="219">TURKMENISTAN</option>
                                  <option value="211">
                                    TURKS AND CAICOS ISLANDS
                                  </option>
                                  <option value="224">TUVALU</option>
                                  <option value="228">UGANDA</option>
                                  <option value="227">UKRAINE</option>
                                  <option value="2">
                                    UNITED ARAB EMIRATES
                                  </option>
                                  <option value="76">UNITED KINGDOM</option>
                                  <option value="230">UNITED STATES</option>
                                  <option value="229">
                                    UNITED STATES MINOR OUTLYING ISLANDS
                                  </option>
                                  <option value="231">URUGUAY</option>
                                  <option value="232">UZBEKISTAN</option>
                                  <option value="239">VANUATU</option>
                                  <option value="235">
                                    VENEZUELA, BOLIVARIAN REPUBLIC OF
                                  </option>
                                  <option value="238">VIET NAM</option>
                                  <option value="236">
                                    VIRGIN ISLANDS, BRITISH
                                  </option>
                                  <option value="237">
                                    VIRGIN ISLANDS, U.S.
                                  </option>
                                  <option value="240">WALLIS AND FUTUNA</option>
                                  <option value="65">WESTERN SAHARA</option>
                                  <option value="242">YEMEN</option>
                                  <option value="245">ZAMBIA</option>
                                  <option value="246">ZIMBABWE</option>
                                </select>
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group required">
                              <label
                                className="control-label"
                                htmlFor="vendor_state_id"
                              >
                                State
                                <select
                                  id="state_id"
                                  className="form-control"
                                  name="vendor_state_id"
                                  data-validation="required"
                                  mandatory-field=""
                                >
                                  <option value="">--Select--</option>
                                </select>
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group required">
                              <label
                                className="control-label"
                                htmlFor="vendor_city_id"
                              >
                                City
                                <input
                                  type="text"
                                  id="city_id"
                                  className="form-control"
                                  name="vendor_city_id"
                                  placeholder="Type few letters and select from matching list"
                                  data-validation="required"
                                  mandatory-field=""
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="Vendor[added_by_id]"
                      className="form-control"
                      value="0"
                    />
                    <input
                      type="hidden"
                      name="Vendor[active]"
                      className="form-control"
                      value="0"
                    />
                    <input
                      type="hidden"
                      name="Vendor[vendor_type_id]"
                      className="form-control"
                      value="2"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm vendor_submit"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSignUp;
