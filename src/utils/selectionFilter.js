export default function selectionFilter({ series, films }) {
  return {
    series: [
      { title: "Documentaries", data: series.filter(({ genre }) => genre === "documentaries") },
      { title: "Comedies", data: series.filter(({ genre }) => genre === "comedies") },
      { title: "Children", data: series.filter(({ genre }) => genre === "children") },
      { title: "Crime", data: series.filter(({ genre }) => genre === "crime") },
      { title: "Feel Good", data: series.filter(({ genre }) => genre === "feel-good") },
    ],
    films: [
      { title: "Drama", data: films.filter(({ genre }) => genre === "drama") },
      { title: "Thriller", data: films.filter(({ genre }) => genre === "thriller") },
      { title: "Children", data: films.filter(({ genre }) => genre === "children") },
      { title: "Suspense", data: films.filter(({ genre }) => genre === "suspense") },
      { title: "Romance", data: films.filter(({ genre }) => genre === "romance") },
    ]
  }
}