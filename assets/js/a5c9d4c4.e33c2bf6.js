"use strict";(self.webpackChunktorq_docs=self.webpackChunktorq_docs||[]).push([[649],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(h,s(s({ref:t},l),{},{components:a})):n.createElement(h,s({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8453:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={},c="Setup with Docker Compose (recommended)",d={unversionedId:"docker-compose",id:"docker-compose",title:"Setup with Docker Compose (recommended)",description:"The quickest way to run Torq is from a prebuilt docker image. This guide shows you how to set up and run Torq using Docker Compose. You can also compile your own docker image following this guide.",source:"@site/docs/docker-compose.md",sourceDirName:".",slug:"/docker-compose",permalink:"/docs/docker-compose",draft:!1,editUrl:"https://github.com/lncapital/torq/tree/main/packages/create-docusaurus/templates/shared/docs/docker-compose.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",next:{title:"Setup with Docker",permalink:"/docs/docker"}},l={},p=[{value:"Create a database and user for Torq",id:"create-a-database-and-user-for-torq",level:2},{value:"Start TimescaleDB",id:"start-timescaledb",level:3},{value:"Create a database and user",id:"create-a-database-and-user",level:3},{value:"Create a docker compose file",id:"create-a-docker-compose-file",level:2},{value:"Start Torq",id:"start-torq",level:2}],m={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-with-docker-compose-recommended"},"Setup with Docker Compose (recommended)"),(0,o.kt)("p",null,"The quickest way to run Torq is from a prebuilt docker image. This guide shows you how to set up and run Torq using Docker Compose. You can also compile your own docker image following this guide."),(0,o.kt)("h2",{id:"create-a-database-and-user-for-torq"},"Create a database and user for Torq"),(0,o.kt)("h3",{id:"start-timescaledb"},"Start TimescaleDB"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you already have a PostgreSQL database with TimescaleDB plugin you can skip to the next section (creating a database user)"))),(0,o.kt)("p",null,"Change ",(0,o.kt)("inlineCode",{parentName:"p"},"<DBPassword>")," to your prefered databse root password and start the Timescale DB container with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -d --name timescaledb -p 5432:5432 \\\n-v <AbsoluteDataPath>:/var/lib/postgresql/data \\\n-e POSTGRES_PASSWORD=<DBPassword> timescale/timescaledb:latest-pg14\n")),(0,o.kt)("h3",{id:"create-a-database-and-user"},"Create a database and user"),(0,o.kt)("p",null,"Shell into the timescale container to run ",(0,o.kt)("inlineCode",{parentName:"p"},"psql"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec -it timescaledb bash\npsql -U postgres\n")),(0,o.kt)("p",null,"Inside the postgres interactive terminal run the following three SQL commands to create a database and user. Again change ",(0,o.kt)("inlineCode",{parentName:"p"},"<DBPassword>")," to your prefered password for the database user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-postgresql"},"CREATE DATABASE torq;\nCREATE USER torq WITH ENCRYPTED PASSWORD '<DBPassword>';\nGRANT ALL PRIVILEGES ON DATABASE torq TO torq;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After creating the database, exit psql and the TimescaleDB container by hitting ",(0,o.kt)("inlineCode",{parentName:"strong"},"CTRL d")," twice.")),(0,o.kt)("h2",{id:"create-a-docker-compose-file"},"Create a docker compose file"),(0,o.kt)("p",null,"Create a file named docker-compose.yml and store it in a seperate directory. Add this to the file and fill inn password and username information as indicated by ",(0,o.kt)("inlineCode",{parentName:"p"},"<ThisNotation>")," (also replace/delete ",(0,o.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,o.kt)("inlineCode",{parentName:"p"},">"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3.7"\nservices:\n  torq:\n    # Consider specifying the exact version you want instead of "latest" (e.g. "0.4.1")\n    image: "lncapital/torq:latest"\n    restart: always\n    depends_on:\n      - "db"\n    command:\n      - --db.user\n      - <YourDbUsername>\n      - --db.password\n      - <YourDbPassword>\n      - --db.name\n      - torq\n      - --db.host\n      - db\n      - --db.port\n      - "5432"\n      - --torq.password\n      - <YourFrontendPassword>\n      - start\n  db:\n    image: "timescale/timescaledb:latest-pg14"\n    restart: always\n    environment:\n      POSTGRES_PASSWORD: <YourPostgresDbRootPassword>\n    ports:\n      - "5432:5432"\n')),(0,o.kt)("h2",{id:"start-torq"},"Start Torq"),(0,o.kt)("p",null,"Start Torq by running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose- up -d"),". You can now visit ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost:8080"),". Remember to visit the settings page to enter LND credentials."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Remember to upload your LND credentials!")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Head Up! Torq will not subscribe to data from LND until you have uploaded the readme.macaroon and tls.cert file on the Settings page. You also need to spesify the ip and port to the GRPC (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.0.0:10009"),")"))))}u.isMDXComponent=!0}}]);