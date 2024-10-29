import React from "react";
import { Map } from "lucide-react";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <main className="bg-gradient-to-r from-green-700 to-green-600 text-white pb-40 rounded-3xl m-10">
        <div className="container mx-auto px-6">
          <nav className="flex justify-between items-center py-4">
            <h1 className="text-3xl font-bold text-orange-500">DIASPORACOM</h1>
            <ul className="flex space-x-6 items-center font-bold">
              <li>Login</li>
              <li>
                <button className="bg-orange-500 px-3 py-2 rounded-full">
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>

          <section className="container mx-auto mt-10">
            <div className="flex items-center">
              <div className="bg-white w-56 h-56 rounded-full"></div>
              <div className="ml-6 text-2xl">
                <h1 className="text-2xl font-bold">Julien</h1>
                <p>Développeur web frontend freelance</p>
                <p>15+ projets complétés</p>
                <div className="bg-white px-4 rounded-full flex items-center w-full">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-2 text-center"></div>
                  <p>Disponibilité confirmée</p>
                </div>
                <div className="flex mt-1">
                  <Map />
                  <p className="ml-1">Localisation</p>
                </div>
                <p>Valence, France</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <section className="container mx-auto mt-6 px-6">
        <h2 className="text-xl font-bold mb-2">
          👋 Bonjour et bienvenue sur mon profil !
        </h2>
        <p>
          Je suis Julien, un développeur web frontend freelance spécialisé dans
          le développement de sites, d’applications web SaaS et d’API avec
          React.js / Next.js / TypeScript et Tailwind. Avec plus de 15 projets
          terminés, je suis un expert dédié à la création de solutions
          performantes et sécurisées.
        </p>

        <h3 className="text-lg font-bold mt-4">
          💼 Expérience professionnelle :
        </h3>
        <p>
          En tant que développeur frontend, j'ai conçu et développé des
          applications web évolutives ainsi que des interfaces utilisateur
          attractives et réactives. Mon expertise couvre également les
          microservices, CI/CD, et l'intégration de Stripe pour les paiements.
        </p>

        <h3 className="text-lg font-bold mt-4">🎯 Mes services :</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            ✔️ Développement front avec React.js / Next.js / TypeScript /
            JavaScript
          </li>
          <li>✔️ Développement de webservices</li>
          <li>
            ✔️ Création d'API sur mesure avec React.js / Next.js / TypeScript /
            JavaScript
          </li>
          <li>✔️ Création d'applications web</li>
          <li>✔️ Création de sites web / e-commerce sur mesure</li>
          <li>✔️ Création de SaaS / Micro SaaS</li>
        </ul>

        <h3 className="text-lg font-bold mt-4">🚀 Exemples de projets :</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>→ Simulateur moteur pour Honda en PHP Laravel (API) et Vue.js</li>
          <li>
            → Plateforme RH de génération de documents via IA en PHP Laravel et
            HTML/CSS/JavaScript
          </li>
          <li>
            → Guide papier adapté au web avec PHP Laravel (API) / Vue.js /
            Bootstrap
          </li>
          <li>
            → Console d'administration front-end pour un réseau social
            décentralisé en React / Next.js
          </li>
          <li>
            → Application web pour exporter un référentiel client en Excel (PHP,
            Laravel / Tailwind / JavaScript)
          </li>
        </ul>

        <p className="mt-4">💬 Prêt à démarrer un nouveau projet ?</p>
        <p>
          N'hésitez pas à me contacter pour discuter de vos besoins et de la
          façon dont je peux vous aider à réaliser votre vision ! 🌟
        </p>
      </section>
      <Footer />
    </>
  );
}
