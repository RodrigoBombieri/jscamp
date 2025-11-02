

function App() {

  return (
    <>
     <header>
        <h1>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            DevJobs
        </h1>

        <nav>
            <a href="index.html">Inicio</a>
            <a href="empleos.html" class="active">Empleos</a>
        </nav>

        <div>
            <a href="">Subir CV</a>
            <devjobs-avatar service="github" username="RodrigoBombieri" size="40"></devjobs-avatar>
            <devjobs-avatar service="google" username="google.com" size="40"></devjobs-avatar>
        </div>

    </header>

    <main>
        <section class="job-search-hero">
            <h1>Encuentra tu próximo trabajo</h1>
            <p>Explora las últimas ofertas de empleo en el sector tecnológico.</p>
            <form role="search">
                <div class="search-bar">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-search">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                    </span>

                    <input id="empleos-search-input" required type="search"
                        placeholder="Buscar empleos por titulo" aria-label="Buscar empleos"></input>
                </div>

                <div class="desplegables">
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
            <span>Mostrando <strong id="job-count">0</strong> de <strong id="total-jobs">0</strong> empleos</span>
        </section>

        <section class="job-results" id="resultados">
            <h3>Resultados de búsqueda</h3>
            <div class="jobs-listings">
                
            </div>
            <nav aria-label="Paginación" class="paginacion">
                <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 6l-6 6l6 6" />
                    </svg></a>
                <a class="is-active" href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 6l6 6l-6 6" />
                    </svg></a>
            </nav>
        </section>

    </main>

    <footer>
        <small>&copy; 2025 DevJobs. Todos los derechos reservados.</small>
    </footer>
    </>
  )
}

export default App
