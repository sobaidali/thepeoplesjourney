const options = [
    // {
    //   value: "all",
    //   //  label: <span class="pt-2 pb-2 d-block" onClick={featuredResearchers} >All Location</span>
    //   label: (
    //     <span
    //       class="pt-2 pb-2 d-block"
    //       onClick={() => setAllLocationData(true)}
    //     >
    //       All Locations
    //     </span>
    //   ),
    // },
    {
      id: 244,
      value: "US",
      label: "🇺🇸 United States of America",
    },
    {
      id: 1,
      value: "AF",
      label: "🇦🇫 Afghanistan",
    },
    {
      id: 199,
      value: "AX",
      label: "🇦🇽 \u00c5land Islands",
    },
    {
      id: 2,
      value: "AL",
      label: "🇦🇱 Albania",
    },
    {
      id: 3,
      value: "DZ",
      label: "🇩🇿 Algeria",
    },
    {
      id: 197,
      value: "AS",
      label: "🇦🇸 American Samoa",
    },
    {
      id: 4,
      value: "AD",
      label: "🇦🇩 Andorra",
    },
    {
      id: 5,
      value: "AO",
      label: "🇦🇴 Angola",
    },
    {
      id: 195,
      value: "AI",
      label: "🇦🇮 Anguilla",
    },
    {
      id: 196,

      value: "AQ",
      label: "🇦🇶 Antarctica",
    },
    {
      id: 6,

      value: "AG",
      label: "🇦🇬 Antigua and Barbuda",
    },
    {
      id: 7,

      value: "AR",
      label: "🇦🇷 Argentina",
    },
    {
      id: 8,

      value: "AM",
      label: "🇦🇲 Armenia",
    },
    {
      id: 198,

      value: "AW",
      label: "🇦🇼 Aruba",
    },
    {
      id: 9,

      value: "AU",
      label: "🇦🇺 Australia",
    },
    {
      id: 10,

      value: "AT",
      label: "🇦🇹 Austria",
    },
    {
      id: 11,

      value: "AZ",
      label: "🇦🇿 Azerbaijan",
    },
    {
      id: 12,

      value: "BS",
      label: "🇧🇸 Bahamas",
    },
    {
      id: 13,

      value: "BH",
      label: "🇧🇭 Bahrain",
    },
    {
      id: 14,

      value: "BD",
      label: "🇧🇩 Bangladesh",
    },
    {
      id: 15,

      value: "BB",
      label: "🇧🇧 Barbados",
    },
    {
      id: 16,

      value: "BY",
      label: "🇧🇾 Belarus",
    },
    {
      id: 17,

      value: "BE",
      label: "🇧🇪 Belgium",
    },
    {
      id: 18,

      value: "BZ",
      label: "🇧🇿 Belize",
    },
    {
      id: 19,

      value: "BJ",
      label: "🇧🇯 Benin",
    },
    {
      id: 201,

      value: "BM",
      label: "🇧🇲 Bermuda",
    },
    {
      id: 20,

      value: "BT",
      label: "🇧🇹 Bhutan",
    },
    {
      id: 182,

      value: "BO",
      label: "🇧🇴 Bolivia",
    },
    {
      id: 202,

      value: "BQ",
      label: "🇧🇶 Caribbean Netherlands",
    },
    {
      id: 21,

      value: "BA",
      label: "🇧🇦 Bosnia and Herzegovina",
    },
    {
      id: 22,

      value: "BW",
      label: "🇧🇼 Botswana",
    },
    {
      id: 203,

      value: "BV",
      label: "🇧🇻 Bouvet Island",
    },
    {
      id: 23,

      value: "BR",
      label: "🇧🇷 Brazil",
    },
    {
      id: 220,

      value: "IO",
      label: "🇮🇴 British Indian Ocean Territory",
    },
    {
      id: 24,

      value: "BN",
      label: "🇧🇳 Brunei",
    },
    {
      id: 25,

      value: "BG",
      label: "🇧🇬 Bulgaria",
    },
    {
      id: 26,

      value: "BF",
      label: "🇧🇫 Burkina Faso",
    },
    {
      id: 27,

      value: "BI",
      label: "🇧🇮 Burundi",
    },
    {
      id: 31,

      value: "CV",
      label: "🇨🇻 Cape Verde",
    },
    {
      id: 28,

      value: "KH",
      label: "🇰🇭 Cambodia",
    },
    {
      id: 29,

      value: "CM",
      label: "🇨🇲 Cameroon",
    },
    {
      id: 30,

      value: "CA",
      label: "🇨🇦 Canada",
    },
    {
      id: 222,

      value: "KY",
      label: "🇰🇾 Cayman Islands",
    },
    {
      id: 32,

      value: "CF",
      label: "🇨🇫 Central African Republic",
    },
    {
      id: 33,

      value: "TD",
      label: "🇹🇩 Chad",
    },
    {
      id: 34,

      value: "CL",
      label: "🇨🇱 Chile",
    },
    {
      id: 35,

      value: "CN",
      label: "🇨🇳 China",
    },
    {
      id: 206,

      value: "CX",
      label: "🇨🇽 Christmas Island",
    },
    {
      id: 204,

      value: "CC",
      label: "🇨🇨 Cocos (Keeling) Islands",
    },
    {
      id: 36,

      value: "CO",
      label: "🇨🇴 Colombia",
    },
    {
      id: 37,

      value: "KM",
      label: "🇰🇲 Comoros",
    },
    {
      id: 38,

      value: "CG",
      label: "🇨🇬 Congo",
    },
    {
      id: 181,

      value: "CK",
      label: "🇨🇰 Cook Islands",
    },
    {
      id: 39,

      value: "CR",
      label: "🇨🇷 Costa Rica",
    },
    {
      id: 44,

      value: "CI",
      label: "🇨🇮 C\u00f4te d'Ivoire",
    },
    {
      id: 40,

      value: "HR",
      label: "🇭🇷 Croatia",
    },
    {
      id: 41,

      value: "CU",
      label: "🇨🇺 Cuba",
    },
    {
      id: 205,

      label: "CW",
      label: "🇨🇼 Cura\u00e7ao",
    },
    {
      id: 42,

      value: "CY",
      label: "🇨🇾 Cyprus",
    },
    {
      id: 43,

      value: "CZ",
      label: "🇨🇿 Czechia",
    },
    {
      id: 188,

      value: "KP",
      label: "🇰🇵 Democratic People's Republic of Korea",
    },
    {
      id: 183,

      value: "CD",
      label: "🇨🇩 Democratic Republic of the Congo",
    },
    {
      id: 45,

      value: "DK",
      label: "🇩🇰 Denmark",
    },
    {
      id: 46,

      value: "DJ",
      label: "🇩🇯 Djibouti",
    },
    {
      id: 47,

      value: "DM",
      label: "🇩🇲 Dominica",
    },
    {
      id: 48,

      value: "DO",
      label: "🇩🇴 Dominican Republic",
    },
    {
      id: 49,

      value: "EC",
      label: "🇪🇨 Ecuador",
    },
    {
      id: 50,

      value: "EG",
      label: "🇪🇬 Egypt",
    },
    {
      id: 51,

      value: "SV",
      label: "🇸🇻 El Salvador",
    },
    {
      id: 52,

      value: "GQ",
      label: "🇬🇶 Equatorial Guinea",
    },
    {
      id: 53,

      value: "ER",
      label: "🇪🇷 Eritrea",
    },
    {
      id: 54,

      value: "EE",
      label: "🇪🇪 Estonia",
    },
    {
      id: 55,

      value: "ET",
      label: "🇪🇹 Ethiopia",
    },
    {
      id: 184,

      value: "EU",
      label: "🇪🇺 European Union",
    },
    {
      id: 208,

      value: "FK",
      label: "🇫🇰 Falkland Islands (Malvinas)",
    },
    {
      id: 209,

      value: "FO",
      label: "🇫🇴 Faroe Islands (Associate Member)",
    },
    {
      id: 56,

      value: "FJ",
      label: "🇫🇯 Fiji",
    },
    {
      id: 57,
      label: "FI",
      label: "🇫🇮 Finland",
    },
    {
      id: 58,

      value: "FR",
      label: "🇫🇷 France",
    },
    {
      id: 210,

      value: "GF",
      label: "🇬🇫 French Guiana",
    },
    {
      id: 230,

      value: "PF",
      label: "🇵🇫 French Polynesia",
    },
    {
      id: 240,

      value: "TF",
      label: "🇹🇫 French Southern and Antarctic Lands",
    },
    {
      id: 59,

      value: "GA",
      label: "🇬🇦 Gabon",
    },
    {
      id: 60,

      value: "GM",
      label: "🇬🇲 Gambia",
    },
    {
      id: 61,

      value: "GE",
      label: "🇬🇪 Georgia",
    },
    {
      id: 62,

      value: "DE",
      label: "🇩🇪 Germany",
    },
    {
      id: 63,

      value: "GH",
      label: "🇬🇭 Ghana",
    },
    {
      id: 212,

      value: "GI",
      label: "🇬🇮 Gibraltar",
    },
    {
      id: 64,

      value: "GR",
      label: "🇬🇷 Greece",
    },
    {
      id: 213,

      value: "GL",
      label: "🇬🇱 Greenland",
    },
    {
      id: 65,

      value: "GD",
      label: "🇬🇩 Grenada",
    },
    {
      id: 214,

      value: "GP",
      label: "🇬🇵 Guadeloupe",
    },
    {
      id: 216,

      value: "GU",
      label: "🇬🇺 Guam",
    },
    {
      id: 66,

      value: "GT",
      label: "🇬🇹 Guatemala",
    },
    {
      id: 211,

      value: "GG",
      label: "🇬🇬 Guernsey",
    },
    {
      id: 67,

      value: "GN",
      label: "🇬🇳 Guinea",
    },
    {
      id: 68,

      value: "GW",
      label: "🇬🇼 Guinea-Bissau",
    },
    {
      id: 69,

      value: "GY",
      label: "🇬🇾 Guyana",
    },
    {
      id: 70,

      value: "HT",
      label: "🇭🇹 Haiti",
    },
    {
      id: 218,

      value: "HM",
      label: "🇭🇲 Heard Island And McDonald Islands",
    },
    {
      id: 245,

      value: "VA",
      label: "🇻🇦 Holy See",
    },
    {
      id: 71,

      value: "HN",
      label: "🇭🇳 Honduras",
    },
    {
      id: 217,

      value: "HK",
      label: "🇭🇰 Hong Kong",
    },
    {
      id: 72,

      value: "HU",
      label: "🇭🇺 Hungary",
    },
    {
      id: 73,

      value: "IS",
      label: "🇮🇸 Iceland",
    },
    {
      id: 74,

      value: "IN",
      label: "🇮🇳 India",
    },
    {
      id: 75,

      value: "ID",
      label: "🇮🇩 Indonesia",
    },
    {
      id: 187,

      value: "IR",
      label: "🇮🇷 Iran",
    },
    {
      id: 76,

      value: "IQ",
      label: "🇮🇶 Iraq",
    },
    {
      id: 77,

      value: "IE",
      label: "🇮🇪 Ireland",
    },
    {
      id: 219,

      value: "IM",
      label: "🇮🇲 Isle of Man",
    },
    {
      id: 78,

      value: "IL",
      label: "🇮🇱 Israel",
    },
    {
      id: 79,

      value: "IT",
      label: "🇮🇹 Italy",
    },
    {
      id: 80,

      value: "JM",
      label: "🇯🇲 Jamaica",
    },
    {
      id: 81,

      value: "JP",
      label: "🇯🇵 Japan",
    },
    {
      id: 221,
      label: "JE",
      label: "🇯🇪 Jersey",
    },
    {
      id: 82,

      value: "JO",
      label: "🇯🇴 Jordan",
    },
    {
      id: 83,

      value: "KZ",
      label: "🇰🇿 Kazakhstan",
    },
    {
      id: 84,

      value: "KE",
      label: "🇰🇪 Kenya",
    },
    {
      id: 85,

      value: "KI",
      label: "🇰🇮 Kiribati",
    },
    {
      id: 86,

      value: "KW",
      label: "🇰🇼 Kuwait",
    },
    {
      id: 87,

      value: "KG",
      label: "🇰🇬 Kyrgyzstan",
    },
    {
      id: 88,

      value: "LA",
      label: "🇱🇦 Laos",
    },
    {
      id: 89,

      value: "LV",
      label: "🇱🇻 Latvia",
    },
    {
      id: 90,

      value: "LB",
      label: "🇱🇧 Lebanon",
    },
    {
      id: 91,

      value: "LS",
      label: "🇱🇸 Lesotho",
    },
    {
      id: 92,
      label: "LR",
      label: "🇱🇷 Liberia",
    },
    {
      id: 93,

      value: "LY",
      label: "🇱🇾 Libya",
    },
    {
      id: 94,

      value: "LI",
      label: "🇱🇮 Liechtenstein",
    },
    {
      id: 95,

      value: "LT",
      label: "🇱🇹 Lithuania",
    },
    {
      id: 96,

      value: "LU",
      label: "🇱🇺 Luxembourg",
    },
    {
      id: 224,

      value: "MO",
      label: "🇲🇴 Macao",
    },
    {
      id: 97,

      value: "MG",
      label: "🇲🇬 Madagascar",
    },
    {
      id: 98,

      value: "MW",
      label: "🇲🇼 Malawi",
    },
    {
      id: 99,

      value: "MY",
      label: "🇲🇾 Malaysia",
    },
    {
      id: 100,

      value: "MV",
      label: "🇲🇻 Maldives",
    },
    {
      id: 101,

      value: "ML",
      label: "🇲🇱 Mali",
    },
    {
      id: 102,

      value: "MT",
      label: "🇲🇹 Malta",
    },
    {
      id: 103,

      value: "MH",
      label: "🇲🇭 Marshall Islands",
    },
    {
      id: 226,

      value: "MQ",
      label: "🇲🇶 Martinique",
    },
    {
      id: 104,

      value: "MR",
      label: "🇲🇷 Mauritania",
    },
    {
      id: 105,

      value: "MU",
      label: "🇲🇺 Mauritius",
    },
    {
      id: 249,

      value: "YT",
      label: "🇾🇹 Mayotte",
    },
    {
      id: 106,

      value: "MX",
      label: "🇲🇽 Mexico",
    },
    {
      id: 185,

      value: "FM",
      label: "🇫🇲 Micronesia",
    },
    {
      id: 107,

      value: "MC",
      label: "🇲🇨 Monaco",
    },
    {
      id: 108,

      value: "MN",
      label: "🇲🇳 Mongolia",
    },
    {
      id: 109,

      value: "ME",
      label: "🇲🇪 Montenegro",
    },
    {
      id: 227,

      value: "MS",
      label: "🇲🇸 Montserrat",
    },
    {
      id: 110,

      value: "MA",
      label: "🇲🇦 Morocco",
    },
    {
      id: 111,

      value: "MZ",
      label: "🇲🇿 Mozambique",
    },
    {
      id: 112,

      value: "MM",
      label: "🇲🇲 Myanmar",
    },
    {
      id: 113,

      value: "NA",
      label: "🇳🇦 Namibia",
    },
    {
      id: 114,
      label: "NR",
      label: "🇳🇷 Nauru",
    },
    {
      id: 115,

      value: "NP",
      label: "🇳🇵 Nepal",
    },
    {
      id: 116,

      value: "NL",
      label: "🇳🇱 Netherlands",
    },
    {
      id: 228,

      value: "NC",
      label: "🇳🇨 New Caledonia",
    },
    {
      id: 117,
      label: "NZ",
      label: "🇳🇿 New Zealand",
    },
    {
      id: 118,

      value: "NI",
      label: "🇳🇮 Nicaragua",
    },
    {
      id: 119,

      value: "NE",
      label: "🇳🇪 Niger",
    },
    {
      id: 120,

      value: "NG",
      label: "🇳🇬 Nigeria",
    },
    {
      id: 192,

      value: "NU",
      label: "🇳🇺 Niue",
    },
    {
      id: 229,

      value: "NF",
      label: "🇳🇫 Norfolk Island",
    },
    {
      id: 225,

      value: "MP",
      label: "🇲🇵 Northern Mariana Islands",
    },
    {
      id: 121,

      value: "NO",
      label: "🇳🇴 Norway",
    },
    {
      id: 122,

      value: "OM",
      label: "🇴🇲 Oman",
    },
    {
      id: 123,

      value: "PK",
      label: "🇵🇰 Pakistan",
    },
    {
      id: 124,

      value: "PW",
      label: "🇵🇼 Palau",
    },
    {
      id: 234,

      value: "PS",
      label: "🇵🇸 Palestinian Territory, Occupied",
    },
    {
      id: 125,

      value: "PA",
      label: "🇵🇦 Panama",
    },
    {
      id: 126,

      value: "PG",
      label: "🇵🇬 Papua New Guinea",
    },
    {
      id: 127,

      value: "PY",
      label: "🇵🇾 Paraguay",
    },
    {
      id: 128,

      value: "PE",
      label: "🇵🇪 Peru",
    },
    {
      id: 129,

      value: "PH",
      label: "🇵🇭 Philippines",
    },
    {
      id: 232,

      value: "PN",
      label: "🇵🇳 Pitcairn Islands",
    },
    {
      id: 130,

      value: "PL",
      label: "🇵🇱 Poland",
    },
    {
      id: 131,

      value: "PT",
      label: "🇵🇹 Portugal",
    },
    {
      id: 233,

      value: "PR",
      label: "🇵🇷 Puerto Rico",
    },
    {
      id: 132,

      value: "QA",
      label: "🇶🇦 Qatar",
    },
    {
      id: 189,

      value: "KR",
      label: "🇰🇷 Republic of Korea",
    },
    {
      id: 190,

      value: "MD",
      label: "🇲🇩 Republic of Moldova",
    },
    {
      id: 235,

      value: "RE",
      label: "🇷🇪 R\u00e9union",
    },
    {
      id: 133,

      value: "RO",
      label: "🇷🇴 Romania",
    },
    {
      id: 134,

      value: "RU",
      label: "🇷🇺 Russian Federation",
    },
    {
      id: 135,

      value: "RW",
      label: "🇷🇼 Rwanda",
    },
    {
      id: 200,

      value: "BL",
      label: "🇧🇱 Saint Barth\u00e9lemy",
    },
    {
      id: 236,

      value: "SH",
      label: "🇸🇭 Saint Helena",
    },
    {
      id: 136,

      value: "KN",
      label: "🇰🇳 Saint Kitts and Nevis",
    },
    {
      id: 137,

      value: "LC",
      label: "🇱🇨 Saint Lucia",
    },
    {
      id: 223,

      value: "MF",
      label: "🇲🇫 Saint Martin",
    },
    {
      id: 231,

      value: "PM",
      label: "🇵🇲 Saint Pierre and Miquelon",
    },
    {
      id: 138,

      value: "VC",
      label: "🇻🇨 Saint Vincent and the Grenadines",
    },
    {
      id: 139,

      value: "WS",
      label: "🇼🇸 Samoa",
    },
    {
      id: 140,

      value: "SM",
      label: "🇸🇲 San Marino",
    },
    {
      id: 141,

      value: "ST",
      label: "🇸🇹 Sao Tome and Principe",
    },
    {
      id: 142,

      value: "SA",
      label: "🇸🇦 Saudi Arabia",
    },
    {
      id: 143,

      value: "SN",
      label: "🇸🇳 Senegal",
    },
    {
      id: 144,

      value: "RS",
      label: "🇷🇸 Serbia",
    },
    {
      id: 145,

      value: "SC",
      label: "🇸🇨 Seychelles",
    },
    {
      id: 146,

      value: "SL",
      label: "🇸🇱 Sierra Leone",
    },
    {
      id: 147,

      value: "SG",
      label: "🇸🇬 Singapore",
    },
    {
      id: 238,

      value: "SX",
      label: "🇸🇽 Sint Maarten",
    },
    {
      id: 148,

      value: "SK",
      label: "🇸🇰 Slovakia",
    },
    {
      id: 149,

      value: "SI",
      label: "🇸🇮 Slovenia",
    },
    {
      id: 150,

      value: "SB",
      label: "🇸🇧 olomon Islands",
    },
    {
      id: 151,

      value: "SO",
      label: "🇸🇴 Somalia",
    },
    {
      id: 152,

      value: "ZA",
      label: "🇿🇦 South Africa",
    },
    {
      id: 215,

      value: "GS",
      label: "🇬🇸 South Georgia and the South Sandwich Islands",
    },
    {
      id: 250,

      value: "SS",
      label: "🇸🇸 South Sudan",
    },
    {
      id: 153,

      value: "ES",
      label: "🇪🇸 Spain",
    },
    {
      id: 154,

      value: "LK",
      label: "🇱🇰 Sri Lanka",
    },
    {
      id: 155,

      value: "SD",
      label: "🇸🇩 Sudan",
    },
    {
      id: 156,

      value: "SR",
      label: "🇸🇷 Suriname",
    },
    {
      id: 237,

      value: "SJ",
      label: "🇸🇯 Svalbard and Jan Mayen",
    },
    {
      id: 157,

      value: "SZ",
      label: "🇸🇿 Eswatini",
    },
    {
      id: 158,

      value: "SE",
      label: "🇸🇪 Sweden",
    },
    {
      id: 159,

      value: "CH",
      label: "🇨🇭 Switzerland",
    },
    {
      id: 160,

      value: "SY",
      label: "🇸🇾 Syria",
    },
    {
      id: 242,

      value: "TW",
      label: "🇹🇼 Taiwan",
    },
    {
      id: 161,

      value: "TJ",
      label: "🇹🇯 Tajikistan",
    },
    {
      id: 162,

      value: "TH",
      label: "🇹🇭 Thailand",
    },
    {
      id: 191,

      value: "MK",
      label: "🇲🇰 North Macedonia",
    },
    {
      id: 163,

      value: "TL",
      label: "🇹🇱 Timor-Leste",
    },
    {
      id: 164,

      value: "TG",
      label: "🇹🇬 Togo",
    },
    {
      id: 241,

      value: "TK",
      label: "🇹🇰 Tokelau",
    },
    {
      id: 165,

      value: "TO",
      label: "🇹🇴 Tonga",
    },
    {
      id: 166,

      value: "TT",
      label: "🇹🇹 Trinidad and Tobago",
    },
    {
      id: 167,

      value: "TN",
      label: "🇹🇳 Tunisia",
    },
    {
      id: 168,

      value: "TR",
      label: "🇹🇷 Turkey",
    },
    {
      id: 169,

      value: "TM",
      label: "🇹🇲 Turkmenistan",
    },
    {
      id: 239,

      value: "TC",
      label: "🇹🇨 Turks and Caicos Islands",
    },
    {
      id: 170,

      value: "TV",
      label: "🇹🇻 Tuvalu",
    },
    {
      id: 171,

      value: "UG",
      label: "🇺🇬 Uganda",
    },
    {
      id: 172,

      value: "UA",
      label: "🇺🇦 Ukraine",
    },
    {
      id: 173,

      value: "AE",
      label: "🇦🇪 United Arab Emirates",
    },
    {
      id: 186,

      value: "GB",
      label: "🇬🇧 United Kingdom",
    },

    {
      id: 193,

      value: "TZ",
      label: "🇹🇿 Tanzania",
    },
    {
      id: 243,

      value: "UM",
      label: "🇺🇲 U.S Outlying Islands",
    },

    {
      id: 247,

      value: "VI",
      label: "🇻🇮 U.S Virgin Islands",
    },
    {
      id: 174,

      value: "UY",
      label: "🇺🇾 Uruguay",
    },
    {
      id: 175,

      value: "UZ",
      label: "🇺🇿 Uzbekistan",
    },
    {
      id: 176,

      value: "VU",
      label: "🇻🇺 Vanuatu",
    },
    {
      id: 194,

      value: "VE",
      label: "🇻🇪 Venezuela",
    },
    {
      id: 177,

      value: "VN",
      label: "🇻🇳 Vietnam",
    },
    {
      id: 246,

      value: "VG",
      label: "🇻🇬 British Virgin Islands",
    },
    {
      id: 248,
      label: "WF",
      label: "🇼🇫 Wallis and Futuna",
    },
    {
      id: 207,

      value: "EH",
      label: "🇪🇭 Western Sahara",
    },
    {
      id: 178,

      value: "YE",
      label: "🇾🇪 Yemen",
    },
    {
      id: 179,

      value: "ZM",
      label: "🇿🇲 Zambia",
    },
    {
      id: 180,

      value: "ZW",
      label: "🇿🇼 Zimbabwe",
    },
];

export { options };