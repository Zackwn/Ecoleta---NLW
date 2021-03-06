import Knex from "knex"

export async function seed(knex: Knex) {
    await knex("items").insert([
        { title: "Lâmpadas", image_url: "lampadas.svg"},
        { title: "Pilhas e Baterias", image_url: "baterias.svg"},
        { title: "Papéis e Papelão", image_url: "papeis-papelao.svg"},
        { title: "Resíduos Eletrônicos", image_url: "eletronicos.svg"},
        { title: "Rsíduos Orgânicos", image_url: "organicos.svg"},
        { title: "Óleo de Cozinha", image_url: "oleo.svg"},
    ])
}