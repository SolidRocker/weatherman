(this.webpackJsonpweatherman=this.webpackJsonpweatherman||[]).push([[0],{102:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(9),s=n.n(i),o=(n(70),n(10)),c=n(11),l=n(13),u=n(12),d=n(43),h=n.n(d),p="a80e3d84441af6900f068affd975bd7b",f={toCapitalize:function(e){var t=e.split(" "),n="";return t.forEach((function(e){""!==n&&(n+=" "),n+=e.slice(0,1).toUpperCase()+e.slice(1)})),n},toDayOfWeek:function(e){switch(e){case 0:return"sun";case 1:return"mon";case 2:return"tue";case 3:return"wed";case 4:return"thu";case 5:return"fri";case 6:return"sat";default:return""}},getHourMark:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(new Date).getHours(),a=(n+e)%24,r=t?" ":"",i=r+"am";return a>12&&(a-=12,i=r+"pm"),0===a&&(a=12),a+i},getWeatherAPI:function(e,t){return"https://api.openweathermap.org/data/2.5/onecall?lat="+e+"&lon="+t+"&exclude=minutely&units=metric&appid=8a3b877f6488d0d35ad8827d3461a848"},getGeocodeAPI:function(e){return"http://api.positionstack.com/v1/forward?access_key="+p+"&query="+e},getReverseGeocodeAPI:function(e,t){return"http://api.positionstack.com/v1/reverse?access_key="+p+"&query="+e+","+t},createWeatherObj:function(e){var t=[],n=0;return e.daily.forEach((function(a){var r=new Date(1e3*a.dt),i=f.toDayOfWeek(r.getDay()),s={temp:{day:Math.round(a.temp.day),night:Math.round(a.temp.night)},feels:{day:Math.round(a.feels_like.day),night:Math.round(a.feels_like.night)},humidity:a.humidity,windspeed:Math.round(3.6*a.wind_speed),sunrise:a.sunrise,sunset:a.sunset,day:i,weather:{main:a.weather[0].main,description:f.toCapitalize(a.weather[0].description),icon:a.weather[0].icon},counter:n},o=24*n,c=o+23,l=[],u=0;c=c>47?23:c;for(var d=o=o>24?0:o;d<=c;++d){var h=e.hourly[d],p={hour:u,temp:Math.round(h.temp),feels:Math.round(h.feels_like),humidity:h.humidity,windspeed:Math.round(3.6*h.wind_speed),weather:{main:h.weather[0].main,description:f.toCapitalize(h.weather[0].description),icon:h.weather[0].icon}};l.push(p),++u}s.hourly=l,t.push(s),++n})),t}},g=(n(18),n(89),n(56)),j=(n(90),n(3)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onAnimationEnd=function(){2===a.state.spinState&&a.setState({spinState:0,isSpinning:!1})},a.state={spinState:0,isSpinning:!1},a}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.isSpinning!==e.isSpinning&&(!this.state.isSpinning&&this.props.isSpinning&&this.setState({isSpinning:!0,spinState:1}),this.state.isSpinning&&!this.props.isSpinning&&this.setState({spinState:2}))}},{key:"displaySpinner",value:function(){if(!this.state.isSpinning)return null;var e="spin-container";switch(this.state.spinState){case 0:e+=" spin-container-end-spin";break;case 1:e+=" spin-container-start-spin spin-container-fade-in";break;case 2:e+=" spin-container-fade-out"}return Object(j.jsx)("div",{className:e,onAnimationEnd:this.onAnimationEnd,children:Object(j.jsx)(g.a,{animation:"border",role:"status",variant:"light",className:"spin"})})}},{key:"render",value:function(){return Object(j.jsx)("div",{children:this.displaySpinner()})}}]),n}(a.Component),y=n(31),b=n.p+"static/media/thunder.19ff3c30.svg",v=n.p+"static/media/drizzle.9988edfd.svg",O=n.p+"static/media/rain.130d6250.svg",w=n.p+"static/media/snow.dce3f5e7.svg",S=n.p+"static/media/day.c33ef664.svg",x=n.p+"static/media/night.6cf4adcd.svg",k=n.p+"static/media/cloudy.24f9a474.svg",N=(n(92),n(63)),W=(n(96),n(97),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onUpdate=function(e){a.props.onUpdateTimeSlider(e)},a.state={spinState:0,isSpinning:!1},a}return Object(c.a)(n,[{key:"getMarks",value:function(){return{2:f.getHourMark(2),7:f.getHourMark(7),12:f.getHourMark(12),17:f.getHourMark(17),22:f.getHourMark(22)}}},{key:"getSliderClass",value:function(){var e="time-slider";return this.props.isByHour||(e+=" time-slider-day"),e}},{key:"render",value:function(){return Object(j.jsx)(N.a,{className:this.getSliderClass(),max:23,marks:this.getMarks(),onChange:this.onUpdate})}}]),n}(a.Component)),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={currSelection:0},a}return Object(c.a)(n,[{key:"isDayTimeNow",value:function(){var e=new Date;return!(e<this.props.currWeather.sunrise||e>this.props.currWeather.sunset)}},{key:"getBGIcon",value:function(){switch(this.props.currWeather.weather.main){case"Thunderstorm":return b;case"Drizzle":return v;case"Rain":return O;case"Snow":return w;case"Clear":return this.isDayTimeNow()?S:x;default:return k}}},{key:"getTemperature",value:function(){return this.isDayTimeNow()?this.props.currWeather.temp.day:this.props.currWeather.temp.night}},{key:"getFeels",value:function(){return this.isDayTimeNow()?this.props.currWeather.feels.day:this.props.currWeather.feels.night}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"info-body",children:[Object(j.jsx)("img",{className:"info-bg-icon",src:this.getBGIcon(),alt:this.props.currWeather.weather.main}),Object(j.jsxs)("div",{className:"info-temp",children:[this.getTemperature(),"\xb0"]}),Object(j.jsxs)("div",{className:"info-desc-text",children:[Object(j.jsx)(y.a,{className:"info-desc-icon"}),Object(j.jsx)("span",{children:Object(j.jsx)("b",{children:this.props.currWeather.weather.description})})]}),Object(j.jsxs)("div",{className:"info-desc-text",children:[Object(j.jsx)(y.b,{className:"info-desc-icon"}),Object(j.jsxs)("span",{children:["Humidity: ",Object(j.jsxs)("b",{children:[this.props.currWeather.humidity,"%"]})]})]}),Object(j.jsxs)("div",{className:"info-desc-text",children:[Object(j.jsx)(y.c,{className:"info-desc-icon"}),Object(j.jsxs)("span",{children:["Wind Speed: ",Object(j.jsxs)("b",{children:[this.props.currWeather.windspeed,"km/h"]})]})]}),Object(j.jsxs)("div",{className:"info-desc-text",children:[Object(j.jsx)(y.d,{className:"info-desc-icon"}),Object(j.jsxs)("span",{children:["Feels Like: ",Object(j.jsxs)("b",{children:[this.getTemperature(),"\xb0C"]})]})]}),Object(j.jsx)("div",{className:"info-space"}),Object(j.jsx)(W,{className:"info-time-slider",onUpdateTimeSlider:this.props.onUpdateTimeSlider,isByHour:this.props.isByHour})]})}}]),n}(a.Component),M=[{label:"Belgium",cities:["Belgium"]},{label:"China",cities:["Beijing","Changsha","Chongqing","Fuzhou","Guangzhou","Lanzhou","Nanjing","Harbin","Shanghai"]},{label:"France",cities:["Nantes","Lyon","Marseille","Paris"]},{label:"Germany",cities:["Berlin","Dusseldorf","Frankfurt","Hamburg","Munich","Stuttgart","Qwertyuuiopasdfghjkl"]},{label:"Malaysia",cities:["George Town","Ipoh","Johor Bahru","Kuala Lumpur","Kuala Terengganu","Malacca"]},{label:"Nepal",cities:["Nepal"]},{label:"Singapore",cities:["Singapore"]},{label:"Taiwan",cities:["Taipei","Taichung","Kaoshiung"]},{label:"USA",cities:["Atlanta","Denver","Houston","Miami","New York","Orlando","Phoenix","Los Angeles","Las Vegas","San Francisco","Seattle","Washington DC"]}],D=n(64),H=n(65),T=n(59),B=r.a.forwardRef((function(e,t){var n=e.children,a=e.onClick;return Object(j.jsxs)("div",{href:"",ref:t,className:"country-dropdown-current",onClick:function(e){e.preventDefault(),a(e)},children:[n,Object(j.jsxs)("span",{className:"country-dropdown-arrow",children:["\xa0",Object(j.jsx)(T.a,{})]})]})})),E=r.a.forwardRef((function(e,t){var n=e.children,r=e.style,i=e.className,s=e["aria-labelledby"],o=Object(a.useState)(""),c=Object(D.a)(o,2),l=c[0],u=c[1];return Object(j.jsxs)("div",{ref:t,style:r,className:i,"aria-labelledby":s,children:[Object(j.jsx)(H.a,{autoFocus:!0,className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",onChange:function(e){return u(e.target.value)},value:l}),Object(j.jsx)("ul",{className:"list-unstyled",children:n.filter((function(e){return!l||e.key.toLowerCase().startsWith(l)}))})]})})),L=n(26),A=(n(102),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"generateFullList",value:function(){var e=[];M.forEach((function(t){e.push({type:"country",name:t.label}),t.cities.forEach((function(t){e.push({type:"city",name:t})}))}));var t=e.map((function(e,t){if("country"===e.type){var n=e.name+"_"+e.type;return Object(j.jsx)(L.a.Header,{className:"country-dropdown-country",children:e.name.toUpperCase()},n)}return Object(j.jsxs)(L.a.Item,{eventKey:e.name,className:"country-dropdown-city-multi",children:["\xa0\xa0",e.name]},e.name)}));return Object(j.jsx)(L.a.Menu,{as:E,className:"country-dropdown-menu",children:t})}},{key:"render",value:function(){return Object(j.jsxs)(L.a,{className:"country-dropdown",onSelect:this.props.onSelect,children:[Object(j.jsx)(L.a.Toggle,{as:B,children:this.props.country}),this.generateFullList()]})}}]),n}(a.Component)),P=n(61),I=n.n(P),U=(n(104),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onSelect=function(e){a.setState({currSelection:e}),a.props.onUpdate(e)},a.renderBox=function(e,t){var n="scroll-box",r="scroll-arrow-hidden";a.state.currSelection==t&&(n="scroll-box-active",r="scroll-arrow");var i="http://openweathermap.org/img/wn/"+e.weather.icon+"@4x.png";return Object(j.jsxs)("div",{className:n,children:[Object(j.jsx)("div",{className:r}),Object(j.jsx)("div",{className:"scroll-date",children:e.day.toUpperCase()}),Object(j.jsx)("img",{className:"scroll-icon",src:i,alt:e.weather.description}),Object(j.jsxs)("div",{className:"scroll-temp-day",children:[e.temp.day,"\xb0"]}),Object(j.jsxs)("div",{className:"scroll-temp-night",children:[e.temp.night,"\xb0"]})]},t)},a.state={currSelection:0},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)(I.a,{alignCenter:!1,data:this.props.dailyWeather.map(this.renderBox),selected:this.props.currSelection,onSelect:this.onSelect})}}]),n}(a.Component)),F=n(37),z=n(27),G=n(62),_=n(47),R=(n(105),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onAnimationEnd=function(){a.setState({hasInit:!0})},a.state={hasInit:!1,polling:{enabled:!0,url:"https://ipv4.icanhazip.com/",interval:5e3,timeout:3e3}},a}return Object(c.a)(n,[{key:"displayAlert",value:function(e,t){return e||this.state.hasInit?Object(j.jsx)("div",{className:t,children:Object(j.jsx)(G.a,{className:t,variant:"danger",onAnimationEnd:this.onAnimationEnd,children:"You are currently offline. Please check your internet connection."})}):null}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(_.Online,{polling:this.state.polling,children:this.displayAlert(!1,"weather-alert-fade-out")}),Object(j.jsx)(_.Offline,{polling:this.state.polling,children:this.displayAlert(!0,"weather-alert-stay weather-alert-fade-in")})]})}}]),n}(a.Component)),J=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).closeModal=function(){a.setState({hasError:!1,errorMsg:""})},a.onSelectDayScroll=function(e){a.setState({currSelection:e,currWeather:a.state.dailyWeather[e],isByHour:!1,currHour:0})},a.onSelectDropdown=function(e){a.getCityGeocode(e)},a.onUpdateTimeSlider=function(e){a.setState({currHour:e,isByHour:!0})},a.state={isInit:!1,isLoading:!0,latitude:47.67401743463503,longitude:-122.1361362693161,country:"",dailyWeather:[],currSelection:0,currWeather:{},currHour:0,isByHour:!1,hasError:!1,errorMsg:""},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){if("geolocation"in navigator){var e=this;navigator.geolocation.getCurrentPosition((function(t){h.a.get(f.getReverseGeocodeAPI(t.coords.latitude,t.coords.longitude)).then((function(n){n.data.data.length>1&&e.setState({country:n.data.data[0].locality}),e.setState({latitude:t.coords.latitude,longitude:t.coords.longitude},(function(){e.getWeatherData()}))})).catch((function(t){e.setState({country:"Seattle"}),e.getWeatherData()}))}))}}},{key:"showErrorPopup",value:function(){return Object(j.jsxs)(z.a,{size:"md",centered:!0,show:this.state.hasError,onHide:this.closeModal,children:[Object(j.jsx)(z.a.Header,{closeButton:!0,children:Object(j.jsx)(z.a.Title,{children:"Error Loading Weather Data"})}),Object(j.jsx)(z.a.Body,{children:this.state.errorMsg}),Object(j.jsx)(z.a.Footer,{children:Object(j.jsx)(F.a,{variant:"primary",onClick:this.closeModal,children:"Close"})})]})}},{key:"getWeatherData",value:function(){var e=this,t=this;h.a.get(f.getWeatherAPI(this.state.latitude,this.state.longitude)).then((function(t){var n=f.createWeatherObj(t.data);e.setState({dailyWeather:n,isInit:!0,isLoading:!1,isByHour:!1,currHour:0,currWeather:n[0]})})).catch((function(e){var n="Network error. Please try again.";e.response&&(n="Error "+e.response.status+": "+e.response.statusText+". Please try again."),t.setState({isLoading:!1,hasError:!0,errorMsg:n})}))}},{key:"getCurrWeather",value:function(){var e=JSON.parse(JSON.stringify(this.state.currWeather));if(this.state.isByHour){var t=e.hourly[this.state.currHour];e.temp.day=e.temp.night=t.temp,e.feels.day=e.feels.night=t.feels,e.humidity=t.humidity,e.weather=t.weather,e.windspeed=t.windspeed}return e}},{key:"getDisplayDate",value:function(){var e=f.toCapitalize(this.state.currWeather.day)+", ";return e+=f.getHourMark(this.state.currHour,!0)}},{key:"getCityGeocode",value:function(e){var t=this;this.setState({isLoading:!0}),h.a.get(f.getGeocodeAPI(e),{timeout:5e3}).then((function(n){t.setState({latitude:n.data.data[0].latitude,longitude:n.data.data[0].longitude,country:e},(function(){t.getWeatherData()}))})).catch((function(e){console.log(e.message);t.setState({isLoading:!1,hasError:!0,errorMsg:"Cannot load data from city. Please try again."})}))}},{key:"showLoadingScreen",value:function(){return Object(j.jsx)(m,{isSpinning:this.state.isLoading})}},{key:"render",value:function(){return this.state.isInit?Object(j.jsxs)("div",{className:"weather",children:[this.showErrorPopup(),this.showLoadingScreen(),Object(j.jsxs)("header",{className:"weather-header",children:[Object(j.jsx)(R,{}),Object(j.jsx)(A,{country:this.state.country,onSelect:this.onSelectDropdown}),Object(j.jsxs)("div",{className:"weather-time",children:[this.getDisplayDate(),"\xa0"]})]}),Object(j.jsx)("div",{className:"weather-body-bg",children:Object(j.jsx)(C,{currWeather:this.getCurrWeather(),onUpdateTimeSlider:this.onUpdateTimeSlider,isByHour:this.state.isByHour})}),Object(j.jsx)(U,{dailyWeather:this.state.dailyWeather,currSelection:this.state.currSeection,onUpdate:this.onSelectDayScroll})]}):null}}]),n}(a.Component),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};n(106);s.a.render(Object(j.jsx)(J,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weatherman",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/weatherman","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(t,e)}))}}(),Y()},18:function(e,t,n){},70:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},97:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.1a507d95.chunk.js.map