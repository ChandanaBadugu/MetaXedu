import "../styling/middle.css";
function Middle() {
  return (
    <div id="topmid">
      <div id="mid">
        <nav class="nav nav-pills flex-column flex-sm-row">
          {/* <a
          class="flex-sm-fill text-sm-center nav-link "
          aria-current="page"
          href="#"
        >
          Post Section
        </a> */}
          <a
            class="flex-sm-fill text-sm-center nav-link"
            href="https://prismatic-bombolone-80c56a.netlify.app/"
          >
            Post Section
          </a>
          {/* <a class="flex-sm-fill text-sm-center nav-link" href="#">
          Community
        </a> */}
          {/* <a class="flex-sm-fill text-sm-center nav-link disabled">Disabled</a> */}
        </nav>


        <br/>
        <div class="card text-bg-dark">
          <img
            src="https://www.gannett-cdn.com/-mm-/6025b6568c8a5d6604c34d92834a85f0b4ee8205/c=0-399-3032-2105/local/-/media/2021/09/13/USATODAY/usatsports/MotleyFool-TMOT-6b0d4105-space.jpg?width=3032&height=1706&fit=crop&format=pjpg&auto=webp"
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay">
            <h5 class="card-title">Planet Earth</h5>
            <p class="card-text">
            Earth is billions of years old.
            </p>
            <p class="card-text">
              {/* <small>Last updated 3 mins ago</small> */}
            </p>
          </div>
        </div>

        <div>
        <br/>
        </div>

        <div class="card text-bg-dark">
          <img
            src="https://webunwto.s3.eu-west-1.amazonaws.com/inline-images/animals.jpg"
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay">
            <h5 class="card-title">Animal</h5>
            <p class="card-text">
              {/* This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. */}
            </p>
            <p class="card-text">
              {/* <small>Last updated 3 mins ago</small> */}
            </p>
          </div>
        </div>

        <div>
          <br/>
        </div>

        <div class="card text-bg-dark">
          <img
            src="https://wallpaperaccess.com/full/1428481.jpg"
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay">
            <h5 class="card-title">Computer Science</h5>
            <p class="card-text">
            Fundamental areas of computer science Computer science is the study of computation, automation, and information. Computer science spans theoretical disciplines to practical disciplines
            </p>
            <p class="card-text">
              {/* <small>Last updated 3 mins ago</small> */}
            </p>
          </div>
        </div>

        <div>
        <br/>
        </div>

        <div class="card text-bg-dark">
          <img
            src="https://www.visiblebody.com/hubfs/Learn_Articles/Lymphatic_System/6B-Adaptive-Immunity.jpg"
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay">
            <h5 class="card-title">Immunity</h5>
            <p class="card-text">
              {/* This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. */}
            </p>
            <p class="card-text">
              {/* <small>Last updated 3 mins ago</small> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Middle;
