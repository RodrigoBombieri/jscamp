export function Header(){
    return(
        <header>
        <h1>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            DevJobs
        </h1>

        <nav>
            <a href="index.html">Inicio</a>
            <a href="empleos.html" className="active">Empleos</a>
        </nav>

        <div>
            <a href="">Subir CV</a>
            <devjobs-avatar service="github" username="RodrigoBombieri" size="40"></devjobs-avatar>
            <devjobs-avatar service="google" username="google.com" size="40"></devjobs-avatar>
        </div>

    </header>
    )
}
