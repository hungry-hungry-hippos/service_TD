import React from 'react';

const { style } = require('./style.jsx');


const App = () => (
  <div style={style.footertop}>
    <div className="row no-gutters">
      <div className="col col-12 col-lg-6 d-flex text-white">
        <div className="flex-item">
          <a href="https://www.instagram.com/zagat/" target="_blank" rel="noopener noreferrer">
            <img style={style.icon} alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZWZzLz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48ZyBmaWxsPSIjMDAwMDAwIiBpZD0iRmFjZWJvb2siPjxwYXRoIGQ9Ik0yNSw1MCBDMzguODA3MTE5NCw1MCA1MCwzOC44MDcxMTk0IDUwLDI1IEM1MCwxMS4xOTI4ODA2IDM4LjgwNzExOTQsMCAyNSwwIEMxMS4xOTI4ODA2LDAgMCwxMS4xOTI4ODA2IDAsMjUgQzAsMzguODA3MTE5NCAxMS4xOTI4ODA2LDUwIDI1LDUwIFogTTI1LDQ3IEMzNy4xNTAyNjUxLDQ3IDQ3LDM3LjE1MDI2NTEgNDcsMjUgQzQ3LDEyLjg0OTczNDkgMzcuMTUwMjY1MSwzIDI1LDMgQzEyLjg0OTczNDksMyAzLDEyLjg0OTczNDkgMywyNSBDMywzNy4xNTAyNjUxIDEyLjg0OTczNDksNDcgMjUsNDcgWiBNMjYuODE0NTE5NywzNiBMMjYuODE0NTE5NywyNC45OTg3MTIgTDMwLjA2ODc0NDksMjQuOTk4NzEyIEwzMC41LDIxLjIwNzYwNzIgTDI2LjgxNDUxOTcsMjEuMjA3NjA3MiBMMjYuODIwMDQ4NiwxOS4zMTAxMjI3IEMyNi44MjAwNDg2LDE4LjMyMTM0NDIgMjYuOTIwNzIwOSwxNy43OTE1MzQxIDI4LjQ0MjU1MzgsMTcuNzkxNTM0MSBMMzAuNDc2OTYyOSwxNy43OTE1MzQxIEwzMC40NzY5NjI5LDE0IEwyNy4yMjIyNzY5LDE0IEMyMy4zMTI4NzU3LDE0IDIxLjkzNjg2NzgsMTUuODM5MDkzNyAyMS45MzY4Njc4LDE4LjkzMTg3MDkgTDIxLjkzNjg2NzgsMjEuMjA4MDM2NiBMMTkuNSwyMS4yMDgwMzY2IEwxOS41LDI0Ljk5OTE0MTMgTDIxLjkzNjg2NzgsMjQuOTk5MTQxMyBMMjEuOTM2ODY3OCwzNiBMMjYuODE0NTE5NywzNiBaIE0yNi44MTQ1MTk3LDM2IiBpZD0iT3ZhbC0xIi8+PC9nPjwvZz48L3N2Zz4=" />
          </a>
        </div>
        <div className="flex-item">
          <a href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
        <div className="flex-item">
          <a href="#">
            <ion-icon name="logo-googleplus"></ion-icon>
          </a>
        </div>
        <div className="flex-item">
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
      <div className="col col-12 col-lg-6 text-white">
        Hi
      </div>
    </div>
  </div>
);


export default App;
