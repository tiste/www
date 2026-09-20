import * as React from "react";
import {
  appStats,
  statsDate,
  yearlyDownloads,
} from "@/app/components/sections/appStats";

const numberFormat = new Intl.NumberFormat("fr-FR");
const ratingFormat = new Intl.NumberFormat("fr-FR", {
  minimumFractionDigits: 1,
});

const maxUnits = Math.max(...yearlyDownloads.map((d) => d.units));

function Rating({
  store,
  rating,
}: {
  store: string;
  rating?: { value: number; count: number };
}) {
  if (!rating) {
    return null;
  }

  return (
    <span className="stats-rating">
      {ratingFormat.format(rating.value)}★{" "}
      <small>
        {store} · {rating.count} avis
      </small>
    </span>
  );
}

export function StatsHighlights() {
  return (
    <section className="section stats-highlights">
      <div className="container content">
        <p className="stats-overline">
          Mes apps mobiles en production, en chiffres
        </p>

        <ul className="stats-tiles">
          <li>
            <span className="stats-value">{"73\u202f000+"}</span>
            <span className="stats-label">téléchargements cumulés</span>
            <small>iOS et Android confondus</small>
          </li>
          <li>
            <span className="stats-value">4,7★</span>
            <span className="stats-label">de note moyenne</span>
            <small>sur 383 avis App Store et Google Play</small>
          </li>
          <li>
            <span className="stats-value">×8</span>
            <span className="stats-label">de téléchargements iOS</span>
            <small>entre 2021 et 2025</small>
          </li>
          <li>
            <span className="stats-value">0</span>
            <span className="stats-label">donnée personnelle collectée</span>
            <small>
              sur 1 à 10 et Pacevisor, d'après leurs fiches App Store
            </small>
          </li>
        </ul>

        <p>
          <a href="#stats" className="emphase has-text-underlined">
            Voir le détail des chiffres
          </a>
        </p>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="section stats-section">
      <div className="container content">
        <h2>
          Mes apps, <strong>en chiffres</strong>
        </h2>

        <p className="is-size-5">
          Je conçois, publie et maintiens mes propres applications mobiles en
          production. Voici ce que ça donne, chiffres des stores à l'appui.
        </p>

        <div className="columns is-variable is-6">
          <div className="column is-5">
            <h3 className="is-size-5">Téléchargements App Store par an</h3>

            <figure className="stats-chart">
              <div className="stats-chart-plot" aria-hidden="true">
                {yearlyDownloads.map((d) => (
                  <div key={d.year} className="stats-chart-column">
                    <span className="stats-chart-value">
                      {numberFormat.format(d.units)}
                    </span>
                    <span
                      className={`stats-chart-bar${d.partial ? " is-partial" : ""}`}
                      style={{ height: `${(d.units / maxUnits) * 100}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="stats-chart-axis" aria-hidden="true">
                {yearlyDownloads.map((d) => (
                  <span key={d.year}>
                    {d.year}
                    {d.partial && <small>en cours</small>}
                  </span>
                ))}
              </div>

              <table className="is-sr-only">
                <caption>Téléchargements App Store par an</caption>
                <thead>
                  <tr>
                    <th scope="col">Année</th>
                    <th scope="col">Téléchargements</th>
                  </tr>
                </thead>
                <tbody>
                  {yearlyDownloads.map((d) => (
                    <tr key={d.year}>
                      <th scope="row">{d.year}</th>
                      <td>
                        {numberFormat.format(d.units)}
                        {d.partial && ` (année en cours, au ${statsDate})`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <figcaption>
                Toutes apps confondues. 2026 est une année incomplète, arrêtée
                au {statsDate}.
              </figcaption>
            </figure>
          </div>

          <div className="column is-7">
            <h3 className="is-size-5">Détail par application</h3>

            <div className="table-container">
              <table className="table is-fullwidth stats-table">
                <thead>
                  <tr>
                    <th scope="col">App et notes</th>
                    <th scope="col" className="has-text-right">
                      iOS
                    </th>
                    <th scope="col" className="has-text-right">
                      Android
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appStats.map((app) => (
                    <tr key={app.name}>
                      <th scope="row">
                        {app.link ? (
                          <a
                            href={app.link}
                            className="emphase has-text-underlined"
                          >
                            {app.name}
                          </a>
                        ) : (
                          app.name
                        )}
                        <Rating store="iOS" rating={app.iosRating} />
                        <Rating store="Android" rating={app.androidRating} />
                      </th>
                      <td className="has-text-right">
                        {numberFormat.format(app.ios)}
                      </td>
                      <td className="has-text-right">
                        {app.android ? numberFormat.format(app.android) : "–"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className="stats-footnote">
          Chiffres relevés le {statsDate} dans App Store Connect (unités) et la
          Google Play Console (nouveaux utilisateurs cumulés). Notes issues des
          fiches App Store et de la Play Console.
        </p>
      </div>
    </section>
  );
}
