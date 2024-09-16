push!(LOAD_PATH, "../src/")

using Hephaestus
using Documenter
using DocumenterCitations

makedocs(
    sitename = "Hephaestus.jl",
    authors = "Damir Akchurin, AkchurinDA@gmail.com",
    pages = [
        "Home" => "index.md",
        "Manual" => "Manual.md",
        "API" => "API.md"],
    format = Documenter.HTML(
            assets = ["assets/Citations.css"]),
    plugins = [
        CitationBibliography(
            joinpath(@__DIR__, "src", "References.bib"),
            style = :numeric)])

deploydocs(
    repo = "github.com/AkchurinDA/Hephaestus.jl")