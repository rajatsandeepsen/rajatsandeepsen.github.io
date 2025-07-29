import { ProjectData } from "@/data/projects";

interface OGPreview {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName: string;
  type: string;
}

function extractMetaTag(content: string, property: string): string {
  const regex = new RegExp(
    `<meta[^>]+(?:property|name)=[\"']${property}[\"'][^>]+content=[\"']([^\"']+)[\"'][^>]*>`,
    'i'
  );
  const match = content.match(regex);
  return match ? match[1] : '';
}

export async function getOGPreview(url: string): Promise<OGPreview> {
  const response = await fetch(url);
  const html = await response.text();

  const preview: OGPreview = {
    title: extractMetaTag(html, 'og:title') || (html.match(/<title>([^<]*)<\/title>/i)?.[1] || ''),
    description: extractMetaTag(html, 'og:description') || extractMetaTag(html, 'description'),
    image: extractMetaTag(html, 'og:image'),
    url,
    siteName: extractMetaTag(html, 'og:site_name'),
    type: extractMetaTag(html, 'og:type'),
  };

  return preview;
}

const allProject = Object.entries(ProjectData).flatMap(
	([_, projects]) => projects,
);

const ogPreviewPromises = allProject
  .map(async (project) => {
    const githubLinks = project.links.filter(link => link.href.includes("github.com"));

    if (githubLinks.length > 0) {
      const ogData = await getOGPreview(githubLinks[0].href);
      return {
        title: project.title,
        image: ogData.image,
      };
    } else if (project.links.length > 0) {

      const ogData = await getOGPreview(project.links[0].href);
      return {
        title: project.title,
        image: ogData.image,
      };
    }

    return null
  });

// @ts-ignore
const ogPreviews = await Promise.all(ogPreviewPromises);

console.log(ogPreviews.filter(Boolean));
