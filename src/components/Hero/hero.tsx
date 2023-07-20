
import ImgKid from '/public/img/kid.png?jsx';import { component$ } from "@builder.io/qwik";
import hero from "../../../public/img/kid.png"

export default component$(() => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse 2xl:justify-stretch">
                <ImgKid class="sticky" />
                <div>
                <h1 class="text-5xl font-bold 2xl:text-7xl">Meilleurs cours en ligne pour réussir</h1>
                <p class="py-6">à partir de <b>1000 DA / Mois</b>
                </p>
                <button class="btn bg-pink-600">Decouvrir</button>
                </div>
            </div>
        </div>
    );
});