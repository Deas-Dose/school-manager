import { component$ } from "@builder.io/qwik"

export default component$(() => {
    return (
        <>
            <div class="navbar bg-base-100 text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                    <label tabIndex={0} class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base- rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-2xl">LOGO</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1 ">
                        <li tabIndex={0} class="">
                            <details>
                            <summary class="text-lg">Nos Solutions</summary>
                            <ul class="p-2">
                                <li><a>Contenu pédagogique</a></li>
                                <li><a>Aide au devoirs</a></li>
                                <li><a>Cours en vision conférence</a></li>
                                <li><a>Stages de révisiion</a></li>
                            </ul>
                            </details>
                        </li>
                        <li tabIndex={1} >
                            <details>
                            <summary class="text-lg">Professionnels</summary>
                            <ul class="p-2">
                                <li><a>Professeurs Particuliers</a></li>
                                <li><a>Etablissement</a></li>
                                <li><a>Entreprise</a></li>
                            </ul>
                            </details>
                        </li>
                        <li><a class="text-lg">+2137777777</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn bg-pink-600">Se Connecter</a>
                </div>
            </div>
        </>
    );
});