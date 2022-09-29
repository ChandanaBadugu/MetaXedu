
export default function Nav() {
  return (
    <>
      <nav class="nav nav-pills flex-column flex-sm-row">
        <a
          class="flex-sm-fill text-sm-center nav-link active"
          aria-current="page"
          href="#"
        >
          Post Section
        </a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">
          Meta Section
        </a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">
          Community
        </a>
        <a class="flex-sm-fill text-sm-center nav-link disabled">Disabled</a>
      </nav>
    </>
  );
}
