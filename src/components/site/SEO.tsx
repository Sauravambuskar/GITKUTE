import { Helmet } from "react-helmet-async";

const SITE_NAME = "Kute Hospital";
const SITE_URL  = "https://kutehospital.com";
const OG_IMAGE  = "https://backup.kutehospital.com/wp-content/uploads/2024/02/im-1536x864.jpg";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  schema?: object | object[];
}

const SEO = ({
  title,
  description = "Kute Hospital, Sangamner — modern multi-specialty hospital with 24×7 emergency & ICU, laparoscopy surgery, pathology lab, maternity care, and visiting specialists.",
  canonical,
  image = OG_IMAGE,
  type = "website",
  noIndex = false,
  schema,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Compassionate Multi-Specialty Care in Sangamner`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Kute Hospital",
    url: SITE_URL,
    logo: "https://backup.kutehospital.com/wp-content/uploads/2024/02/kutedr1-1024x384.png",
    image: OG_IMAGE,
    description,
    telephone: ["+918888882225", "+918888732225"],
    email: "info@kutehospital.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sangamner City and Taluka",
      addressLocality: "Sangamner",
      addressRegion: "Maharashtra",
      postalCode: "422605",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.5748",
      longitude: "74.2095",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    medicalSpecialty: [
      "General Surgery",
      "Laparoscopy",
      "Emergency Medicine",
      "Obstetrics",
      "Pathology",
    ],
    hasMap: "https://www.google.com/maps?q=Sangamner,Maharashtra",
    sameAs: ["https://www.justdial.com/Sangamner/Kute-Hospital"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "168",
    },
  };

  const schemas = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [defaultSchema];

  return (
    <Helmet>
      {/* Primary */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Keywords */}
      <meta
        name="keywords"
        content="Kute Hospital, hospital Sangamner, multi-specialty hospital Sangamner, laparoscopy Sangamner, ICU Sangamner, 24x7 emergency Sangamner, Dr Pradeep Kute, pathology lab Sangamner, maternity hospital Sangamner, ambulance Sangamner"
      />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1536" />
      <meta property="og:image:height" content="864" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Sangamner, Maharashtra" />
      <meta name="geo.position" content="19.5748;74.2095" />
      <meta name="ICBM" content="19.5748, 74.2095" />

      {/* Structured Data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
