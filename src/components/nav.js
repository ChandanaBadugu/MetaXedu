import "../styles/nav.css";


export default function Nav() {
  return (
    <>
      <nav class="nav nav-pills flex-column flex-sm-row">
        <a
          class="flex-sm-fill text-sm-center nav-link "
          aria-current="page"
          href="#"
        >
          Productive Stuff
        </a>
        <a class="flex-sm-fill text-sm-center nav-link" href="https://prismatic-bombolone-80c56a.netlify.app/">
          Meta Section
        </a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">
          Community
        </a>
        {/* <a class="flex-sm-fill text-sm-center nav-linkdisabled">Disabled</a> */}

        {/* <img src="./././public/zombie.png"/> */}
        <a href="https://peaceful-banoffee-f2893b.netlify.app/ "><img id="zom" src={"https://media.istockphoto.com/vectors/cartoon-angry-zombie-head-screaming-expression-halloween-vector-vector-id827616586?k=20&m=827616586&s=170667a&w=0&h=D0gfrMxzU5_mix60VpCcbYRquvH-gbvjVr3RM_3aikE="} /></a>
        
      
      </nav>
      
    </>
  );
}
