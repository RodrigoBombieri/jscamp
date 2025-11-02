export function SearchFormSection() {
  return (
    <section className="job-search-hero">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora las últimas ofertas de empleo en el sector tecnológico.</p>
      <form role="search">
        <div className="search-bar">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </span>

          <input
            id="empleos-search-input"
            required
            type="search"
            placeholder="Buscar empleos por titulo"
            aria-label="Buscar empleos"
          ></input>
        </div>

        <div className="desplegables">
          <select name="technology" id="filter-technology">
            <option value="">Tecnología</option>
            <optgroup label="Tecnologías populares">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
            </optgroup>
            <option value="java">Java</option>
            <hr />
            <option value="csharp">C#</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <hr />
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
            <option value="mobile">Mobile</option>
          </select>

          <select name="location" id="filter-location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
            <option value="bsas">Buenos Aires</option>
          </select>

          <select name="experience-level" id="filter-experience-level">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>
      </form>
      <span>
        Mostrando <strong id="job-count">0</strong> de{" "}
        <strong id="total-jobs">0</strong> empleos
      </span>
    </section>
  );
}
