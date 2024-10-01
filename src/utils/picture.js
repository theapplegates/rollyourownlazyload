// Generate an picture tag with image src URLs which use Neltify image transforms

module.exports = (url, alt = "Missing alt text") => {
  return `<picture>
  <source srcset="/images/${url}?nf_resize=fit&w=1800" media="(min-width: 1800px)">
  <source srcset="/images/${url}?nf_resize=fit&w=1200" media="(min-width: 1200px)">
  <source srcset="/images/${url}?nf_resize=fit&w=1024" media="(min-width: 1024px)">
  <source srcset="/images/${url}?nf_resize=fit&w=740" media="(min-width: 740px)">
  <source srcset="/images/${url}?nf_resize=fit&w=400" media="(min-width: 400px)">
  <source srcset="/images/${url}?nf_resize=fit&w=200" media="(min-width: 200px)">
  <img src="/images/${url}?nf_resize=fit&w=150" alt="${alt}" />
</picture>`;
};
