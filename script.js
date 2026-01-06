let svgDoc = false
        const Infobox = document.getElementById("infobox");
        const mapWrapper = document.getElementById('mapWrapper');
        const worldSvg = document.getElementById("world-svg");
        const obj = document.getElementById('world-svg');
        const bookInfoHolder = document.getElementById("countryBookInfoHolder")
        const countryBookInfoTitle = document.getElementById("countryBookInfoTitle")
        const bokLandListeHolder = document.getElementById("bokLandListeHolder")
        const reverserBTN = document.getElementById("reverser")
        const landListeHolderBarSpacer = document.getElementById("landListeHolderBarSpacer")
        const landListeHolderTopBar = document.getElementById("landListeHolderTopBar")

        let allCountries = 
        [
            "Angola",
            "Antigua and Barbuda",
            "Afghanistan",
            "Albania",
            "United Arab Emirates",
            "Argentina",
            "Armenia",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Burundi",
            "Belgium",
            "Benin",
            "Burkina Faso",
            "Bangladesh",
            "Bulgaria",
            "Bahrain",
            "Bahamas",
            "Bosnia and Herzegovina",
            "Belarus",
            "Belize",
            "Bolivia",
            "Brazil",
            "Barbados",
            "Brunei",
            "Bhutan",
            "Botswana",
            "Central African Republic",
            "Canada",
            "Switzerland",
            "Chile",
            "China",
            "Ivory Coast",
            "Cameroon",
            "Democratic Republic of the Congo",
            "Republic of Congo",
            "Colombia",
            "Comoros",
            "Cape Verde",
            "Costa Rica",
            "Cuba",
            "Cyprus",
            "Czech Republic",
            "Germany",
            "Djibouti",
            "Dominica",
            "Denmark",
            "Greenland",
            "Dominican Republic",
            "Algeria",
            "Ecuador",
            "Egypt",
            "Eritrea",
            "Spain",
            "Canary Islands (Spain)",
            "Estonia",
            "Ethiopia",
            "Faeroe Islands",
            "Falkland Islands",
            "Finland",
            "Fiji",
            "France",
            "French Polynesia",
            "Saint-Barthélemy",
            "Saint-Martin",
            "French Guiana",
            "Federated States of Micronesia",
            "Gabon",
            "United Kingdom",
            "Cayman Islands",
            "Turks and Caicos Islands",
            "Georgia",
            "Ghana",
            "The Gambia",
            "Guinea",
            "Guinea-Bissau",
            "Equatorial Guinea",
            "Greece",
            "Grenada",
            "Guadeloupe",
            "Guatemala",
            "Guam",
            "Guyana",
            "Honduras",
            "Croatia",
            "Haiti",
            "Hungary",
            "Indonesia",
            "India",
            "Ireland",
            "Iran",
            "Iraq",
            "Iceland",
            "Israel",
            "Italy",
            "Jamaica",
            "Jordan",
            "Japan",
            "Kazakhstan",
            "Kenya",
            "Kosovo",
            "Kyrgyzstan",
            "Cambodia",
            "Kiribati",
            "Saint Kitts and Nevis",
            "South Korea",
            "Kuwait",
            "Laos",
            "Lebanon",
            "Liberia",
            "Libya",
            "Saint Lucia",
            "Liechtenstein",
            "Sri Lanka",
            "Lesotho",
            "Lithuania",
            "Luxembourg",
            "Latvia",
            "Morocco",
            "Monaco",
            "Moldova",
            "Madagascar",
            "Maldives",
            "Mexico",
            "Marshall Islands",
            "Martinique",
            "Macedonia",
            "Mali",
            "Malta",
            "Myanmar",
            "Montenegro",
            "Mongolia",
            "Mozambique",
            "Mauritania",
            "Mauritius",
            "Malawi",
            "Malaysia",
            "Mayotte",
            "Namibia",
            "Niger",
            "Nigeria",
            "Nicaragua",
            "Netherlands",
            "North Korea",
            "Northern Mariana Islands",
            "Norway",
            "Nepal",
            "Nauru",
            "New Zealand",
            "Oman",
            "Pakistan",
            "Panama",
            "Peru",
            "Philippines",
            "Palau",
            "Palestine",
            "Papua New Guinea",
            "Poland",
            "Portugal",
            "Puerto Rico",
            "Paraguay",
            "Qatar",
            "Romania",
            "Russia",
            "Rwanda",
            "Saudi Arabia",
            "Sudan",
            "Senegal",
            "Singapore",
            "Solomon Islands",
            "Sierra Leone",
            "El Salvador",
            "San Marino",
            "Somalia",
            "Serbia",
            "South Sudan",
            "São Tomé and Principe",
            "Suriname",
            "Slovakia",
            "Slovenia",
            "Sweden",
            "Swaziland",
            "Seychelles",
            "Syria",
            "Chad",
            "Togo",
            "Thailand",
            "Tajikistan",
            "Taiwan",
            "Turkmenistan",
            "Timor-Leste",
            "Tonga",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey",
            "Tuvalu",
            "Tanzania",
            "Uganda",
            "Ukraine",
            "Uruguay",
            "United States",
            "Uzbekistan",
            "Vatican City",
            "Saint Vincent and the Grenadines",
            "Venezuela",
            "Vietnam",
            "Vanuatu",
            "Western Sahara",
            "Samoa",
            "Yemen",
            "South Africa",
            "Zambia",
            "Zimbabwe"
        ]
        let CountryLUT = {
"Angola":"Angola",
"Antigua and Barbuda":"Antigua og Barbuda",
"Afghanistan":"Afghanistan",
"Albania":"Albania",
"United Arab Emirates":"De forente arabiske emirater",
"Argentina":"Argentina",
"Armenia":"Armenia",
"Australia":"Australia",
"Austria":"Østerrike",
"Azerbaijan":"Aserbajdsjan",
"Burundi":"Burundi",
"Belgium":"Belgia",
"Benin":"Benin",
"Burkina Faso":"Burkina Faso",
"Bangladesh":"Bangladesh",
"Bulgaria":"Bulgaria",
"Bahrain":"Bahrain",
"Bahamas":"Bahamas",
"Bosnia and Herzegovina":"Bosnia-Hercegovina",
"Belarus":"Hviterussland",
"Belize":"Belize",
"Bolivia":"Bolivia",
"Brazil":"Brasil",
"Barbados":"Barbados",
"Brunei":"Brunei",
"Bhutan":"Bhutan",
"Botswana":"Botswana",
"Central African Republic":"Den sentralafrikanske republikk",
"Canada":"Canada",
"Switzerland":"Sveits",
"Chile":"Chile",
"China":"Kina",
"Ivory Coast":"Elfenbenskysten",
"Cameroon":"Kamerun",
"Democratic Republic of the Congo":"Den demokratiske republikken Kongo",
"Republic of Congo":"Republikken Kongo",
"Colombia":"Colombia",
"Comoros":"Komorene",
"Cape Verde":"Kapp Verde",
"Costa Rica":"Costa Rica",
"Cuba":"Cuba",
"Cyprus":"Kypros",
"Czech Republic":"Tsjekkia",
"Czechia":"Tsjekkia",
"Germany":"Tyskland",
"Djibouti":"Djibouti",
"Dominica":"Dominica",
"Denmark":"Danmark",
"Greenland":"Grønland",
"Dominican Republic":"Den dominikanske republikken",
"Algeria":"Algerie",
"Ecuador":"Ecuador",
"Egypt":"Egypt",
"Eritrea":"Eritrea",
"Spain":"Spania",
"Canary Islands (Spain)":"Kanariøyene (Spania)",
"Estonia":"Estland",
"Ethiopia":"Etiopia",
"Faeroe Islands":"Færøyene",
"Falkland Islands":"Falklandsøyene",
"Finland":"Finland",
"Fiji":"Fiji",
"France":"Frankrike",
"French Polynesia":"Fransk Polynesia",
"Saint-Barthélemy":"Saint-Barthélemy",
"Saint-Martin":"Saint-Martin",
"French Guiana":"Fransk Guyana",
"Federated States of Micronesia":"Federerte stater i Mikronesia",
"Gabon":"Gabon",
"United Kingdom":"Storbritannia",
"Cayman Islands":"Caymanøyene",
"Turks and Caicos Islands":"Turks- og Caicosøyene",
"Georgia":"Georgia",
"Ghana":"Ghana",
"The Gambia":"Gambia",
"Guinea":"Guinea",
"Guinea-Bissau":"Guinea-Bissau",
"Equatorial Guinea":"Ekvatorial Guinea",
"Greece":"Hellas",
"Grenada":"Grenada",
"Guadeloupe":"Guadeloupe",
"Guatemala":"Guatemala",
"Guam":"Guam",
"Guyana":"Guyana",
"Honduras":"Honduras",
"Croatia":"Kroatia",
"Haiti":"Haiti",
"Hungary":"Ungarn",
"Indonesia":"Indonesia",
"India":"India",
"Ireland":"Irland",
"Iran":"Iran",
"Iraq":"Irak",
"Iceland":"Island",
"Israel":"Israel",
"Italy":"Italia",
"Jamaica":"Jamaica",
"Jordan":"Jordan",
"Japan":"Japan",
"Kazakhstan":"Kasakhstan",
"Kenya":"Kenya",
"Kosovo":"Kosovo",
"Kyrgyzstan":"Kirgisistan",
"Cambodia":"Kambodsja",
"Kiribati":"Kiribati",
"Saint Kitts and Nevis":"Saint Kitts og Nevis",
"South Korea":"Sør-Korea",
"Kuwait":"Kuwait",
"Laos":"Laos",
"Lebanon":"Libanon",
"Liberia":"Liberia",
"Libya":"Libya",
"Saint Lucia":"Saint Lucia",
"Liechtenstein":"Liechtenstein",
"Sri Lanka":"Sri Lanka",
"Lesotho":"Lesotho",
"Lithuania":"Litauen",
"Luxembourg":"Luxembourg",
"Latvia":"Latvia",
"Morocco":"Marokko",
"Monaco":"Monaco",
"Moldova":"Moldova",
"Madagascar":"Madagaskar",
"Maldives":"Maldivene",
"Mexico":"Mexico",
"Marshall Islands":"Marshalløyene",
"Martinique":"Martinique",
"Macedonia":"Nord-Makedonia",
"Mali":"Mali",
"Malta":"Malta",
"Myanmar":"Myanmar",
"Montenegro":"Montenegro",
"Mongolia":"Mongolia",
"Mozambique":"Mozambique",
"Mauritania":"Mauritania",
"Mauritius":"Mauritius",
"Malawi":"Malawi",
"Malaysia":"Malaysia",
"Mayotte":"Mayotte",
"Namibia":"Namibia",
"Niger":"Niger",
"Nigeria":"Nigeria",
"Nicaragua":"Nicaragua",
"Netherlands":"Nederland",
"North Korea":"Nord-Korea",
"Northern Mariana Islands":"Nord-Marianene",
"Norway":"Norge",
"Nepal":"Nepal",
"Nauru":"Nauru",
"New Zealand":"Ny-Zealand",
"Oman":"Oman",
"Pakistan":"Pakistan",
"Panama":"Panama",
"Peru":"Peru",
"Philippines":"Filippinene",
"Palau":"Palau",
"Palestine":"Palestina",
"Papua New Guinea":"Papua Ny-Guinea",
"Poland":"Polen",
"Portugal":"Portugal",
"Puerto Rico":"Puerto Rico",
"Paraguay":"Paraguay",
"Qatar":"Qatar",
"Romania":"Romania",
"Russia":"Russland",
"Rwanda":"Rwanda",
"Saudi Arabia":"Saudi-Arabia",
"Sudan":"Sudan",
"Senegal":"Senegal",
"Singapore":"Singapore",
"Solomon Islands":"Salomonøyene",
"Sierra Leone":"Sierra Leone",
"El Salvador":"El Salvador",
"San Marino":"San Marino",
"Somalia":"Somalia",
"Serbia":"Serbia",
"South Sudan":"Sør-Sudan",
"São Tomé and Principe":"São Tomé og Principe",
"Suriname":"Surinam",
"Slovakia":"Slovakia",
"Slovenia":"Slovenia",
"Sweden":"Sverige",
"Swaziland":"Eswatini",
"Eswatini":"Eswatini",
"Seychelles":"Seychellene",
"Syria":"Syria",
"Chad":"Tsjad",
"Togo":"Togo",
"Thailand":"Thailand",
"Tajikistan":"Tadsjikistan",
"Taiwan":"Taiwan",
"Turkmenistan":"Turkmenistan",
"Timor-Leste":"Øst-Timor",
"Tonga":"Tonga",
"Trinidad and Tobago":"Trinidad og Tobago",
"Tunisia":"Tunisia",
"Turkey":"Tyrkia",
"Tuvalu":"Tuvalu",
"Tanzania":"Tanzania",
"Uganda":"Uganda",
"Ukraine":"Ukraina",
"Uruguay":"Uruguay",
"United States":"USA",
"Uzbekistan":"Usbekistan",
"Vatican City":"Vatikanstaten",
"Saint Vincent and the Grenadines":"Saint Vincent og Grenadinene",
"Venezuela":"Venezuela",
"Vietnam":"Vietnam",
"Vanuatu":"Vanuatu",
"Western Sahara":"Vest-Sahara",
"Samoa":"Samoa",
"Yemen":"Jemen",
"South Africa":"Sør-Afrika",
"Zambia":"Zambia",
"Zimbabwe":"Zimbabwe"}
        let currentCountryHover = "none"

        const ZERO_BOOK_COLOR = "#EEF2F7";

        // HSL ramp for 1+ books
        const COLOR_MIN = { h: 210, s: 70, l: 70 }; // very light blue
        const COLOR_MAX = { h: 210, s: 70, l: 30 }; // deep blue

        obj.addEventListener('load', () => {

            console.log("LOADED")
            svgDoc = obj.contentDocument;

            const allAreas = svgDoc.querySelectorAll('path, polygon, g, rect, circle');
            allAreas.forEach(el => {
                el.addEventListener('click', e => {
                    // Try to detect a reasonable name for this shape
                    //console.log(el)
                    const name =
                        el.getAttribute('data-name') ||
                        el.getAttribute('name') ||
                        el.getAttribute('class') ||
                        'Unknown region';
                    console.log(`Hovering over: ${name}`);
                    //colorCountry(name, "#FF0000")

                    console.log(window.innerWidth)
                    if (false && window.innerWidth < 1000) {
                        Infobox.style.left = 0
                        Infobox.style.top = 0
                    } else {
                        const viewportWidth = window.innerWidth;
                        const viewportHeight = window.innerHeight;

                        const infoboxWidth = Math.max(Infobox.offsetWidth,330);
                        const infoboxHeight = Math.max(Infobox.offsetHeight,220);
                        console.log(infoboxHeight)

                        let left = event.pageX - 20 - mapWrapper.scrollLeft;
                        let top = event.pageY - 20 - mapWrapper.scrollTop;

                        if (left + infoboxWidth > viewportWidth) {
                            left = viewportWidth - infoboxWidth;
                        }
                        if (left < 0) left = 0;

                        if (top + infoboxHeight > viewportHeight) {
                            top = viewportHeight - infoboxHeight;
                        }
                        if (top < 0) top = 0;

                        Infobox.style.left = left + "px";
                        Infobox.style.top = top + "px";
                    }
                    //console.log(event.pageY-20-mapWrapper.scrollTop + "px")
                    //const x = mapWrapper.scrollLeft;
                    //const y = mapWrapper.scrollTop;

                    Infobox.style.display = "flex";

                    updateInfobox(name)

                    Infobox.addEventListener("mouseleave", hideBox, { once: true });

                });
            });

            allCountries.forEach((e, i) => {
                //colorCountry(e, randomHexColor());
                //colorCountry(e, "rgb(" + i + "," + i + "," + i + ")");
                //console.log(e)
                //colorCountry(e,"#407090")
            });
            loadData();
        });

        function hideBox() {
            currentCountryHover = "none"
            Infobox.style.display = "none";
        }

        function updateInfobox(name) {
            currentCountryHover = name
            console.log(Bokdata[name])

            const titleEl = document.getElementById("infoBoxTitle");
            const valueEl = document.getElementById("infoBoxValue");

            titleEl.innerHTML = CountryLUT[name];
            const TMPrealCount = Bokdata[name].realCountryCountLOCAL;
            if (TMPrealCount == 1) {
                valueEl.innerHTML = TMPrealCount + " bok lest";
            } else {
                valueEl.innerHTML = TMPrealCount + " bøker lest";
            }
            if (valueEl.innerHTML == "1 bøker lest") {
                valueEl.innerHTML = "1 bok lest"
            }

            fitTextToContainer(titleEl);
            fitTextToContainer(valueEl);
        }

        function showBookInfoForCurrentCountry() {
            console.log(currentCountryHover)
            countryBookInfoTitle.style.display = "block"
            countryBookInfoTitle.textContent = CountryLUT[currentCountryHover]
            bookInfoHolder.innerHTML = '';
            showDataForCountry(currentCountryHover)
            if (Bokdata[currentCountryHover].books.length == 0) {
                bookInfoHolder.innerHTML = 'Ingen bøker fra '+CountryLUT[currentCountryHover] +' har blitt lest ennå. Du kan bli den første!';
            }
            const offset = 80; // height of fixed header
            const y = countryBookInfoTitle.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });
            hideBox()
        }

        function showDataForCountry(country) {
            console.log(country)
            console.log(Bokdata[country])
            for (let i = 0; i < Bokdata[country].books.length; i++) {

                const book = document.createElement('div'); // create div
                book.className = 'bookCard';               // set class
                book.id = country+Bokdata[country].books[i].name;
                bookInfoHolder.appendChild(book);           // append to body
                
                const title = document.createElement('div');
                title.className = 'bookTitle';
                title.textContent = Bokdata[country].books[i].name;
                book.appendChild(title);

                fitTextToContainerWrap(title,30,15)

                const imageHolder = document.createElement('div');
                imageHolder.className = "imageHolder";
                book.appendChild(imageHolder);
                const img = document.createElement('img');
                img.className = 'bookImg';
                img.src = "https://hdkcdjdaexyxbwjwyacq.supabase.co/storage/v1/object/public/BokInfoJson/"+(Bokdata[country].books[i].image)+".jpg"
                img.alt = "bokomslaget til boka "+ CountryLUT[Bokdata[country].books[i].name]
                imageHolder.appendChild(img);
            
                const info = document.createElement('div');
                info.className = 'bookInfo';
                info.textContent = Bokdata[country].books[i].info;
                book.appendChild(info);

                img.onload = function() {
                    console.log("image loaded")
                    const imgWidth = Math.max(img.offsetWidth,200)
                    book.style.width = imgWidth+"px"
                    info.style.width = (imgWidth-10)+"px"
                    title.style.width = imgWidth+"px"
                    fitTextToContainerWrap(title,30,15)
                    console.log("Rendered width:", imgWidth); 
                }
                
                img.onerror = function() {
                    console.log("error loading image")
                    console.warn("Image failed to load. Using alternate state.");
                    const fallbackWidth = 200
                    book.style.width = fallbackWidth+"px"
                    info.style.width = (fallbackWidth-10)+"px"
                    title.style.width = fallbackWidth+"px"
                    img.remove();
                    const noImg = document.createElement('div');
                    noImg.className = "bookImgNoImg"
                    noImg.textContent = " Ingen bokomslag funnet til boka "+ Bokdata[country].books[i].name
                    imageHolder.appendChild(noImg);
                    fitTextToContainerWrap(title,30,15)
                }

                const bottomContainer = document.createElement("div");
                bottomContainer.className = 'bookBottomContainer'
                book.appendChild(bottomContainer);


                const sjanger = document.createElement("div");
                sjanger.className = 'sjangerShow'
                sjanger.id = Bokdata[country].books[i].sjang;
                //console.log(sjanger.id)
                let textSjang = Bokdata[country].books[i].sjang;
                let textSjangUpper = textSjang.charAt(0).toUpperCase() + textSjang.slice(1);
                sjanger.textContent = textSjangUpper
                bottomContainer.appendChild(sjanger);

                const timesRead = document.createElement("div");
                timesRead.className = 'sjangerShow'
                timesRead.id = "countCOLOR"
                timesRead.textContent = "Lest "+Bokdata[country].books[i].beenRead+" ganger";
                bottomContainer.appendChild(timesRead);

            }
        }

        function getRealCount(bookList) {
            //console.log(bookList)
            let total = 0
            for (let i = 0; i < bookList.length; i++) {
                total += bookList[i].beenRead || 1;
            }
            return total
        }
        
        function generateList() {
            const data = Bokdata
            let countryArrayBybook = Object.keys(data).sort((a, b) => data[b].realCountryCountLOCAL - data[a].realCountryCountLOCAL);
            console.log(countryArrayBybook); // ["name2", "name1", "name3"]
            countryArrayBybook.forEach(e => {
                let block = document.createElement("div");
                block.className = 'landElement'
                bokLandListeHolder.appendChild(block)
                
                let info = document.createElement("div");
                info.className = 'bokLandListeInfo'
                info.textContent = CountryLUT[e]
                block.appendChild(info)
                
                let val = document.createElement("div");
                val.textContent = Bokdata[e].realCountryCountLOCAL
                val.className = "bokLandListeVAL"
                block.appendChild(val)
                
                let button = document.createElement("button");
                
                button.className = Bokdata[e].count == 0 ? 'moreInfoBttn3' : 'moreInfoBttn2';
                button.textContent = "se bøker"
                button.addEventListener("click", () => {
                    currentCountryHover = e
                    showBookInfoForCurrentCountry()
                    console.log(e, " - clicked")
                });
                
                block.appendChild(button)
                fitTextToContainerWrap(info,25,15)

            });
            /*


            <div class="landElement">
                <div class="bokLandListeInfo">
                    Landnavn 0 
                </div>
                <button class="moreInfoBttn2" onclick="showBookInfoForCurrentCountry()">
                    se bøker
                </button>
            </div>
            */

            fitTextToContainer(landListeHolderBarSpacer,22);
            fitTextToContainer(landListeHolderTopBar,22);
        }

        let listDirrectionCurrentUP = true

        function reverseLandListeHolder() {
            if (listDirrectionCurrentUP) {
                reverserBTN.textContent = "Færrest bøker lest"
                bokLandListeHolder.style.flexDirection = "column-reverse";
            } else {
                reverserBTN.textContent = "Flest bøker lest"
                bokLandListeHolder.style.flexDirection = "column";
                console.log(bokLandListeHolder.style.flexDirection)
            }
            listDirrectionCurrentUP = !listDirrectionCurrentUP
            console.log(listDirrectionCurrentUP)
        }

        let Bokdata = []

        async function loadData() {
            const url = "https://hdkcdjdaexyxbwjwyacq.supabase.co/storage/v1/object/public/BokInfoJson/bokInfo.json"+"?"+Date.now(); 
            const res = await fetch(url);
            const data = await res.json();
            Bokdata = data

            console.log (Bokdata)
            for (const country in Bokdata) {
                Bokdata[country].realCountryCountLOCAL = getRealCount(Bokdata[country].books)
            }

            let mostbooks = 2;
            for (const country in Bokdata) {
                mostbooks = Math.max(mostbooks, Bokdata[country].realCountryCountLOCAL);
            }

            for (const country in Bokdata) {
                const count = Bokdata[country].realCountryCountLOCAL

                // 0 books: clear base color
                if (count === 0) {
                    colorCountry(country, ZERO_BOOK_COLOR);
                    continue;
                }

                // Normalize 1 → mostbooks into 0 → 1
                const t = (count - 1) / (mostbooks - 1 || 1);

                const h = lerp(COLOR_MIN.h, COLOR_MAX.h, t);
                const s = lerp(COLOR_MIN.s, COLOR_MAX.s, t);
                const l = lerp(COLOR_MIN.l, COLOR_MAX.l, t);

                const color = hslToCss(h, s, l);
                colorCountry(country, color);
            }
            generateList();
            //document.getElementById("output").textContent = JSON.stringify(data, null, 2);
        }


        function lerp(a, b, t) {
            return a + (b - a) * t;
        }

        function hslToCss(h, s, l) {
            return `hsl(${h}, ${s}%, ${l}%)`;
        }

        function randomHexColor() {
            return '#' + Math.floor(Math.random() * 0xffffff)
                .toString(16)
                .padStart(6, '0');
        }

        function fitTextToContainer(el, maxFont = 50, minFont = 4) {
            let fontSize = maxFont;
            el.style.fontSize = fontSize + "px";
            
            while (el.scrollWidth > el.clientWidth && fontSize > minFont) {
                //console.log(el.textContent)
                fontSize--;
                el.style.fontSize = fontSize + "px";
            }
        }

        function fitTextToContainerWrap(el, maxFont = 50, minFont = 4) {
            el.style.whiteSpace = "nowrap"; // start single line
            el.style.wordBreak = "normal";
            el.style.lineHeight = "1.1"; // optional, adjust spacing
            el.style.fontSize = maxFont + "px";

            let fontSize = maxFont;

            // Step 1: Shrink font until it fits single line or reaches minFont
            while (el.scrollWidth > el.clientWidth && fontSize > minFont) {
                fontSize--;
                el.style.fontSize = fontSize + "px";
            }

            // Step 2: If text still overflows, allow wrapping to 2 lines
            if (el.scrollWidth > el.clientWidth) {
                el.style.whiteSpace = "normal";       // allow wrapping
                el.style.wordBreak = "break-word";    // break long words if needed

                // Fit font size so that two lines fit the container height
                const maxHeight = el.clientHeight;
                fontSize = fontSize; // start from last font size

                while (el.scrollHeight > maxHeight && fontSize > minFont) {
                    fontSize--;
                    el.style.fontSize = fontSize + "px";
                }
            }
        }

        function colorCountry (countryName, color) {
            if (!svgDoc) return;

            // Case-insensitive selector for anything matching the name or class
            const matches = svgDoc.querySelectorAll(`
                [class="${countryName}"],
                [class="${countryName.toLowerCase()}"],
                [class="${countryName.toUpperCase()}"],
                [name="${countryName}"],
                [name="${countryName.toLowerCase()}"],
                [name="${countryName.toUpperCase()}"],
                [data-name="${countryName}"],
                [data-name="${countryName.toLowerCase()}"],
                [data-name="${countryName.toUpperCase()}"]
            `);

            matches.forEach(el => el.setAttribute('fill', color));

            if (matches.length === 0) {
                console.warn(`No paths found for ${countryName}`);
            }
        };
